// grab the img
let img = $('img')
// grab the hide button
let hideBtn = $('#testbutton')
console.log('testinnnnn')
console.log(img, hideBtn)
// add a click event to the button
hideBtn.click(hideImg)

// // the .click(functionName) works for STATIC elements, that are already on the page when it loads. DYNAMIC elements that are created on the go (e.g. To do list items) must use the .on('click', functionName) method

// // create the supporting function that hides the image
function hideImg() {
  img.hide()
}
// grab the show button
// let showBtn = $('#show')
// showBtn.on('click', showImg)

// function showImg() {
//   img.show()
// }

var scroll = new SmoothScroll('a[href*="#"]');