const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg")

function openFulImg(){
    fulImgBox.style.display = "flex";
    fulImg.src = this.src;
}

function closeImg(){
    fulImgBox.style.display = "none";
}