

  //////////////////PROBLEM 1////////////////////


  //Create a function called isTyler that accepts name as it's only parameter.
  //If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

    //Code Here
    var name = 'Tyler';
  function isTyler(tName) {
    if (tName === "Tyler") {
      return true;
    }
    else if (tName != "Tyler") {
      return false;
    }
    return isTyler(tname);
  };

  alert(isTyler(name));


  //////////////////PROBLEM 2////////////////////


  //Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


    //Code Here
  function getName(){
    var userAnswer = prompt('What is your name?', 'Place name here');
    return userAnswer;
  }


  //////////////////PROBLEM 3////////////////////



  //Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
  //then alerts "Welcome, " plus whatever the users name is.

    //Code Here
  function welcome(){
    var alertUser = alert("Welcome, " + getName());
    return alertUser;
  }

  welcome();

  //////////////////PROBLEM 4////////////////////




  //What is the difference between arguments and parameters?

    //Answer Here
  var answer1 = "Parameters are used in the function/method definition."
  var answer2 = "Arguments are used in the function/method call." 

  //////////////////PROBLEM 5////////////////////



  //What are all the falsy values in JavaScript and how do you check if something is falsy?


    //Answer Here

var x = 0;
Boolean(x); //0

var y = -0;
Boolean(y); //-0

var z = ""; //Empty String
Boolean("");

var ab;
Boolean(ab); //undefined


var cd = null;
Boolean(cd); //Null

var ef = false;
Boolean(ef); //false

var gh = 10 / "H";
Boolean(gh); //NaN

function faulty(){
  return gh;
}



  
  




  //////////////////PROBLEM 6////////////////////



  //Create a function called myName that returns your name

    //Code Here
  function myName() {
    return getName();
  }




  //Now save the function definition of myName into a new variable called newMyName

    //Code Here
    var newMyName = myName;
  

  //Now alert the result of invoking newMyName

  alert(newMyName());

  //////////////////PROBLEM 7////////////////////



  //Create a function called outerFn which returns an anonymous function which returns your name.

    //Code Here
    
  function outerFn() {
    return function(anonymous){
      return "Landon Johnson";
    }
  }





  // function outerFn() {
  //      var anonymous = function() {
  //       return (function() { 
  //           return "Landon Johnson"
  //       })();
  //   }
  //     return anonymous;
  //   }
    
    

  //Now save the result of invoking outerFn into a variable called innerFn.

    //Code Here

    var innerFn = outerFn();


    // function innerFn() {
    //   return outerFn() && "This is a string";
    // }
  //Now invoke innerFn.

  innerFn(anonymous);



    