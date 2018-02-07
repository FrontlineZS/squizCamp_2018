window.onscroll = function() {
  checkThreshold();
};

const scrollTopBtn = document.querySelector('#scroll-top-btn');
scrollTopBtn.addEventListener('click', scrollTopFunction);

function checkThreshold() {
  if (document.documentElement.scrollTop > 500 ||
      document.body.scrollTop > 500) {
        scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
}

function scrollTopFunction() {
  const banner = document.querySelector('#banner');
  banner.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}
