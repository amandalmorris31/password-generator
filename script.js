//1. create your arrays
//lowers array
var lowerArray=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
console.log(lowerArray)  //should be 26

//uppers array
var upperArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
console.log(upperArray)  //should be 26

//numeric array
var numericArray=[0,1,2,3,4,5,6,7,8,9];
console.log(numericArray) //should be 10

//special symbol chars array
//https://www.w3schools.com/jsref/jsref_fromcharcode.asp
var specialArray=['!','@','?', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', ':', ';', '<', '=', '>', '[', String.fromCharCode(92), ']', '/', '^', '_', '`', '{', '|', '}', '~'];
console.log(specialArray)  // AM note: should be 32 special chars.  Had to put single quote inside double quotes and 
// had to turn the backslash into the ascii code (92), otherwise it broke.
	
// Assignment Code
//generateBtn is a variable that is set to the location of the ID called generate
var generateBtn = document.querySelector("#generate");

//writePassword is triggered by the generateBtn event - see last line of code
function writePassword() 
{
	//master array to generate pw
	var masterArray=[];
	console.log(masterArray)  //need to empty out masterArray before starting the prompt questions

	// Write password to the #password input

	//2. once user clicks btn ask a series of questions 
	//length num (from prompt the value will default to string.  Will have to convert it into a number later)
	var userLength = prompt("What is the length of password you'd like?  Ensure it is between 8-128 characters."); 
	console.log(userLength)

	//if less than 8, more than 128, OR empty (user just hit 'enter'), ask user again for prompt.  The parseInt() function parses a string and returns an integer.
	//https://stackoverflow.com/questions/154059/how-can-i-check-for-an-empty-undefined-null-string-in-javascript (need to test for empty userlength)
	if(parseInt(userLength) < 8 || parseInt(userLength) > 128 || userLength==="") {
		var userLength = prompt("The number you entered is either below 8 or more than 128.  Try again.");
  		}

//lower boolean
var userLower = confirm("Would you like lower cases in your password?");

//upper boolean
var userUpper = confirm("Would you like upper cases in your password?");

//nums boolean
var userNumeric = confirm("Would you like numbers in your password?");

//special boolean
var userSpecial = confirm("Would you like special characters in your password?");


//if conditional if any are true we are going to push to masterArray
if(userLower==true){
	// masterArray.push(lowerArray);
	for(var i=0;i<lowerArray.length;i++){
		masterArray.push(lowerArray[i])
	}
}

if(userUpper==true){
	//masterArray.push(upperArray);
	for(var i=0;i<upperArray.length;i++){
		masterArray.push(upperArray[i])
	}
}

if(userNumeric==true){
	//masterArray.push(numericArray);
	for(var i=0;i<numericArray.length;i++){
		masterArray.push(numericArray[i])
	}
}

if(userSpecial==true){
	//masterArray.push(numericArray);
	for(var i=0;i<specialArray.length;i++){
		masterArray.push(specialArray[i])
	}
}


//if all 4 character types are all false, ask user again for prompt.
//if masterarray does not have length
if(!masterArray.length )  {
	alert("You must select at least one character type.");
	writePassword();
	  }
	  //we need to pass the unique data (masterArray and userLength) to use it within the 
	  //generatePassword function
	  generatePassword(masterArray,userLength);

}

//function scoping, you can only use variables inside the function, that is why we are passing the 2 parameters (array and length)
function generatePassword(masterArray,userLength){
	
var finalPassword = "";

//3. generate the pw based on length (parseInt) randomly select data from masterArray
//run a for loop and randomly select from the masterArray based on the length

for (var i=0; i<userLength; i++) {
finalPassword+= masterArray[Math.floor(Math.random() * masterArray.length)];
}

//4. append to html the generated pw
//final pw complete
console.log(finalPassword)

//now we need to dynamically append to the text area
//location of text area
//https://www.w3schools.com/jsref/prop_textarea_value.asp
var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;

//verify masterArray has the correct data after if conditionals
console.log(masterArray);
	//return;
}

// Add event listener to generate button
//have the generateBtn variable where onclick EventListener fires the writePassword function
generateBtn.addEventListener("click", writePassword);

