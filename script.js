const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const cookieButtonOnlyNec = document.querySelector(".cookie-btn-only-nec");
const perfToggle = document.getElementById("perfToggle");
const adToggle = document.getElementById("adToggle");
const cpcPerfToggle = document.getElementById("cpcPerfToggle");
const cpcAdToggle = document.getElementById("cpcAdToggle");
const cpcUpdatePreferences = document.getElementById("cpcUpdatePrefs");
const cpcButton = document.querySelector(".cpcButton");

cpcUpdatePreferences.addEventListener("click", async () => {
  // Get Consent ID
  let consentId = getCookie("cookieConsentId");

  // Initializing cookie preferences
  let cpcConsentSettings = {
    cpcPerfCookies: true,
    adCookies: true,
  };

  // Setting preferences
  if (cpcPerfToggle.checked == false) {
    cpcConsentSettings.cpcPerfCookies = false;
  }

  if (cpcAdToggle.checked == false) {
    cpcConsentSettings.adCookies = false;
  }

  // Getting the request body ready
  let timestamp = Math.floor(new Date().getTime() / 1000);
  let ip = await getIP();
  let loc = await getLoc(ip);

  // Performing the request
  var resp = await fetch(
    `http://127.0.0.1:3000/api/v1/updatecon/${consentId}`,
    {
      method: "PUT",
      body: JSON.stringify({
        timestamp: timestamp,
        ipaddr: ip,
        geoloc: loc,
        consentval: cpcConsentSettings,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
});

cookieButton.addEventListener("click", async () => {
  // Removing consent banner
  cookieContainer.classList.remove("active");

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

  // Activate Cookie Preference Center Button
  cpcButton.classList.add("active");

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
  cookieExpDate.setSeconds(cookieExpDate.getSeconds() + 50); // Setting expiry date

  let cookieConsentString = `cookieConsentId=${
    respJson.consentId
  }; cookieConsentBannerShown=true; SameSite=Lax; expires=${cookieExpDate.toUTCString()}`;

  document.cookie = cookieConsentString;
});

cookieButtonOnlyNec.addEventListener("click", async () => {
  // Removing consent banner
  cookieContainer.classList.remove("active");

  // Initialzing cookie preferences
  let userConsentSetting = {
    perfCookies: false,
    adCookies: false,
  };

  // Getting the request body ready
  let timestamp = Math.floor(new Date().getTime() / 1000);
  let ip = await getIP();
  let loc = await getLoc(ip);

  // Activate Cookie Preference Center Button
  cpcButton.classList.add("active");

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
  cookieExpDate.setSeconds(cookieExpDate.getSeconds() + 50); // Setting expiry date

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

function getCookie(cname) {
  var match = document.cookie.match(new RegExp("(^| )" + cname + "=([^;]+)"));
  if (match) return match[2];
}

setTimeout(() => {
  let cookies = document.cookie.split();

  if (cookies.indexOf("cookieConsentBannerShown=true") == -1) {
    cookieContainer.classList.add("active");
  }
}, 2000);
