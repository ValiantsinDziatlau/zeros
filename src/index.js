module.exports = function getZerosCount(number) {
    let count=0;
    let tempNumber=5;
    while(tempNumber<=number){
        let CurrentNumber=tempNumber;
        while(CurrentNumber%5===0){
            CurrentNumber/=5;
            count++;
        }
        tempNumber+=5;
    }
    return count;
}
