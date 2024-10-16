document.addEventListener('DOMContentLoaded', () => {
    const blogPosts = [
        {
            title: 'Blog Post Title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vitae odio bibendum tincidunt.'
        },
        {
            title: 'Another Blog Post',
            content: 'Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur luctus.'
        }
    ];

    const blogContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button onclick="openModal('${post.title}', '${post.content}')">Read More</button>
        `;
        blogContainer.appendChild(article);
    });

    document.getElementById('search').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const articles = document.querySelectorAll('article');
        articles.forEach(article => {
            const title = article.querySelector('h2').innerText.toLowerCase();
            if (title.includes(query)) {
                article.style.display = '';
            } else {
                article.style.display = 'none';
            }
        });
    });

    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    mobileMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});

function openModal(title, content) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-content').innerText = content;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        closeModal();
    }
}
