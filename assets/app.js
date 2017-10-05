// Initialize Firebase
var config = {
  apiKey: "AIzaSyBuSWnNsmjrlntp9Ied-ks4x75sZa7CV14",
  authDomain: "mnmt-timesheet.firebaseapp.com",
  databaseURL: "https://mnmt-timesheet.firebaseio.com",
  projectId: "mnmt-timesheet",
  storageBucket: "",
  messagingSenderId: "705744610167"
};
firebase.initializeApp(config);

var database = firebase.database();

// Capture Button Click
$("#add-user").on("click", function(event) {
  // prevent page from refreshing when form tries to submit itself
  event.preventDefault();

  // Capture user inputs and store them into variables
  var name = $("#employeeName").val().trim();
  var role = $("#role").val().trim();
  var year = $("#startDate").val().trim();
  var rate = $("#monthlyRate").val().trim();

  // Console log each of the user inputs to confirm we are receiving them
  console.log(name);
  console.log(role);
  console.log(year);
  console.log(rate);

  database.ref().push({
    "name": name,
    "role": role,
    "year": year,
    "rate": rate
  });
});

// By default display the content from localStorage
$("#name-display").text(localStorage.getItem("name"));
$("#email-display").text(localStorage.getItem("email"));
$("#age-display").text(localStorage.getItem("age"));
$("#comment-display").text(localStorage.getItem("comment"));

