console.log("Login done");
document.getElementById("login-btn").addEventListener("click", function(){
   //1- get the mobile number input
   const numberInput = document.getElementById("input-number");
   const contactNumber = numberInput.value;
   console.log(contactNumber);

   //-2get pin
   const inputPin = document.getElementById("input-pin")
   const pin = inputPin.value;
   console.log(pin)

   //3 match pin and mobile number
   if(contactNumber == "123456789" && pin=="5555"){
    alert("Login successfull");
    window.location.assign("/home.html");
   }else{
    alert("Login failed");
    return;
   }
});