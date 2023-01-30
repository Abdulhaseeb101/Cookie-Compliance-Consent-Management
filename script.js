const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  let cookieExpDate = new Date();
  cookieExpDate.setSeconds(cookieExpDate.getSeconds() + 10);

  let cookieConsentString =
    "cookieConsentBannerShown=true; SameSite=Lax; expires=" +
    cookieExpDate.toUTCString();

  document.cookie = cookieConsentString;

  if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition(logPosition, showErr));
  } else {
    console.log("Geolocation feature unavailable");
  }

  cookieContainer.classList.remove("active");
});

function showErr() {
  console.log("Permission Denied");
}

function logPosition(pos) {
  console.log(
    "Latitude: " +
      pos.coords.latitude +
      " " +
      "Longitude: " +
      pos.coords.longitude
  );
}

setTimeout(() => {
  let cookies = document.cookie.split();
  console.log(cookies);
  if (cookies.indexOf("cookieConsentBannerShown=true") == -1) {
    cookieContainer.classList.add("active");
  }
}, 2000);
