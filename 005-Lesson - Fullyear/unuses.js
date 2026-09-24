// Developer: Usman, Muhammad

function markUnused() {
    let td = [...document.querySelectorAll("td")];
    td.forEach(e => {
        if (e.innerText == "")
            e.classList.add('unused');
    });
}

console.log({td})
