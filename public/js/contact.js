console.log("HEre")

function submitForm(event) {
  event.preventDefault();
  console.log("HEre2")
  var contact = document.getElementById('contact-form');
  //here we will send data in json format behind the scene to the server
  var formData = {
    forename: contact.elements.namedItem('name').value,
    surname: contact.elements.namedItem('surname').value,
    email: contact.elements.namedItem('email').value,
    subject: contact.elements.namedItem('need').value,
    message: contact.elements.namedItem('message').value
  }
  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
      console.log(this);
      console.log(this.status);
      if (this.readyState == 4 && this.status == 201) {
        var data = JSON.parse(this.responseText);
        console.log("sucess");
        //reset form
        document.getElementById('contact-form').reset();
        //display a sucess message in green
        var success = document.getElementById('success');
        success.classList.remove("hidden");

      }
    };

  ajax.open('post', './handlecontact');
  ajax.setRequestHeader("Content-Type", "application/json" );
  ajax.send(JSON.stringify(formData));
}