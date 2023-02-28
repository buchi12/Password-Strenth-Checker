let timeout;



let password = document.getElementById('PassEntry')
let strengthBadge = document.getElementById('StrengthDisp');
let order = document.getElementById("order");
let bbb = document.getElementById("bbb");
let bbb1 = document.getElementById("bbb1");
let bt = document.getElementById("bt");
let bt12 = document.getElementById("bt12")



let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')

function StrengthChecker(PasswordParameter) {
   

    if (strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Your pass word Strong lets go'
        strengthBadge.classList.add("bb");

    } else if (mediumPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
        strengthBadge.classList.add("bb");
    } else {
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Your Password is too Weak';
        strengthBadge.classList.add("bb");

    }
}

// Adding an input event listener when a user types to the  password input 

password.addEventListener("input", () => {

    //The badge is hidden by default, so we show it

    strengthBadge.style.display = 'block'
    clearTimeout(timeout);

    //We then call the StrengChecker function as a callback then pass the typed password to it

    timeout = setTimeout(() => StrengthChecker(password.value), 500);

    //Incase a user clears the text, the badge is hidden again

    if (password.value.length !== 0) {
        strengthBadge.style.display != 'block'
    } else {
        strengthBadge.style.display = 'none'
    }
});

bt.onclick = function() {
    bbb.textContent = "Example-Xdt@12#";
}
bt12.onclick = function() {
    bbb1.textContent = "Good passwords are critical to information security.There are several basic rules you should follow when trying to create a strong password. These include: 1. Always use a unique password for each of your accounts When signing up for a new service, you should never use a password you have used for a previous account.";
}
