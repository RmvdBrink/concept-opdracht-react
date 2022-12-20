function formatEllipsis(sentence) {
    if (sentence.length < 100) {
        return sentence;
    } else {
        return sentence.substring(0, 100) + "...";
    }
}

export default formatEllipsis;
