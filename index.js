function navBar() {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
  if ($(".navbar-collapse").attr("show") === "true") {
      console.log("it's true my nig")
  }
}

navBar();


let names = ['tim', 'kyle', '  cristina', 'connor  ']

function cleanNames(arr) {
  return arr.map((name) => {
    console.log(name.trim())
  })
}

cleanNames(names)