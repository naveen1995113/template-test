const videoElement = document.getElementById("video");
const buttonElement = document.getElementById("button");
// Prompt to select a media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log(err);
  }
}

buttonElement.addEventListener("click",async ()=>{
    //Disable Button
    button.disabled=true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    // Enable Button
    button.disabled=false;
});
//onLoad
selectMediaStream();
