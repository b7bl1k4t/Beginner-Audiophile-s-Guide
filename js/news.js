document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const cards = Array.from(track.children);
    let currentIndex = 0;

    const getCardWidth = () => cards[0].getBoundingClientRect().width;

    const moveToCard = (index) => {
        const cardWidth = getCardWidth();
        track.style.transform = `translateX(-${(cardWidth + 30) * index}px)`;
        currentIndex = index;
    };

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            moveToCard(currentIndex + 1);
        } else {
            moveToCard(0); // Цикличная прокрутка
        }
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            moveToCard(currentIndex - 1);
        } else {
            moveToCard(cards.length - 1); // Цикличная прокрутка
        }
    });

    // Автоматическая прокрутка каждые 5 секунд
    setInterval(() => {
        nextButton.click();
    }, 5000);
});
