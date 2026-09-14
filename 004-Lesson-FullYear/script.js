function highlightSaturday() {

    const tds = [...document.querySelectorAll("td")]

    //functional method
    tds.forEach( (e, i) => {
        if (i % 7 == 6 && e.innerText != "")
            e.classList.add("high-light")
    });
}

function highlightSunday() {
    const tds = [...document.querySelectorAll("td")]

    tds.forEach( (e, i) => {
        if (i % 7 == 0 && e.innerText != "")
            e.classList.add("high-light")
    });
}

function highlight($input) {
    const tds = [...document.querySelectorAll("td")]

    tds.forEach( (e, i) => {
        if (i % 7 == $input && e.innerText != "")
            e.classList.add("high-light")

        //check the result of the modulus
        if (e.innerText != "")
            e.innerHTML += "<sub>" + (i % 7) + "<sub>";
    });
}

