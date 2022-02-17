let form = document.getElementById("contactForm");

async function handleSubmit(event) {
  console.log("hey");
  event.preventDefault();
  let status = document.getElementById("form-status");
  let data = new FormData(event.target);
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

function openNav() {
  if(screen.width < 500) {
    document.getElementById("mySidenav").style.width = "100%";
  } else {
    document.getElementById("mySidenav").style.width = "450px";
  }
  
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}
function navBar() {
  $(".sidenav>ul>li>a").on("click", closeNav);
}

navBar();
