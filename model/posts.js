module.exports = {
    posts: [
        {
            id: "qqlr",
            title: "Teste Mural de avisos",
            description: "Descrição do teste"
        },
    ],

    getAll() {
        return this.posts
    },

    newPost(title, description) {
        this.posts.push({ id: generateID(), title, description })
    },

    deletePost() {
        this.posts.pop()
    }
}

function generateID() {
    return Math.random().toString(36).substr(2, 9)
}