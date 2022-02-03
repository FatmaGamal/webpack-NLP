import axios from "axios"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    console.log("::: Form Submitted :::")
    if (isInputValid(formText)) {
        let colorEmotionDetected = Client.checkForEmotion(formText);

        if (colorEmotionDetected) {
            document.querySelector('body').className = formText;
        } else {
            document.querySelector('body').className = '';
        }

        axios.post('/api/analyze', { text: formText })
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
        document.querySelector('.container').style.display = 'block';
        document.getElementById('results').innerHTML = `
                <h2>We only accept english letters</h2>
                <h4>Please Try Again</h4>
            `;
    }
}

function isInputValid(text) {
    if (!text.trim().length) {
        return false;
    }

    // used https://bobbyhadz.com/blog/javascript-check-if-string-contains-only-letters-and-spaces for regex
    let match = /^[A-Za-z\s]*$/.test(text);
    return match;
}

export { handleSubmit, isInputValid }
