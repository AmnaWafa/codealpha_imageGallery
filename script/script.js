document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.querySelector('#lightbox');
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const imageSelection = document.querySelectorAll('.image-selection img');
    const primaryImage = lightbox.querySelector('.primary-image img');

    // Populate thumbnails once
    const createThumbnails = () => {
        thumbnailsContainer.innerHTML = ''; // Clear previous thumbnails
        imageSelection.forEach(img => {
            const thumbnail = document.createElement('img');
            thumbnail.src = img.src;
            thumbnail.alt = img.alt || 'Thumbnail'; // Add alt for accessibility
            thumbnailsContainer.appendChild(thumbnail);
        });
    };

    // Open lightbox with selected image
    imageSelection.forEach(image => {
        image.addEventListener('click', () => {
            primaryImage.src = image.src;
            lightbox.classList.add('active');
            if (!thumbnailsContainer.hasChildNodes()) createThumbnails(); // Ensure no duplication
        });
    });

    // Handle thumbnail click using event delegation
    thumbnailsContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            primaryImage.src = e.target.src;
        }
    });

    // Close lightbox
    lightbox.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) { // Only close if background is clicked
            lightbox.classList.remove('active');
            primaryImage.src = '';
        }
    });

    const form = document.querySelector('#newsletter form');
    form.addEventListener('submit', e => {
        form.querySelector('#name')
    })
});
