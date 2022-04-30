const STORE_KEY ="users";

function saveUser(user){
    //load the old data
    let oldData=readUsers();// getting localstorage info
    oldData.push(user);
    let val=JSON.stringify(oldData);
    localStorage.setItem(STORE_KEY,val);// -> JSON
}
function readUsers(){
    let data=localStorage.getItem(STORE_KEY);
    console.log(data); // <- JSON
    if(!data){//is not data?
        //if you get here it means is empty
        return [];//creating the array
    }else{
        //we have data
        let list = JSON.parse(data);// parsing JSON to obj
        return list;//return the array of obj
    }
}