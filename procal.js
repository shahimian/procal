exports.procal = function(price, startDate, endDate, rate){
    let period = Math.ceil((endDate - startDate) / (30 * 24 * 3600 * 1000));
    return exports.calculate(price, period, rate);
}

exports.calculate = function(price, period, rate){
    if(period == 1)
        return (1 + rate) * price;
    else {
        return ((1 + rate) * exports.calculate(price, period - 1, rate));
    }
}

exports.report = function(price, startDate, endDate, rate){
    out = 'Price\t\tStart Date\t\tEnd Date\tRate\tInterest Value';
    out += `${price.toLocaleString(undefined,{ minimumFractionDigits: 2 })}\t${startDate.toLocaleString('en-US', {timeZone: 'UTC'})}\t${endDate.toLocaleString('en-US', {timeZone: 'UTC'})}\t${rate*100}%\t${exports.procal(price, startDate, endDate, rate).toLocaleString(undefined,{ minimumFractionDigits: 2 })}`;
    return out;
}