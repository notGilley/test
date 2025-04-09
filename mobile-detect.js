document.addEventListener('DOMContentLoaded', () => {
    function isMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    if (isMobile()) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'mobile-styles.css'; // Path to your mobile-specific CSS file
        document.head.appendChild(link);
    }
});