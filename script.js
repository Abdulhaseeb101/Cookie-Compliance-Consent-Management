const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", async () => {
  // Remove Cookie banner
  cookieContainer.classList.remove("active");

  // Preparing request data
  let timestamp = Math.floor(new Date().getTime() / 1000);
  let ip = await getIP();
  let loc = await getLoc(ip);

  fetch("http://127.0.0.1:3000/api/v1/createcon", {
    method: "POST",
    body: JSON.stringify({
      timestamp: timestamp,
      ipaddr: ip,
      geoloc: loc,
      consentval: "accept",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Setting Cookie values
  let cookieExpDate = new Date();
  cookieExpDate.setSeconds(cookieExpDate.getSeconds() + 20); // Setting expiry date

  let cookieConsentString =
    "cookieConsentBannerShown=true; SameSite=Lax; expires=" +
    cookieExpDate.toUTCString();

  document.cookie = cookieConsentString;
});

async function getIP() {
  const resp = await fetch("https://api.ipify.org?format=text", {
    method: "GET",
  });
  const ip = resp.text();

  return ip;
}

async function getLoc(ip) {
  const resp = await fetch("http://ip-api.com/json/" + ip + "?fields=lat,lon", {
    method: "GET",
  });
  const respJson = await resp.json();
  const latLongStr = respJson.lat + " " + respJson.lon;

  return latLongStr;
}

setTimeout(() => {
  let cookies = document.cookie.split();

  if (cookies.indexOf("cookieConsentBannerShown=true") == -1) {
    cookieContainer.classList.add("active");
  }
}, 2000);
