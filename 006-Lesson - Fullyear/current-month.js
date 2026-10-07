

// Developer: Usman, Muhammad
function getMonth($month) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May",
        "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const date = new Date();

    if ($month == 0 || $month) {
        date.setMonth($month);
    }
    const monthIndex = date.getMonth();

    return months[monthIndex];
}
function getFirstDay() {
    const x = new Date();
    x.setDate(1);
    return x.getDate();
}