const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newquote = document.getElementById("newquotebutton");

const api_url = "https://api.quotable.io/random";
async function getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerText = data.content;
    author.innerText = data.author;
}

getquote(api_url);

newquote.addEventListener("click", function(){
    getquote(api_url);
});