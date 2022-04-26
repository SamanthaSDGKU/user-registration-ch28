//create a User constructor
class User {
    constructor(fname, lname, email, password) {
        this.firstName = fname;
        this.lastName = lname;
        this.email = email;
        this.password = password;
    }
}

function register(){
    let inputfName = $("#txtFirstName").val();//getting the value
    let inputlName = $("#txtLastName").val();
    let inputEmail = $("#txtEmail").val();
    let inputPassword = $("#txtPassword").val();

    let newUser = new User(inputfName,inputlName,inputEmail,inputPassword);
    console.log(newUser);
}

function init(){
    console.log("Init function");

    //create two users and display them on the console
    let user1 = new User("Ben","Vance","ben@gmail.com","Test1234");
    let user2 = new User("Jason","Cerilli","jason@gmail.com","Test123456");
    console.log(user1,user2);
}

window.onload=init;
