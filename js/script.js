document.getElementById("bookingForm")?.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();

if(name=="" || email=="" || phone==""){
alert("Please fill in all required fields.");
return;
}

if(phone.length<10){
alert("Please enter a valid 10-digit phone number.");
return;
}

alert("🎉 Booking Submitted Successfully!\n\nThank you for choosing Explore India Travels.");

this.reset();

});