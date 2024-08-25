const paginationContainer = document.querySelector('.pagination');
const contentDiv = document.getElementById('content');
let currentPage = 1;
let totalPages = 5;

// Function to load content for the selected page
function loadPageContent(page) {
    contentDiv.innerHTML = `<h1>Page ${page} Content</h1>`;
}

// Function to update active button and content
function updatePagination(page) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(button => {
        button.classList.remove('active');
        if (parseInt(button.dataset.page) === page) {
            button.classList.add('active');
        }
    });
    loadPageContent(page);
}

// Event listener for page buttons
paginationContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('page')) {
        const selectedPage = parseInt(e.target.dataset.page);
        updatePagination(selectedPage);
    } else if (e.target.classList.contains('arrow')) {
        // Load more pages when the arrow is clicked
        if (currentPage < totalPages) {
            const newPage = currentPage + 1;
            const newButton = document.createElement('button');
            newButton.classList.add('page');
            newButton.dataset.page = newPage;
            newButton.innerText = newPage;
            paginationContainer.insertBefore(newButton, document.getElementById('next'));
            totalPages++;
            updatePagination(newPage);
        }
    }
});

// Initial load
loadPageContent(currentPage);
