document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');
    const backToTopButton = document.getElementById('back-to-top');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');

        // Корректируем ширину меню после отображения
        if (navLinks.classList.contains('active')) {
            adjustMenuWidth();
        }
    });

    function adjustMenuWidth() {
        let maxWidth = 0;

        // Определяем ширину самого длинного элемента
        navItems.forEach(item => {
            const itemWidth = item.offsetWidth;
            if (itemWidth > maxWidth) {
                maxWidth = itemWidth;
            }
        });

        // Устанавливаем ширину для меню + небольшой отступ (например, 20px)
        navLinks.style.width = `${maxWidth + 20}px`;
    }

    // Показать кнопку, когда пользователь прокрутил страницу вниз на 300 пикселей
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Прокрутка страницы наверх при нажатии на кнопку
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка наверх
        });
    });

    // Добавляем событие изменения размера окна для пересчета ширины
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            adjustMenuWidth();
        }
    });
});


