document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const postsPath = '/static/posts'; // Path to your posts directory

    // Function to load the list of posts
    async function loadPosts() {
        try {
            // Fetch the directory listing or manually maintain a list of posts
            const response = await fetch(postsPath);
            if (!response.ok) {
                throw new Error(`Failed to load posts: ${response.statusText}`);
            }

            // Parse the response as text (HTML)
            const text = await response.text();
            // Extract post links or filenames from the response (this might vary depending on the server setup)
            const postFiles = parsePostLinks(text); // Implement this function based on your server response

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

    // Function to parse post links (customize this based on server response)
    function parsePostLinks(html) {
        const links = [];
        // Example regex to extract links, adjust based on your directory listing format
        const regex = /href="([^"]+\.html)"/g;
        let match;
        while ((match = regex.exec(html)) !== null) {
            links.push(match[1]);
        }
        return links;
    }

    // Function to display the first <h1> and first <p> of a post, making the entire div clickable
    function display(content, file) {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.toLocaleString('default', { month: 'short' });
        const year = currentDate.getFullYear();
        const date = day + ' ' + month + ' ' + year;

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;

        // Find the first <h1> and first <p> elements in the post
        const header = tempDiv.querySelector('h1');
        const summary = tempDiv.querySelector('p');

        // Create a container for the extracted elements
        if (header && summary) {
            const media = document.createElement('div');
            media.classList.add('media');

            const media_body = document.createElement('div');
            media_body.classList.add('media-body')

            const media_heading = document.createElement('div');
            media_heading.classList.add('media-heading');

            const media_content = document.createElement('div');
            media_content.classList.add('media-content')

            media.appendChild(media_body);
            media_body.appendChild(media_heading)
            media_body.appendChild(media_content);

            // Create a link and wrap only the text of the <h1> inside it
            const link = document.createElement('a');
            link.href = `${postsPath}/${file}`; // Link to the full post
            link.textContent = header.textContent; // Wrap only the text of the <h1>
            header.innerHTML = ''; // Clear the <h1> content
            link.style.fontSize = "30px";

            media_heading.appendChild(link); // Append the link inside <h1>
            media_content.appendChild(summary)

            // Make the entire div clickable
            media.addEventListener('click', () => {
                window.location.href = `${postsPath}/${file}`; // Redirect to the full post
            });

            // Prevent event propagation when clicking on the link to avoid redundant navigation
            media.querySelector('a').addEventListener('click', (event) => {
                event.stopPropagation();
            });

            // Append the container to the posts container
            postsContainer.appendChild(media);
        }
    }

    // Load posts when the page is ready
    loadPosts();
});
