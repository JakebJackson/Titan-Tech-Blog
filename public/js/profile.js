const deleteBtns = document.querySelectorAll('.post-delete');

deleteBtns.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();

        console.log(`This selector returns: ${this}`);

        const thisBtn = event.target;
        const getPostID = thisBtn.id.split('-');
        const postID = getPostID[1];
        console.log(postID)
        const parentElement = document.querySelector(`#profile-post-${postID}`);

        deletePostHandler(postID);

    });
});

async function deletePostHandler(postID) {
    try {
        const response = await fetch(`/api/app/delete/${postID}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }

    } catch (error) {
        alert(error.message); // Handle any errors during fetch
    }
}