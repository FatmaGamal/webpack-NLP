import axios from "axios"

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    axios.post('http://localhost:8081/test', {text: formText})
    .then((res, err) => {
        if (res) {
            document.querySelector('.container').style.display = 'block';
            document.getElementById('results').innerHTML = res.data.score_tag;
        } else {
            console.log('There was an error gettign the analysis, please try again', err)
        }
    });
}

export { handleSubmit }
