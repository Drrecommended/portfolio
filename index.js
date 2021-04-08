//navbar

function navBar() {
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
}

navBar();


//form

const contactForm = document.querySelector('#contactForm')
contactForm.addEventListener('submit', function (e) {
  e.preventDefault()
  console.log('SUBMITTED!')
})



// form.addEventListener('submit', function (e) {
//   e.preventDefault()
//   const productName = document.getElementById('product')
//   const productQuantity = document.getElementById('qty').value
//   addToList(productName.value, productQuantity.value)
// })

// const addToList = (product, quantity) => {
//   const newListItem = document.createElement('li')
//   const listContainer = document.querySelector('#list')
//   listContainer.append(newListItem)
// }