// program to reverse a string

function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    document.write("<b>Entered string: </b>" + str + "<br/><b>Reversed string: </b>"+ newString);
    
    if(str == newString)    document.write("<br/><h4>Entered String is palindrom.</h4>");

    else    document.write("<br/><h4>Entered Sting is not palindrom.</h4>");
}

// take input from the user
const string = prompt('Enter a string: ');
reverseString(string);