function generatePassword() {
  const length = document.getElementById('length').value;
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const useNumbers = document.getElementById('numbers').checked;
  const useSymbols = document.getElementById('symbols').checked;

  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let allChars = "";
  if (useUpper) allChars += upperChars;
  if (useLower) allChars += lowerChars;
  if (useNumbers) allChars += numberChars;
  if (useSymbols) allChars += symbolChars;

  if (allChars === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordBox = document.getElementById("password");
  passwordBox.select();
  passwordBox.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}
