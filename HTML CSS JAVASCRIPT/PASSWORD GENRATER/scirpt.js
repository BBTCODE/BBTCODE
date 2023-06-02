const passwordbox = document.getElementById("password");
const lengt = 12;

const uppercase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
const lowercase = "abcdefghijklmonpqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*>?{}[]/-=<+~_";
const allcar = uppercase + lowercase + number + symbol;

createpassword = () => {
  let password = "";
  password += uppercase[Math.floor(Math.random() * uppercase.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (password.length < lengt) {
    password += allcar[Math.floor(Math.random() * allcar.length)];
  }
  passwordbox.value = password;
}

copypassword = () => {
     passwordbox.select();
     document.execCommand("copy");
}
