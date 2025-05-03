document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
    const encryptForm = document.getElementById('encrypt-form');
    const numberInput = document.getElementById('number-input');
    const encryptOutputContainer = document.getElementById('encrypt-output-container');
    const encryptedOutputSpan = document.getElementById('encrypted-output');
    const copyEncryptedButton = document.getElementById('copy-encrypted');

    const decryptForm = document.getElementById('decrypt-form');
    const bitchInput = document.getElementById('bitch-input');
    const decryptOutputContainer = document.getElementById('decrypt-output-container');
    const decryptedOutputSpan = document.getElementById('decrypted-output');
    const copyDecryptedButton = document.getElementById('copy-decrypted');

    const toastElement = document.getElementById('toast');

    // --- Cipher Maps ---
    const encryptMap = {
        '0': 'B', '1': 'I', '2': 'T', '3': 'C',
        '4': 'H', '5': 'E', '6': 'N', '7': 'F',
        '8': 'A', '9': 'G'
    };

    const decryptMap = {
        'B': '0', 'I': '1', 'T': '2', 'C': '3',
        'H': '4', 'E': '5', 'N': '6', 'F': '7',
        'A': '8', 'G': '9'
    };

    // --- Functions ---
    function encryptNumber(numberString) {
        let result = '';
        for (const digit of numberString) {
            result += encryptMap[digit] || '?'; // Fallback for unexpected chars
        }
        return result;
    }

    function decryptString(bitchString) {
        let result = '';
        const upperCaseString = bitchString.toUpperCase();
        for (const char of upperCaseString) {
            result += decryptMap[char] || '?'; // Fallback for unexpected chars
        }
        return result;
    }

    function showToast(message = "Copied to clipboard!") {
        toastElement.textContent = message;
        toastElement.classList.add('show');
        setTimeout(() => {
            toastElement.classList.remove('show');
        }, 3000); // Hide after 3 seconds
    }

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            showToast();
        } catch (err) {
            console.error('Failed to copy: ', err);
            showToast("Failed to copy!");
        }
    }

    // --- Event Listeners ---
    encryptForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        const numberValue = numberInput.value;
        // Basic validation (HTML pattern attribute handles most)
        if (numberValue.length === 7 && /^\d+$/.test(numberValue)) {
            const encrypted = encryptNumber(numberValue);
            encryptedOutputSpan.textContent = encrypted;
            encryptOutputContainer.style.display = 'block';
        } else {
            // Should ideally not be reached due to 'required' and 'pattern'
            alert('Please enter exactly 7 digits.');
            encryptOutputContainer.style.display = 'none';
        }
    });

    decryptForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const bitchValue = bitchInput.value;
        const validPattern = /^[BITCHENFAGbitchenfag]{7}$/;
        if (bitchValue.length === 7 && validPattern.test(bitchValue)) {
            const decrypted = decryptString(bitchValue);
            decryptedOutputSpan.textContent = decrypted;
            decryptOutputContainer.style.display = 'block';
        } else {
            alert('Please enter exactly 7 characters using only B, I, T, C, H, E, N, F, A, G.');
            decryptOutputContainer.style.display = 'none';
        }
    });

    copyEncryptedButton.addEventListener('click', () => {
        if (encryptedOutputSpan.textContent) {
            copyToClipboard(encryptedOutputSpan.textContent);
        }
    });

    copyDecryptedButton.addEventListener('click', () => {
        if (decryptedOutputSpan.textContent) {
            copyToClipboard(decryptedOutputSpan.textContent);
        }
    });

    // Optional: Convert input to uppercase for the decrypt field automatically
    bitchInput.addEventListener('input', () => {
        bitchInput.value = bitchInput.value.toUpperCase();
    });
}); 