//navbar

function navBar() {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
}

navBar();

console.log(
  "hella"
)