const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}
const displayQuote = quotes => {
    const elem = document.getElementById('data')
    elem.innerText = quotes.quote
}