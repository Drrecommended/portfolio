function navBar() {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  if ($(".navbar-collapse").attr("show") === "true") {
      console.log("it's true my nig")
  }
}

navBar();
