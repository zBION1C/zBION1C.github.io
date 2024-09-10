document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const postsPath = '/posts'; // Path to your posts directory

    // Function to load the list of posts
    async function loadPosts() {
        try {
            // Fetch the directory listing or manually maintain a list of posts
            postFiles = ["post1.html", "post2.html", "post3.html", "post4.html"]

            // Load each post
            for (const file of postFiles) {
                const post = await fetch(`${postsPath}/${file}`);
                const postContent = await post.text();
                display(postContent, file);
            }
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    // Function to display the first <h1> and first <p> of a post, making the entire div clickable
    function display(content, file) {
        const what = document.getElementsByClassName("card_container");

        const card_container = what[0];

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;

        // Find the first <h1> and first <p> elements in the post
        const header = tempDiv.querySelector('h1');
        const summary = tempDiv.querySelector('p');
        const cover = tempDiv.querySelector('img');

        // Create a container for the extracted elements
        if (header && summary && cover) {
            const card = document.createElement('div');
            card.classList.add('card');

            const card_cover = document.createElement('div');
            card_cover.classList.add('card_cover');
            
            card_cover.style.backgroundImage = 'url(' + cover.src + ')';

            const card_body = document.createElement('div');
            card_body.classList.add('card_body')

            const card_title = document.createElement('div');
            card_title.classList.add('card_title');

            const card_desc = document.createElement('div');
            card_body.classList.add('card_desc');

            card.appendChild(card_cover);
            card.appendChild(card_body);
            
            card_body.appendChild(card_title);
            card_body.appendChild(card_desc);
            
            // Create a link and wrap only the text of the <h1> inside it
            const title = document.createElement('p');
            title.href = `${postsPath}/${file}`; // title to the full post
            title.textContent = header.textContent; // Wrap only the text of the <h1>
            header.innerHTML = ''; // Clear the <h1> content
            title.style.fontSize = "30px";

            card_title.appendChild(title); // Append the link inside <h1>
            card_desc.appendChild(summary)
            
            // Make the entire div clickable
            card.addEventListener('click', () => {
                window.location.href = `${postsPath}/${file}`; // Redirect to the full post
            });

            // Append the container to the posts container
            card_container.appendChild(card);
        }
    }

    // Load posts when the page is ready
    loadPosts();
});