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
            console.log('front finasl res', res);
        } else {
        console.log('form err>>>', err)
        }
    })
    .then(function(res) {
        //document.getElementById('results').innerHTML = res.message
    })
}

export { handleSubmit }
