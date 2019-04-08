const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogImgEl = document.querySelector(".pic-div");
const img = document.querySelector(".puppy-pic")



function swapPic(json){
  const imgSrc = document.querySelector(".puppy-pic")
  imgSrc.src = json.message[0]
}

function fetchPic() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => swapPic(json));
    document.querySelector(".instruction").innerHTML = "Boop the puppy on the nose";
}




document.querySelector(".puppy-pic").addEventListener("mousedown", function() {
  document.querySelector(".instruction").innerHTML = "BOOP";
});



  document.querySelector(".next-button").addEventListener("click", fetchPic);



