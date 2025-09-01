document.addEventListener('DOMContentLoaded', () => {
    // App buttons
    const phoneButton = document.getElementById('btnPhone');
    const messagesButton = document.getElementById('btnMessages');
    const browserButton = document.getElementById('btnBrowser');
    const galleryButton = document.getElementById('btnGallery');

    // Modals
    const phoneModal = document.getElementById('phoneModal');
    const messagesModal = document.getElementById('messagesModal');
    const browserModal = document.getElementById('browserModal');
    const galleryModal = document.getElementById('galleryModal');

    // Close buttons for modals
    document.querySelectorAll('.close-button').forEach(button => {
        button.addEventListener('click', (event) => {
            event.target.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === phoneModal) phoneModal.style.display = 'none';
        if (event.target === messagesModal) messagesModal.style.display = 'none';
        if (event.target === browserModal) browserModal.style.display = 'none';
        if (event.target === galleryModal) galleryModal.style.display = 'none';
    });


    // --- Phone App Logic ---
    const phoneNumberInput = document.getElementById('phoneNumberInput');
    const keypadKeys = document.querySelectorAll('.keypad .key');
    const callButton = document.getElementById('callButton');

    phoneButton.addEventListener('click', () => {
        phoneModal.style.display = 'flex';
        phoneNumberInput.value = ''; // Clear previous input
    });

    keypadKeys.forEach(key => {
        key.addEventListener('click', () => {
            phoneNumberInput.value += key.textContent;
        });
    });

    callButton.addEventListener('click', () => {
        const number = phoneNumberInput.value;
        if (number) {
            alert(`Calling ${number}... (Simulated)`);
            // In a real application, you might integrate with a VoIP service or a tel: link
            // window.location.href = `tel:${number}`; // This would try to open the phone dialer on a real device
            phoneModal.style.display = 'none';
        } else {
            alert('Please enter a number to call.');
        }
    });

    // --- Messages App Logic ---
    const messageList = document.getElementById('messageList');
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessageButton');

    messagesButton.addEventListener('click', () => {
        messagesModal.style.display = 'flex';
    });

    sendMessageButton.addEventListener('click', () => {
        const messageText = messageInput.value.trim();
        if (messageText) {
            const newMessage = document.createElement('div');
            newMessage.classList.add('message', 'outgoing');
            newMessage.textContent = messageText;
            messageList.appendChild(newMessage);
            messageInput.value = '';
            messageList.scrollTop = messageList.scrollHeight; // Scroll to bottom
            
            // Simulate an incoming reply after a short delay
            setTimeout(() => {
                const reply = document.createElement('div');
                reply.classList.add('message', 'incoming');
                reply.textContent = `Received: "${messageText}"`;
                messageList.appendChild(reply);
                messageList.scrollTop = messageList.scrollHeight;
            }, 1500);
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessageButton.click();
        }
    });

    // --- Browser App Logic ---
    const browserUrlInput = document.getElementById('browserUrlInput');
    const goButton = document.getElementById('goButton');
    const browserFrame = document.getElementById('browserFrame');

    browserButton.addEventListener('click', () => {
        browserModal.style.display = 'flex';
        // Ensure the iframe reloads or navigates to the current URL in input
        browserFrame.src = browserUrlInput.value; 
    });

    goButton.addEventListener('click', () => {
        let url = browserUrlInput.value.trim();
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url; // Default to https if no protocol
        }
        browserFrame.src = url;
    });

    browserUrlInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            goButton.click();
        }
    });

    // --- Gallery App Logic ---
    const galleryImagesContainer = document.getElementById('galleryImages');
    const addPictureButton = document.getElementById('addPictureButton');
    const imageUploadInput = document.getElementById('imageUpload');

    galleryButton.addEventListener('click', () => {
        galleryModal.style.display = 'flex';
    });

    addPictureButton.addEventListener('click', () => {
        imageUploadInput.click(); // Trigger the hidden file input
    });

    imageUploadInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Uploaded Image';
                galleryImagesContainer.appendChild(img);
                // Optional: Save to local storage if you want persistence
            };
            reader.readAsDataURL(file);
        }
    });
});
