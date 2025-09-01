document.addEventListener('DOMContentLoaded', () => {
    const phoneButton = document.getElementById('btnPhone');
    const messagesButton = document.getElementById('btnMessages');
    const browserButton = document.getElementById('btnBrowser');
    const galleryButton = document.getElementById('btnGallery');

    phoneButton.addEventListener('click', () => {
        alert("Calling feature is not directly available in web browsers. This would open your phone's dialer if it were an app.");
        // In a real web app, you might integrate with a VoIP service or a custom protocol handler
    });

    messagesButton.addEventListener('click', () => {
        alert("Messaging apps are not directly accessible from web browsers. This would open your messaging app if it were an app.");
        // In a real web app, you might open a web-based chat interface or a mailto link
    });

    browserButton.addEventListener('click', () => {
        window.open('https://www.google.com', '_blank'); // Opens Google in a new tab
    });

    galleryButton.addEventListener('click', () => {
        alert("Opening a gallery is not directly possible from a web button without user interaction (e.g., file input). This would open your phone's gallery if it were an app.");
        // In a real web app, you might display a photo carousel or upload image functionality.
    });
});
