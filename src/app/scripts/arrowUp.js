const scrollBtn = document.querySelector('.scrollTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

function slowScrollToTop(duration = 1200) {
    const start = window.scrollY;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, start * (1 - ease));

        if (progress < 1) {
            requestAnimationFrame(scrollStep);
        }
    }

    requestAnimationFrame(scrollStep);
}

scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    setTimeout(() => {
        slowScrollToTop(1200);
    }, 300);
});
