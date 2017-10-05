// Capture Button Click
  $("#add-user").on("click", function(event) {
    // prevent page from refreshing when form tries to submit itself
    event.preventDefault();

    // Capture user inputs and store them into variables
    var name = $("#name-input").val().trim();
    var email = $("#email-input").val().trim();
    var age = $("#age-input").val().trim();
    var comment = $("#comment-input").val().trim();

    // Console log each of the user inputs to confirm we are receiving them
    console.log(name);
    console.log(email);
    console.log(age);
    console.log(comment);

    // Replaces the content in the "recent-member" div with the new info
    $("#name-display").text(name);
    $("#email-display").text(email);
    $("#age-display").text(age);
    $("#comment-display").text(comment);

    // Clear localStorage
    localStorage.clear();

    // Store all content into localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("comment", comment);
  });

  // By default display the content from localStorage
  $("#name-display").text(localStorage.getItem("name"));
  $("#email-display").text(localStorage.getItem("email"));
  $("#age-display").text(localStorage.getItem("age"));
  $("#comment-display").text(localStorage.getItem("comment"));