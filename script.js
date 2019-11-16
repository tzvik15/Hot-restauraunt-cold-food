$("#submit").on("click", function(event) {
    event.preventDefault();
    var newRes = {
      name: $("#name").val().trim(),
      phone: $("#pnumber").val().trim(),
      email: $("#email").val().trim(),
      ID: $("#id").val().trim()
    };

    // Question: What does this code do??
    $.post("/api/tables", newRes)
      .then(function(data) {
        alert("Thank you for your desire to visit our Dragon restauraunt. Please wait an indefinate time in cyberspace and maybe we will serve you. yay.");
      });
  });