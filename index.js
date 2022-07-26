// ================================================================================================================
//                                                   login logic
// ================================================================================================================
const idInput = document.querySelector(".idInput");
const passwordInput = document.querySelector(".passwordInput");
const anchor = document.querySelector(".anchor");
const submitBtn = document.querySelector(".submitBtn");


function myfunction() {
   idInput.validationMessage;
   passwordInput.validationMessage;
};

myfunction();

const loginObj = {
    teachers:{

        userId: "James",
        userpassword: '12345'
    },

    student:{
        userId: "Neo",
        userpassword: 'wefrny'
    }          
};

// submitBtn.addEventListener("click", ()=>{
//     if(loginObj.teachers.userId === idInput.value){
//         fetch("http://127.0.0.1:5500/Attendance.html", {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'text/html'
//             }
//         }).then((response) =>{
//             console.log(response);
//         }).catch((err) =>{
//             console.log("something went wrong " + err);
//         })
//     }else{
//         alert("unAuthorized");    
//     };  
// });



submitBtn.addEventListener("click", () =>{
    if(loginObj.teachers.userId === idInput.value && loginObj.teachers.userpassword === passwordInput.value){
        const myAttribute = document.createAttribute("href");
        myAttribute.value = "Attendance.html";
        anchor.setAttributeNode(myAttribute);
    }else{
        alert("unAuthorized");
    }
    idInput.value = "";
    passwordInput.value = "";
});
   

