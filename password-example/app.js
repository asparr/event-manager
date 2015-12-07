/*
Your code goes here!
 */

/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */
var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*
You'll probably find this function useful...
 */  
submit.onclick = function () {
  var firstPassword = firstPasswordInput.value;
  var secondPassword = secondPasswordInput.value;

  if (firstPassword !== secondPassword){
    secondPasswordInput.setCustomValidity("The second password does not match the first");
  }
  var requirements = [/[\!\@\#\$\%\^\&\*]/g, /[0-9]/g, /[a-z]/g, /[A-Z]/g, ];
  var requirement_descriptions = ['symbols', 'numbers', 'lowercase letters', 'uppercase letters'];
  var unallowed_characters = /[^A-z0-9\!\@\#\$\%\^\&\*]/g
  for(var i=0; i < requirements.length; i++){
    var pass = firstPasswordInput.value.match(requirements[i]);
    if(!pass){
      firstPasswordInput.setCustomValidity("Please be sure your password includes at least 1 of the required " + requirement_descriptions[i] +".");
    } else {
      firstPasswordInput.setCustomValidity("");
    }
  }
};