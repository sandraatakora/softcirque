
// Add event listener to all menu items
var gallery_img = document.getElementsByClassName("gallery-img");
var i;
for (i = 0; i <  gallery_img.length; i++){
  gallery_img[i].addEventListener("mouseover", mouseOver);
  gallery_img[i].addEventListener("mouseout", mouseOut);
}

//add image opacity and img-hover to all image boxes
function mouseOver() {
  var x = document.getElementsByClassName("gallery-img");
  var i;
  var des = document.getElementsByClassName("project-name");
  var i2;
  for (i = 0; i < x.length; i++) {
    x[i].classList.add("img-opacity");
    this.classList.add("img-hover");
    this.childNodes[1].classList.add("show");
 }
}

// remove opacity and img-hover from all
function mouseOut() {
var x = document.getElementsByClassName("gallery-img");
console.log(x);
var i;
for (i = 0; i < x.length; i++) {
  x[i].classList.remove("img-opacity");
  this.classList.remove("img-hover");
  this.childNodes[1].classList.remove("show");
}
}