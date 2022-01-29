import axios from "axios"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    if (formText.trim()) {

        let colorEmotionDetected = Client.checkForValue(formText);
        
        if(colorEmotionDetected) {
            document.querySelector('body').className = formText;
        } else {
            document.querySelector('body').className = '';
        }
        
        axios.post('http://localhost:8081/analyze', {text: formText})
            .then((res, err) => {
            if (res) {
                document.querySelector('.container').style.display = 'block';
                document.getElementById('results').innerHTML = res.data.score_tag;
            } else {
                console.log('There was an error gettign the analysis, please try again', err)
            }
        });
    } else {
        document.querySelector('.container').style.display = 'none';
    }
}

export { handleSubmit }
