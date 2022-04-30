//this fn needs an array
function displayUsers(usersArray){
    //travel the array (for) 
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];//get each user
        console.log(user);
        //create the row=`<>${} <>`
    }
    //append the user on the html table ---> read jquery documentation append()
}

function init(){
    console.log("Listing users");
    let users=readUsers();//getting the array
   //<---------is an array -----=-
    displayUsers(users);
}


window.onload=init;