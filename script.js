const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", async () => {
  let cookieExpDate = new Date();
  cookieExpDate.setSeconds(cookieExpDate.getSeconds() + 10); // Setting expiry date

  let cookieConsentString =
    "cookieConsentBannerShown=true; SameSite=Lax; expires=" +
    cookieExpDate.toUTCString();

  document.cookie = cookieConsentString;

  if (navigator.geolocation) {
    console.log(navigator.geolocation.getCurrentPosition(logPosition, showErr));
  } else {
    console.log("Geolocation feature unavailable");
  }

  let timestamp = Math.floor(new Date().getTime() / 1000);
  let ip = await fetch("https://api.ipify.org", {
    method: "GET",
  });
  let loc = await navigator.geolocation.getCurrentPosition(
    logPosition,
    showErr
  );

  fetch("http://127.0.0.1:3000/api/v1/createcon", {
    method: "POST",
    body: JSON.stringify({
      timestamp: timestamp,
      ipaddr: ip,
      geoloc: loc,
      consentval: "accept",
    }),
    // headers: {
    //   "Access-": "application/json",
    //   // 'Content-Type': 'application/x-www-form-urlencoded',
    // },
  });

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
