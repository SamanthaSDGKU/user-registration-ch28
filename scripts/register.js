//create a User constructor
class User {
    constructor(fname, lname, email, password,gender) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
        this.gender=gender;
    }
}

function isValid(user){
    //return false when the user is not valid
    //return true when the user is valid
    let valid=true;
    $("input").removeClass("input-error");
    if(user.email.length==0){
        valid=false;
        console.error("Add an email");
        $("#txtEmail").addClass("input-error");
    }
    if(user.password==0){
        valid=false;
        console.error("Add a password");
        $("#txtPassword").addClass("input-error");
    }
    return valid;
}
function validatePass(){
    console.log("validating pass");
    //get the value from the input
    let txtPass=$("#txtPassword");
    let password=txtPass.val();
    if(password.length<6){//is the password less than 6 characters?
        txtPass.css("background","#ff9898");//jquery function to change the css
    }else{
        txtPass.css("background","#64ce66");// jquery function to change the css
    }   
}


function register(){
    let inputfName = $("#txtFirstName").val();//getting the value
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    let inputGender = $("#txtGender").val();
    
    let newUser = new User(inputfName,inputlName,inputEmail,inputPassword,inputGender);
    if(isValid(newUser)){
       saveUser(newUser);//this fn is on the storeManager
       $('input').val("");// clear the inputs
    } 
}

function init(){
    console.log("Register");
    //hook events
    $("#txtPassword").keyup(validatePass);// it is executed everytime that the key is up

}

window.onload=init;
