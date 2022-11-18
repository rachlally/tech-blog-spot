const postForm = document.querySelector("#addPost");
postForm.addEventListener("submit", e=> {
    e.preventDefault();
    const postObj = {
        title:document.querySelector("#postTitle").value,
        content:document.querySelector("#postContent").value,
    }
    fetch("/api/post",{
        method:"POST",
        body:JSON.stringify(postObj),
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