document.addEventListener("DOMContentLoaded", function () {
  var dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var iconText = item.innerHTML;
      document.querySelector(".dropdown-toggle").innerHTML = iconText;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var elements = document.querySelectorAll("[data-trigger]");

  elements.forEach(function (element) {
    element.addEventListener("click", function () {
      var targetId = element.getAttribute("data-trigger");
      var targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.classList.toggle("show");
        document.body.classList.toggle("offcanvas-active");
      }
    });
  });
});

/*function dropdown() {
  alert("ssup");
}
dropdown();*/
