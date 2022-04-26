let input = [60, 40, 55, 75, 64];

function separate(input) {
    let team1 = [];
    let team2 = [];
    team1 = input.filter((value, index) => (index%2==0));
    team2 = input.filter((value, index) => (index%2==1));
    let team1Sum = team1.reduce((accumulator, value) => (accumulator+value),0);
    let team2Sum = team2.reduce((accumulator, value) => (accumulator+value),0);
    
    let resultArray = [];
    resultArray.push(team1Sum);
    resultArray.push(team2Sum);
    return resultArray;
}

console.log("Output:");
console.log(separate(input));