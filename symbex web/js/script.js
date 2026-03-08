document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      }
    });
  });

  document.querySelectorAll(".hidden").forEach(el => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.video-box video');
  videos.forEach(video => {
    video.pause();
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });
});