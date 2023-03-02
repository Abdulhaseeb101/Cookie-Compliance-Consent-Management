const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const perfToggle = document.getElementById("perfToggle");
const adToggle = document.getElementById("adToggle");

cookieButton.addEventListener("click", async () => {
  // Initialzing cookie preferences
  let userConsentSetting = {
    perfCookies: true,
    adCookies: true,
  };

  // Setting preferences
  if (perfToggle.checked == false) {
    userConsentSetting.perfCookies = false;
  }

  if (adToggle.checked == false) {
    userConsentSetting.adCookies = false;
  }

  // Getting the request body ready
  let timestamp = Math.floor(new Date().getTime() / 1000);
  let ip = await getIP();
  let loc = await getLoc(ip);

  // Removing consent banner
  cookieContainer.classList.remove("active");

  // Performing the request
  var resp = await fetch("http://127.0.0.1:3000/api/v1/createcon", {
    method: "POST",
    body: JSON.stringify({
      timestamp: timestamp,
      ipaddr: ip,
      geoloc: loc,
      consentval: userConsentSetting,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Prepare local cookie body
  const respJson = await resp.json();
  let cookieExpDate = new Date();
  cookieExpDate.setSeconds(cookieExpDate.getSeconds() + 10); // Setting expiry date

  let cookieConsentString = `cookieConsentId=${
    respJson.consentId
  }; cookieConsentBannerShown=true; SameSite=Lax; expires=${cookieExpDate.toUTCString()}`;

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
