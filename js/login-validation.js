// function to handle click on submit button
const handleClick = () => {
  // getting the reference of myPhone input

  var input = document.getElementById("myPhone").value;

  // format for the phone number

  var format = /^\(?([0-9]{2})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;

  // conditional statements

  if (input === "") {
    alert("Please Enter Phone Number");
  } else if (input.match(format)) {
    alert("Phone Number: " + input);
  } else {
    alert("Type using correct format");
  }
};
