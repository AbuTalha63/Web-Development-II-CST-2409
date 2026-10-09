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

function getFirstDay() {
    const x = new Date();
    x.setDate(1);
    return x.getDay();
}

function getLastDay() {
    const x = new Date();
    x.setMonth(x.getMonth() +1);
    x.setDate(0);
    return x.getDate();
}