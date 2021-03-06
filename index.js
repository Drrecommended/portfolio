var form = document.getElementById("contactForm");

async function handleSubmit(event) {
  console.log("hey");
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Thanks for your submission!";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

//navbar
function navBar() {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
}

navBar();
