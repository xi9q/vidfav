const searchInput = document.getElementById("search");
const videos = document.querySelectorAll(".gallery video");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  videos.forEach((video) => {
    const name = video.getAttribute("data-name").toLowerCase();
    if (name.includes(query)) {
      video.style.display = "block";
    } else {
      video.style.display = "none";
    }
  });
});

videos.forEach((video) => {
  // Create a wrapper div for the video
  const wrapper = document.createElement("div");
  wrapper.style.position = "relative";
  wrapper.style.display = "inline-block";

  // Insert the wrapper before the video and move the video inside it
  video.parentNode.insertBefore(wrapper, video);
  wrapper.appendChild(video);

  // Create the play button
  const playButton = document.createElement("div");
  playButton.classList.add("play-button");
  playButton.innerHTML = "&#9658;"; // Play icon
  playButton.style.position = "absolute";
  playButton.style.top = "50%";
  playButton.style.left = "50%";
  playButton.style.transform = "translate(-50%, -50%)";
  playButton.style.fontSize = "48px";
  playButton.style.color = "#fff";
  playButton.style.cursor = "pointer";
  playButton.style.zIndex = "10";
  playButton.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  playButton.style.borderRadius = "50%";
  playButton.style.padding = "20px";

  // Append the play button to the wrapper
  wrapper.appendChild(playButton);

  // Hide controls initially
  video.controls = false;

  // Play video on button click
  playButton.addEventListener("click", () => {
    playButton.style.display = "none";
    video.controls = true;
    video.play();
  });

  // Show play button again when video ends
  video.addEventListener("ended", () => {
    playButton.style.display = "block";
    video.controls = false;
  });

  video.addEventListener("ended", () => {
    playButton.style.display = "block";
    video.controls = false;
  });

// Show play button and hide controls when video is paused
  video.addEventListener("pause", () => {
    playButton.style.display = "block";
    video.controls = false;
  });
});

