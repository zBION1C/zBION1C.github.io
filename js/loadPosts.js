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
                displayFirstH1AndParagraph(postContent, file);
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
    function displayFirstH1AndParagraph(content, file) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = content;

        // Find the first <h1> and first <p> elements in the post
        const header = tempDiv.querySelector('h2');
        const firstParagraph = tempDiv.querySelector('p');

        // Create a container for the extracted elements
        if (header || firstParagraph) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.style.cursor = 'pointer'; // Add a pointer cursor to indicate it's clickable

            // Create a link and wrap only the text of the <h1> inside it
            if (header) {
                const link = document.createElement('a');
                link.href = `${postsPath}/${file}`; // Link to the full post
                link.textContent = header.textContent; // Wrap only the text of the <h1>
                header.innerHTML = ''; // Clear the <h1> content
                header.appendChild(link); // Append the link inside <h1>
                postDiv.appendChild(header);
            } else {
                console.warn('No <h1> found in the post:', content);
            }

            // Add the first <p> if found
            if (firstParagraph) {
                postDiv.appendChild(firstParagraph);
            } else {
                console.warn('No <p> found in the post:', content);
            }

            // Make the entire div clickable
            postDiv.addEventListener('click', () => {
                window.location.href = `${postsPath}/${file}`; // Redirect to the full post
            });

            // Prevent event propagation when clicking on the link to avoid redundant navigation
            postDiv.querySelector('a').addEventListener('click', (event) => {
                event.stopPropagation();
            });

            // Append the container to the posts container
            postsContainer.appendChild(postDiv);
        }
    }

    // Load posts when the page is ready
    loadPosts();
});
