document.addEventListener('DOMContentLoaded', () => {
  // Select all cards and the description container
  const cards = document.querySelectorAll('.card');
  const descriptionContainer = document.getElementById('category-description');
  const relatedImagesContainer = document.querySelector('.related-images');

  // Ensure the elements exist before adding listeners
  if (cards && descriptionContainer && relatedImagesContainer) {
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        const categoryName = card.querySelector('.card-title').textContent;
        const description = card.getAttribute('data-description');
        const images = card.getAttribute('data-images').split(',');

        // Update the description container
        descriptionContainer.querySelector('h3').textContent = categoryName;
        descriptionContainer.querySelector('p').textContent = description;

        // Clear and update the related images container
        relatedImagesContainer.innerHTML = '';
        images.forEach((src) => {
          const img = document.createElement('img');
          img.src = src;
          img.alt = `${categoryName} related image`;
          relatedImagesContainer.appendChild(img);
        });
      });

      card.addEventListener('mouseleave', () => {
        // Clear description and images when hover ends
        descriptionContainer.querySelector('h3').textContent = 'Hover to show';
        descriptionContainer.querySelector('p').textContent = '';
        relatedImagesContainer.innerHTML = '';
      });
    });
  }
});
