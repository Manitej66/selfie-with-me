window.addEventListener("load", function () {
  document
    .querySelector('input[type="file"]')
    .addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var img = document.querySelector("#bg-img");
        img.onload = () => {
          URL.revokeObjectURL(img.src); // no longer needed, free memory
        };

        img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var checkbox = document.querySelector("#checkbox-id");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      document.getElementById("main").style.filter =
        "grayscale(var(--value, 100%)";
    } else {
      document.getElementById("main").style.filter =
        "grayscale(var(--value, 0%)";
    }
  });
});
