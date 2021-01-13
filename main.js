const currentImg = document.querySelector("#current");
const images = document.querySelectorAll(".imgs img");
const imgOpacity = 0.5;

//set the first image's opacity in the thumnails
images[0].style.opacity = imgOpacity;
//images.forEach(img => img.addEventListener('click', (e) =>
//(currentImg.src = e.target.src)));

//alternative to the above function

images.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {
    //restore opacity to 1
    images.forEach(img => img.style.opacity = 1);

    //change current image to target one
    currentImg.src = e.target.src;
    //add fade in class here
    currentImg.classList.add('fade-in');

    setTimeout(() => currentImg.classList.remove('fade-in'), 500);
    // set opacity to imgOpacity on the image clicked
    e.target.style.opacity = imgOpacity;
};