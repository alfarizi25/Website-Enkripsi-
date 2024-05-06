// Fungsi buat Enkripsi
function encrypt(message, key) {
    var ciphertext = CryptoJS.AES.encrypt(message, key);
    return ciphertext.toString();
}

// Fungsi buat Dekripsi
function decrypt(ciphertext, key) {
    var bytes  = CryptoJS.AES.decrypt(ciphertext, key);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
}

// Event Listener tombol Enkripsi
document.getElementById('encryptButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var encryptedMessage = encrypt(inputText, 'kunci rahasia');
    document.getElementById('output').innerText = '' + encryptedMessage;
});

// Event Listener tombol Dekripsi
document.getElementById('decryptButton').addEventListener('click', function() {
    var inputText = document.getElementById('inputText').value;
    var decryptedMessage = decrypt(inputText, 'kunci rahasia');
    document.getElementById('output').innerText = '' + decryptedMessage;
});



// copy tombol 
function salin() {
    // Get the text field
    var copyText = document.getElementById("output");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
  
     // Copy the text 
    navigator.clipboard.writeText(copyText.value);
  
    // Alert nya
    alert("Tersalin");
  }