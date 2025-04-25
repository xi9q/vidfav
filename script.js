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