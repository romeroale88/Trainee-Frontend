var videoRep = document.getElementById("video-rep")
var Video = document.getElementById("video")

function stopVideo (){
    videoRep.style.display = "none"
}
function playVideo (file) {
    video.src = file
    videoRep.style.display = "block"
}