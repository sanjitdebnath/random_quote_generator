let quote_content = document.querySelector(".quote_content"),
author_name = document.querySelector(".author_name"),
sound_btn = document.querySelector(".sound"),
copy_btn = document.querySelector(".copy"),
share_btn = document.querySelector(".share")
generate = document.querySelector(".generate")
;

// console.log(quote_content.innerHTML);

// generate.addEventListener("click",()=>{
//     console.log("helo");
// });


function random_quote()
{
    generate.innerHTML = "loading quote...";
    generate.classList.add("loading");
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result=>
        {
            console.log(result);
            quote_content.innerHTML = result.content;
            author_name.innerHTML = result.author;
            generate.innerHTML = "new quote";
            generate.classList.remove("loading");
        })
}






generate.addEventListener("click",random_quote);
sound_btn.addEventListener("click",()=>
{
    let listen = new SpeechSynthesisUtterance(`${quote_content.innerHTML} by,${author_name.innerHTML}`);
    // console.log(quote_content.innertext);
    speechSynthesis.speak(listen);
});
copy_btn.addEventListener("click",()=>
{
    let copied  = navigator.clipboard.writeText(quote_content.innerHTML);
    if(copied == true)
    {
        console.log("copied");
    }

});
