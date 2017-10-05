// Capture Button Click
$("#add-user").on("click", function(event) {
  // prevent form from trying to submit/refresh the page
  event.preventDefault();

  // Capture User Inputs and store them into variables
  var name = $("#name-input").val().trim();
  var email = $("#email-input").val().trim();
  var age = $("#age-input").val().trim();
  var comment = $("#comment-input").val().trim();

  // Console log each of the user inputs to confirm we are receiving them
  console.log(name);
  console.log(email);
  console.log(age);
  console.log(comment);

  // Output all of the new information into the relevant HTML sections
  $("#name-display").html(name);
  $("#email-display").html(email);
  $("#age-display").html(age);
  $("#comment-display").html(comment);

});

localStorage.setItem("name", name);
  localStorage.setItem("email",email);
  localStorage.setItem("age", age);
  localStorage.setItem("comment", comment);