const logoutBtn = document.querySelector("#logoutBtn");
logoutBtn.addEventListener("click",e=>{
    fetch("/api/user/logout",{
        method:"POST"
    }).then(res=>{
        location.reload()
    })
})