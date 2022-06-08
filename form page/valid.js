function data(){

let user=document.getElementById("uname").value;
localStorage.setItem("userName", user);

let mnumber=document.getElementById("number").value;
localStorage.setItem("mobilenumber", mnumber);

let emailid=document.getElementById("email").value;
localStorage.setItem("mailid", emailid);


let password=document.getElementById("passwrd").value;
localStorage.setItem("passwords", password);

}

function validateForm() {
    let use = document.forms["myForm"]["user"].value;
    let numm = document.forms["myForm"]["num"].value;
    let mails = document.forms["myForm"]["mail"].value;
    let passwrd = document.forms["myForm"]["pass"].value;

     // validation for Name

    if (use == "") {
        document.getElementById("unameerror").innerHTML = "Name must be filled out";
        return false;

    } else if (Number(use)) {
        document.getElementById("unameerror").innerHTML = "user name can't contain number";
        return false;

    }
     else if (use.length < 3) {
        document.getElementById("unameerror").innerHTML = "name length must be greater than 3";
        return false;
    }




    // validation for Number

    if (numm == "") {
        document.getElementById("numerror").innerHTML = "Please Enter Your Nobile Number";
        return false;

    } else if (numm.length < 10) {
            document.getElementById("numerror").innerHTML = "please enter 10 digits number";
            return false;
        };





    //  validation for E-mail id
    var atposition= mails.indexOf("@");  

        if (mails == "") {

            document.getElementById("eerror").innerHTML = "e-mail can't be blank";
            return false;
        }

        else if (atposition==0) {

            document.getElementById("eerror").innerHTML = "please enter a valid emailid";
            return false;
        };
        


        // validation for password


        if (passwrd == "") {

            document.getElementById("passerror").innerHTML = "password can't be blank";
            return false;
        }

        else if(passwrd.legth<5) {

            document.getElementById("passerror").innerHTML = "password must be contain be 5 digits";
            return false;
        }
};
