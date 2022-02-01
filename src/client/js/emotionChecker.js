function checkForEmotion(inputText) {
    let emotions = [
        "happy",
        "sad",
        "angry",
        "confused",
        "disgusted",
        "excited",
        "peaceful"
    ]

    if(emotions.includes(inputText)) {
        return inputText;
    } else {
        return false;
    }
}

export { checkForEmotion }
