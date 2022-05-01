// Prints help message to the console
// Returns a string
function allLongestStrings(inputArray) {
    let maxLength = 0
    let longestNameArray = [];

    //loop through inputArray, keeping track of max length of its members
    //if encounter string longer than maxLength, then clear longestNameArray, add that string to it
    //if encounter string with length equal to maxLength, then just add that string to longestNameArray
    for (let i=0; i<inputArray.length; i++) {
        // console.log(inputArray[i]);
        if (inputArray[i].length>maxLength) {
            maxLength = inputArray[i].length;
            longestNameArray = [];
            longestNameArray.push(inputArray[i]);    
            // console.log(maxLength + " enter branch 1" + longestNameArray);
        } else if (inputArray[i].length == maxLength) {
            longestNameArray.push(inputArray[i]);
            // console.log("branch 2" + longestNameArray);
        }
    }
    return longestNameArray;
}

var input = ['Binh', 'Hung', 'Phuoc', 'Cao', 'Khanh', 'Thuan', 'Tam', 'Dung', 'Manh', 'Thanh'];
if (input=='') {
    console.log("The input array is empty!");
} else {
    
    console.log("Output is: ");
    console.log(allLongestStrings(input));
}

