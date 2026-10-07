let x = [95, 88, 100, "75X"]

for (let i=0; i < x.length; i++){
    let curve = isNaN(x[i]) ? 0: x[i] * 1.03;
    console.log({i, x: x[i]}, curve)
}
console.log("-".repeat(100));

x.filter(e => !isNaN(e)).forEach( (e,i) => {
    console.log({i,e})
});

console.log("Developer: Usman, Muhammad " + new Date())

