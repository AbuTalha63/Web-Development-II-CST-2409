// Developer: Boulet, Jean
let tds = [...document.querySelectorAll("td")];
tds.forEach( e => {  
    if (e.innerText == "")
        e.classList.add('unused');
} );