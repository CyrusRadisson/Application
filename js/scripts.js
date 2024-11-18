// Select all cards and the description container
const cards = document.querySelectorAll('.card');
const descriptionContainer = document.getElementById('category-description');
const relatedImagesContainer = document.querySelector('.related-images');

// Example image URLs (replace these with your dynamic data)
const images = [
  "../images/Iran.webp",
  "../images/Afghanistan.webp",
  "../images/Pakistan.webp"
];

// Add hover event listeners to each card
cards.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    const categoryName = card.querySelector('.card-title').textContent;
    const description = card.getAttribute('data-description');
    const images = card.getAttribute('data-images').split(',');

    descriptionContainer.querySelector('h3').textContent = categoryName;

    relatedImagesContainer.innerHTML = '';
    images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Related image';
      relatedImagesContainer.appendChild(img);
    });
  });

  card.addEventListener('mouseleave', () => {
  });
});
