//this fn needs an array
function displayUsers(usersArray){
    //travel the array (for) 
    let row;
    for(let i=0;i<usersArray.length;i++){
        let user = usersArray[i];//get each user
        console.log(user);
        //create the row=`<>${} <>`
        row=`
        <tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
        </tr>`;
        console.log(row);
        //append the user on the html table ---> read jquery documentation append()
        $("#usersTable").append(row);
    }
}

function init(){
    console.log("Listing users");
    let users=readUsers();//getting the array
    console.log(users);
   //<---------is an array -----=-
    displayUsers(users);
}


window.onload=init;