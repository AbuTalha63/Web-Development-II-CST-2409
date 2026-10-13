// Developer: Usman, Muhammad
function getMonth($month) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May",
        "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const date = new Date();

    //truthy and false will be on the exam
    if ($month == 0 || $month) {
        date.setMonth($month);
    }
    const monthIndex = date.getMonth();

    return months[ monthIndex ];
}

function getFirstDay($currentDate) {
    const x = $currentDate ? $currentDate : new Date();
    x.setDate(1);
    return x.getDay();
}

function getLastDay($currentDate) {
    const x = $currentDate ? $currentDate : new Date(); // ternary operator, uses truthy & falsy
    x.setMonth(x.getMonth() +1);
    x.setDate(0);
    return x.getDate();
}

function pickMonth() {
    console.log({year: this.dataset.year, 
                month: this.dataset.month});
}

function createMonths() {
    const ol = document.querySelector("#selectMonth");
    const years = [2026,2027,2028]

    years.forEach(e => {
        for (let i=0; i < 12; i++){
            const li = document.createElement("li");
            li.innerText = e + " " + getMonth(i);
            li.dataset.month = i;
            li.dataset.year = e;
            li.onclick = pickMonth;
            ol.appendChild(li);
    }





    });
    
    

}