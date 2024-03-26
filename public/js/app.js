

const newPostHandler = async (event) => {
    event.preventDefault();

    const postTitle = document.querySelector('#post-title-input').value.trim();
    const postText = document.querySelector('#post-text-area').value;
    const postAuthor = curUser;

    if (postTitle && postText && postAuthor) {
        const response = await fetch('/api/app/new-post', {
            method: 'POST',
            body: JSON.stringify({ postTitle, postText, postAuthor }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#post-submit-btn').addEventListener('click', newPostHandler);