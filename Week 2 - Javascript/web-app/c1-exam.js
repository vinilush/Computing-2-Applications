/**
 * This worksheet adapts the final question of Exam 1 of Computing 1 2020/21.
 * Here you should complete each of the functions as they are specified.
 * Of course, this time, the code is in Javascript.
 *
 * Original Python Code and Exam, Becky Stewart @TheLeadingZero.
 */
const Exam = Object.create(null);

// Lists

// Write a function that returns a list containig every third item in
// the original list starting with the first item.
//    for example:
//      an input list of [1,2,3,4,5,6,7,8]
//      returns [1,4,7]

Exam.every_third = function (listinput) {
    /*takes input list, returns a list with the starting item and every third item*/

    //creates new list to return
    let newlist = [];

    //defines counter variable
    let i = 0;

    //iterates through listinput
    for (; i < listinput.length; i++){
        //checks if it is the first item or a third item
        if (i % 3 > 0){
            //nothing happens haha
        } else {
            //appends value into the new list
            newlist.push(listinput[i]);
        }
    }
    return newlist; //returns the new list
/*
Exam.every_third = function (array) {
    return array.filter((ignore, k) => k % 3 === 0);
*/
};


// Strings

// Write a function that concatenates two sentences passed as inputs.
// The returned string is the first word from the first sentence,
// then the first word from the second sentence, alternating back forth.
// If the sentences are not the same number of words, a "ValueError" is thrown.
//    for example:
//       the input sentences "the cow jumped over the moon" and
//                            "jack and jill went up the"
//       returns "the jack cow and jumped jill over went the up moon the"

Exam.merge_sentences = function (s1,s2) {
    /* Merges sentences together, word by word, if they are the same length */

    //turns strings into two arrays of words by splitting at the spaces
    let s1_words = s1.split(" ");
    let s2_words = s2.split(" ");

    //checks if sentencs have same number of words, if not, throws value error
    if (s1_words.length !== s2_words.length) {
        throw "ValueError";
    }
    //creates counter and new string
    let i=0;
    let s3 = "";
    //iterates through both sentences
    for (;i < s1_words.length; i++){
        s3 = s3 + s1_words[i] + " " + s2_words[i] + " "; //THIS IS THE ISSUE MAYBE?
    };
    //remove the last space
    s3 = s3.trim();
    return s3 ;

    //SOLUTION USING MAP, ABIT CONFUSING??
    // return s1_words.flatMap((v, k) => [v, s2_words[k]]).join(" ");
};

// Write a function that returns the number of lowercase letters in
// input string.
//     for example:
//          the input "sPonGe bOb"
//          returns 6
Exam.lowercase_count = function (input_string) {
    /*takes string and returns number of lowercase letters */

    //output counter that is returned
    let lower_count = 0;

    //iterates through each character in string
    let i = 0;
    for (; i<input_string.length; i++){
        //checks if the character is lowercase
        if (input_string[i] === input_string[i].toLowerCase()){
            //if lowercase, then increments the counter
            lower_count = lower_count + 1;
        }
    }
    return lower_count;

    //other solution
    //const letters = input_string.split("");
    //return letters.filter((l) => l !== l.toUpperCase()).length;
};


// Objects

// Write a function that returns the longest a key in the input object
// whose keys are all strings.
Exam.longest_key = function (input_object) {
    /*returns longest key in object where keys are strings*/

    let object_keys = Object.keys(input_object);
    let longest_key = "";

    //iterates through keys
    for (let i=0; i<object_keys.length; i++){
        //checks if key is longer than the longest key recorded
        if (object_keys[i].length > longest_key.length){
            longest_key = object_keys[i];
        }
    }
    return longest_key;

    // return Object.keys(input_object).reduce((a, x) => (
    //     a.length >= x.length
    //     ? a // accumulator which becomes the longest key - if true
    //     : x // currentvalue which is changed to the next value - if false
    // ));
};

// Write a function that returns the largest value that is an even value in the
// input dictionary whose values are all whole numbers.
Exam.value_greatest_even = function (input_object) {

    //makes array of even numbers
    let evens = Object.values(input_object).filter( (k) => k % 2 === 0);

    //finds largest even values
    let max_even = Math.max(...evens);

    return max_even;
};


// Arguments

// Write a function with two input arguments "username" and "location".
// The function should return text "Hello, {name}, how is {location}?".
//
// The username argument should not be set to a default,
// but the location argument should default to "London".
Exam.greeting = function (username, location="London") {
    let sentence = "Hello, " + username + ", how is " + location + "?";
    return sentence;
    //return `Hello, ${name}, how is ${location}?`;
};


// Write a function three input arguments,
// the first one, x, is required and the second two are
// the following keywords with default values:
//     scalar with a default of 1
//     offset with a default of 0
// The function returns the calculation x * scalar + offset for the input x
// if the output value of the calculation is positive, otherwise it returns 0.
Exam.floor_line = function (x, scalar=1, offset=0) {
    let calc = x*scalar+offset;

    if (calc>0){
        return calc;
    }
    return 0;
    //return Math.max(0, scalar * x + offset);
};

export default Object.freeze(Exam);
