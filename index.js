//Get all left boxes in Array
var boxes = document.querySelectorAll('.left-box');

//Get all image containers in Array
var imagesContainers = document.querySelectorAll('.img-container');

// Loop through each left box and add click event.
// Loop through right image containers and match attributes of each image container with the attribute of left box which is clicked.
for (const box of boxes) {
  box.addEventListener('click',
    function onClick() {
      boxes.forEach(item => {
        item.classList.remove('active');
        var bar = item.querySelector('.bar');
        bar.classList.remove('show-bar');
      });
      box.classList.add('active');
      var bar = box.querySelector('.bar');
      bar.classList.add("show-bar");
      var boxAttr = box.dataset.box; 
      console.log(boxAttr + 'clicked');
      imagesContainers.forEach(imagesContainer => {
        imagesContainer.classList.remove('show');
        var imgAttr = imagesContainer.dataset.img;
        if (boxAttr == imgAttr) {
          console.log(imgAttr + 'matched');
          imagesContainer.classList.add('show');
        }
      });
  });
};