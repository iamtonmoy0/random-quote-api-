const loadQuote = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => getQuote(data))
}
const getQuote = quotes => {
    const elem = document.getElementById('quote')
    elem.innerText = quotes.quote
}