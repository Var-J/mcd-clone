var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);

const tamu = document.querySelector(".pesan_tamu");
tamu.addEventListener("click", function() {
  let x = document.getElementById("window-tamu")
  let y = document.getElementById("window-login");
  x.style.display = "block";
  y.style.display = "none";
})

const login = document.querySelector(".pesan_login");
login.addEventListener("click", function() {
  let x = document.getElementById("window-tamu")
  let y = document.getElementById("window-login")
  x.style.display = "none";
  y.style.display = "block";
})