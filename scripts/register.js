//create a User constructor
class User {
    constructor(fname, lname, email, password) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
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
function register(){
    let inputfName = $("#txtFirstName").val();//getting the value
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();
    
    let newUser = new User(inputfName,inputlName,inputEmail,inputPassword);
    if(isValid(newUser)){
       saveUser(newUser);//this fn is on the storeManager
    }
    
}

function init(){
    console.log("Init function");

    //create two users and display them on the console
    let user1 = new User("Ben","Vance","ben@gmail.com","Test1234");
    let user2 = new User("Jason","Cerilli","jason@gmail.com","Test123456");
    console.log(user1,user2);
}

window.onload=init;
