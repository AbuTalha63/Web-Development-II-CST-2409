



function rateOfReturn(collateral, premium, duration) {
    const interest = {rateOfReturn: 0, annualRateOfReturn: 0};
    interest.rateOfReturn = premium / collateral;
    interest.annualRateOfReturn = (365/duration) * interest.rateOfReturn;
    
    return interest;

}

let y = rateOfReturn(10_600, 96, 7);

console.log({y});