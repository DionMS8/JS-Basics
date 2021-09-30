//---------------[JS VARIABLES]------------------------------------------------------------------------------------

// VAR, LET AND CONST ARE USED TO DECLARE VARIABLES

//-----[CONSTANTS]----------------------------------------------------------------------------

// IT IS BLOCK SCOPED
// THE "CONST" KEYWORD IS USED TO DECLARE CONSTANTS

const pi = 3.14; 
pi = 8;
console.log(pi);

// AN ERROR WILL BE THROWN IF YOU TRY TO REASSIGN A NEW VALUE TO A CONST



//-----[LET]---------------------------------------------------------------------------------------------------------

// IT IS BLOCK SCOPED
// IT IS NOT ACCESSIBLE BEFORE IT IS DEFINED
// A LET VARIABLE CANNOT BE RE-DECLARED

// LET SHOULD ALWAYS BE USED IF THE VARIABLE NEEDS TO BE REASSIGNED TO A 
// DIFFERENT VALUE LATER ON
// HOWEVER, IT CANNOT BE REASSIGNED WITHIN THE SAME SCOPE


let person = steve;
person = joe;
console.log(`${person} is the host of Blues Clues`);



//-----[VAR]-----------------------------------------------------------------------------------------------------------

// IT IS FUNCTION SCOPED - THIS MEANS THAT IF A VARIABLE IS DEFINED INSIDE
// A FUNCTION USING VAR, IT CAN ONLY BE ACCESSED WITHIN THAT FUNCTION

// IF A VARIABLE IS DECLARED WITH VAR, IT CAN BE REASSIGNED 



//-----[TEMPORAL DEAD ZONE]----------------------------------------------------------------------------------------------

// THIS REFERS TO WHERE BOTH LET AND CONST VARIABLES ARE NOT ACCESSIBLE 
// BEFORE THEY ARE DEFINED






