var url = "song.mp3"; // the path to the audio file

var request = new XMLHttpRequest(); // use a GET request to the load the file as an arraybuffer
request.open('GET', url, true);
request.responseType = 'arraybuffer';

request.onload = () => {
    console.log("data")
    var audioData = request.response;
    console.log(audioData);
  };

request.send();

window.addEventListener('load', () => {
    console.log("Javascript loaded. Starting Algorithm.");

    //runAlgorithm();
}, false);



