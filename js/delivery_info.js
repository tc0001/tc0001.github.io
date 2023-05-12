const form = document.getElementById("delForm");

form.addEventListener("submit", function(event) {
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        var name = document.getElementById("nameBox").value;
        alert("Delivery info submitted successfully! Thank you for your order, " + name + "! Your delivery will be sent to your place.");
      }
      
      form.classList.add("was-validated");
    });