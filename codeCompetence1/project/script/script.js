document.getElementById("submit-button").addEventListener("click", function () {
  // Dapatkan data dari input
  var fullName = document.getElementById("full-name").value;
  var emailAddress = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phone-number").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Buat pesan alert dengan data yang diinputkan
  var alertMessage =
    "Full Name: " +
    fullName +
    "\n" +
    "Email Address: " +
    emailAddress +
    "\n" +
    "Phone Number: " +
    phoneNumber +
    "\n" +
    "Subject: " +
    subject +
    "\n" +
    "Message: " +
    message;

  // Tampilkan pesan alert
  alert(alertMessage);
});
