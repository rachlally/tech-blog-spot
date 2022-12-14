const loginForm = document.querySelector("#login");
loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const userObj = {
        username:document.querySelector("#loginUsername").value,
        password:document.querySelector("#loginPassword").value,
    }
    fetch("/api/user/login",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})

const signupForm = document.querySelector("#signup");
signupForm.addEventListener("submit",e=>{
    e.preventDefault();
    console.log('PREVENTED DEFAULT!')
    const userObj = {
        username:document.querySelector("#signupUsername").value,
        password:document.querySelector("#signupPassword").value,
    }
    fetch("/api/user/",{
        method:"POST",
        body:JSON.stringify(userObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        }
    })
})
