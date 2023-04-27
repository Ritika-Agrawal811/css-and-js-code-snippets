let videoSource = [
  "https://res.cloudinary.com/djix6uusx/video/upload/v1670218314/pexels-mikhail-nilov-6981411_pfi8ky.mp4",
  "https://res.cloudinary.com/djix6uusx/video/upload/v1594313729/samples/sea-turtle.mp4",
  "https://res.cloudinary.com/djix6uusx/video/upload/v1594313733/samples/elephants.mp4",
];

let bgVideoSource = document.getElementById("bg-video");

bgVideoSource.setAttribute("src", videoSource[0]);

function videoPlay(index) {
  bgVideoSource.setAttribute("src", videoSource[index]);
  bgVideoSource.load();
  bgVideoSource.play();
}

function loop() {
  let i = 0;
  setInterval(() => {
    i++;
    if (i == videoSource.length) {
      i = 0;
      videoPlay(i);
    } else {
      videoPlay(i);
    }
  }, 8000);
}

loop();
