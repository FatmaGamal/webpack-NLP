import axios from "axios"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    if (formText.trim()) {

        let colorEmotionDetected = Client.checkForValue(formText);

        if (colorEmotionDetected) {
            document.querySelector('body').className = formText;
        } else {
            document.querySelector('body').className = '';
        }

        axios.post('http://localhost:8081/analyze', { text: formText })
            .then((res) => {
                document.querySelector('.container').style.display = 'block';
                document.getElementById('results').innerHTML = res.data.score_tag;
            })
            .catch((err) => {
                document.querySelector('.container').style.display = 'block';
                document.getElementById('results').innerHTML = `
                <h2>There was an error getting the analysis</h2>
                <h4>Please Try Again</h4>
                    `;
                console.log(err.message);
            });
    } else {
        document.querySelector('.container').style.display = 'none';
    }
}

export { handleSubmit }
