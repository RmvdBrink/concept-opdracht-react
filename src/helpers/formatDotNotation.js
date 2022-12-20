function formatDotNotation(amount) {
    // Dit is een RegEx expressie. Je hoeft niet te weten hoe het werkt,
    // maar met een Google Search op "create dot notation thousands in js" had je het antwoord bijvoorbeeld hier kunnen vinden:
    // https://www.codegrepper.com/code-examples/javascript/set+dot+with+thousands+js
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default formatDotNotation;