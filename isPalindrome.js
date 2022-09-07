/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //Checks if the length is even because Even means it cant be a palindrome
    if (x.length%2 ===0){ 
        return false
    } else{
        //iterates through the string from both ends, comparing as it goes
    for(let i = 0; i < x.length/2 ; i++){
        if(x[i] != x[x.length-1-i]){
            return false
        }
        //checks if we're in the middle. If so all characters have been alike til here and it is a palindrome.
        else if(i == x.length-1-i) return true
    };
    }
};
