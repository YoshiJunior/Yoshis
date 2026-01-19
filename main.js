  const searchInput = document.querySelector('.search-bar');
  const gameCards = document.querySelectorAll('.game-card');

  searchInput.addEventListener('input', function () {
    const query = this.value.toLowerCase();

    gameCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });


  document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.querySelector('.search-bar');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const gameCards = document.querySelectorAll('.game-card');

    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        let resultsFound = false;

        gameCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if (title.includes(query)) {
                card.style.display = '';
                resultsFound = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (!resultsFound && query !== '') {
            noResultsMessage.style.display = 'flex';
        } else {
            noResultsMessage.style.display = 'none';
        }
    });
});