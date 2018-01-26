// alerts are annoying, let's use console.log

  console.log('Welcome');
  /*
  This will now log to your console
  */

  //Create a function that updates a DOM element
  function change() {
    //function body. where it all goes down.
    document.getElementById('foo').innerHTML='Welcome';
  }

  var name='Sumit'; //store a string in a Javascript
  var numberofWidgets=10; //numberofWidgets
  var iscodingcool=true; //boolean
  console.log(name); // log the Value of a var to the console

  var characters=[50, true, 'sumit','Sarah','Michael Bluth',10, 2]
  console.log(characters[5]);

  var name='Bitcoin';
  var numberofpeople=20;
  var waytogo='philly to newyork';
  console.log(numberofpeople);

  var characters=['25',true, 'fromphilly', 'newyork', 'newyork']
  console.log(characters[1]);

  // Multi-dimesional array
  var meat= ['ham', 'bologna', 'turkey'];
  var fruit= ['oranges','apples','grapes'];
  var food= [meat, fruit];
  console.log(food[1][0]); //log 'orangesn' to the console

  // var food= [['ham'],['oranges']]; // could also be written like this

  // object:

  var user={
    firstName: 'Sumit',
    age: 40,
    'lastName': 'Bluth',
    'hashair': true,
    'has-feet':true
  };
    // access properties of our user obj using notation
  console.log(user.firstname);//log'sumit'
// we can also access properties on obj using bracket notation

  console.log(user['firstname']); // log
  console.log(user['has-feet']); //NEED to use square bracket for special characters


  var user={
    firstname: 'Sumit',
    lastname: 'Kumar',
    fingercount:'10',
    intrested:'Playcricket',
  };

  console.log(user);

  var num1=1000;
  var num2=5000;
  console.log('the result is:'+ (num1-num2));
  console.log('my num1 is' + num1 + 'That is my number!!');

  var string1= 'Sumit'
  var string2= 'Kumar'
  alert(string1 + ' ' + string2);
