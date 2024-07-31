document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.querySelector('.search-bar');

    searchBar.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            alert(Searching for: ${searchBar.value});
            // Implement search functionality here
        }
    });
});