const quote_text = document.querySelector('.quote-text');
const quote_author = document.querySelector('.quote-author');
const twitter_share = document.querySelector('.twitter-share');
const new_quote = document.querySelector('.new-quote');


new_quote.addEventListener( 'click',()=>{
    if (quote_author.textContent === "") {
        quote_author.textContent = "Unknown";
    } else {
        quote_author.textContent = quote_author.textContent;
}});
twitter_share.addEventListener( 'click',()=>{
    window.open(`http://twitter.com/intent/tweet?text=${quote_text.textContent} - ${quote_author.textContent}`, '_blank');
});
new_quote.addEventListener( 'click',()=>{
    yass();
})
function yass(){
    const data=quotes[Math.floor(Math.random()* quotes.length)];
    quote_text.textContent = data.text;
    quote_author.textContent = data.author || "Unknown";
}
let quotes=[];
async function getQuotes(){
    const apiURL = "https://type.fit/api/quotes"
    try {
        const response = await fetch(apiURL)
        quotes = await response.json()
        yass();
        
    } catch (error) {
        
    }
}

getQuotes();