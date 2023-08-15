const textArea = document.querySelector(".uncrypted_text");
const message = document.querySelector(".encrypted_text");

function encryptBtn() {
    const encryptedText = encrypt(textArea.value);
    message.value = encryptedText;
    textArea.value = "";
    message.style.backgroundImage = "none";
}

function encrypt(input) {
    let replaceArray = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    input = input.toLowerCase();

    for (let i = 0; i < replaceArray.length; i++) {
        if (input.includes(replaceArray[i][0])) {
            input = input.replaceAll(replaceArray[i][0], replaceArray[i][1]);
        }
    }
    return input;
}

function decryptBtn() {
    const decryptedText = decrypt(textArea.value);
    message.value = decryptedText;
    textArea.value = "";
}

function decrypt(input) {
    let replaceArray = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    input = input.toLowerCase();
    for (let i = 0; i < replaceArray.length; i++) {
        if (input.includes(replaceArray[i][1])) {
            input = input.replaceAll(replaceArray[i][1], replaceArray[i][0]);
        }
    }
    return input;
}

//Copy and Paste buttons functionality
const copy = document.querySelector('.copy_btn');
const encrypted_text = document.querySelector('.encrypted_text');
const paste = document.querySelector('#paste_ico');
const uncrypted_text = document.querySelector('.uncrypted_text');

copy.addEventListener("click", async () => {
    await navigator.clipboard.writeText(encrypted_text.value);
});

paste.addEventListener("click", async () => {
    const read = await navigator.clipboard.readText();
    uncrypted_text.value = read;
});