// vai fazer uma chamada pro back-end, que vai pegar os dados para mostrar os posts em tela
// preciso garantir que essa função só vai ser chamada depois que eu carregar todos os elementos em tela
document.addEventListener("DOMContentLoaded", () => {
    updatePosts()
})

function updatePosts() {

    fetch("http://192.168.0.15:3000/api/all").then(res => {
        return res.json()
    }).then(json => {
        let postElements = ''

        // pegar o json e transformar em objeto
        let posts = JSON.parse(json)
        posts.forEach((post) => {
            let postElement = `<div id=${post.id} class="card mb-4">
            <div class="card-header">
                <h5 class="card-title">${post.title}</h5>
            </div>
            <div class="card-body">
                <div class="card-text">${post.description}</div>
            </div>
        </div>`
        postElements += postElement
        })
        document.getElementById("posts").innerHTML = postElements
    })
}

function newPost() {
    let title = document.getElementById("title").value
    let description = document.getElementById("desc").value

    if (!title || !description) {
        alert("Por favor, adicione um título e uma descrição")
    } else {
        let post = {title, description}
        const options = { 
            method: "POST",     
            headers: new Headers({"Content-Type": "application/json"}),            
            body: JSON.stringify(post)
        }
    
        fetch("http://192.168.0.15:3000/api/new", options).then(res => {
            updatePosts()
            document.getElementById("title").value = ""
            document.getElementById("desc").value = ""
        })
    }
}

function deletePost() {
    fetch("http://192.168.0.15:3000/api/delete", {method: "DELETE"}).then(() => {
        updatePosts()
    })
}