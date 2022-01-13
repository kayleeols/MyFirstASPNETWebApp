$("#btnSend").click(function () {
    alert("From: " + $("#txtFrom").val() +
        ", Subject: " + $("#txtSubject").val() +
        ", Message: " + $("#txtMessage").val());

    $("#picGanderson").fadeToggle(); //Will make image fade in and out when the submit button is hit
})