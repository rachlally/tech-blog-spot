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

const delButtons = document.querySelectorAll(".delBtn");

delButtons.forEach(delBtn=>{
    delBtn.addEventListener("click",e=>{
        const postId = e.target.getAttribute("data-postid")
        console.log(postId);
        fetch(`/api/post/${postId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
                location.reload();
            } else {
                alert("trumpet sound")
            }
        })
    })
})