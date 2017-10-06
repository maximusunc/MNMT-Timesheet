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
  var date = $("#startDate").val().trim();
  var rate = $("#monthlyRate").val().trim();

  // Console log each of the user inputs to confirm we are receiving them
  console.log(name);
  console.log(role);
  console.log(date);
  console.log(rate);

  database.ref().push({
    "name": name,
    "role": role,
    "date": date,
    "rate": rate,
    "dateAdded": firebase.database.ServerValue.TIMESTAMP
  });
});

// By default display the content from localStorage
database.ref().on("child_added", function(childSnapshot) {
  var randomFormat = "DD/MM/YY";
  var convertedDate = moment(childSnapshot.val().date, randomFormat);
  console.log(convertedDate)
  var monthsWorked = moment().diff(moment(convertedDate), "months");
  console.log(monthsWorked);
  var monthsBilled = monthsWorked * childSnapshot.val().rate;
  $("tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().date + "</td><td>" + monthsWorked + "</td><td>" + childSnapshot.val().rate + "</td><td>" + monthsBilled + "</td></tr>");
}, function(errorObject) {
  console.log("Error: " + errorObject.code);
});



// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
//   $("#employeeName").html(snapshot.val().name);
//   $("#role").html(snapshot.val().role);
//   $("#startDate").html(snapshot.val().date);
//   $("#monthlyRate").html(snapshot.val().rate);
// });
