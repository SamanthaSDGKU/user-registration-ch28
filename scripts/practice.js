// selecting the txtEmail with JS

// selectors type:
// #id, .class, tag
// jquery = $

//selecting by ID
//let email=document.getElementById("txtEmail").value;
email=$("#txtEmail").val();
console.log(email);

//selecting by className and hiding the elements with JS
// let formControl = document.getElementsByClassName("form-control");
// for(let i=0;i<formControl.length;i++){
//     formControl[i].style.display="none";
// }

let formControl = $(".form-control");
formControl.hide();


//selecting by tagName
// let labels = document.getElementsByTagName("label");
// console.log(labels);
let labels = $("label");
console.log(labels);