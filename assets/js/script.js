document.getElementById('fetchPostsBtn').addEventListener('click', async () => {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ''; // Limpiar contenido previo

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        const ul = document.createElement('ul');

        posts.forEach(post => {
            const li = document.createElement('li');
            li.innerHTML = `<h5>${post.title}</h5><p>${post.body}</p>`;
            ul.appendChild(li);
        });

        postsContainer.appendChild(ul);
    } catch (error) {
        postsContainer.innerHTML = `<p class="text-danger">Error: ${error.message}</p>`;
    }
});
