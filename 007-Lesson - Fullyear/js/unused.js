function markUnused() {

    // Developer: Boulet, Jean
    let tds = [...document.querySelectorAll("caption")];
    tds.forEach(e => {
        if (e.innerText == "")
            e.classList.add('unused');
        else 
            e.innerText = "A";
    });

    console.log({tds, date: new Date()});
}