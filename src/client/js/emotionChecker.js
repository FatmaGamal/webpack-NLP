function checkForValue(inputText) {
    if (!inputText.trim()) {
        return false;
    }

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

export { checkForValue }
