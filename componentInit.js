// Create a new div element to contain the modal
const modalContainer = document.createElement("div");

document.body.appendChild(modalContainer);

// Create the button element
const cpcButton = document.createElement("cpcButton");
cpcButton.type = "button";
cpcButton.style.width = "25%";
cpcButton.style.marginTop = "5%";
cpcButton.style.marginLeft = "38%";
cpcButton.className = "cpcButton btn btn-primary";
cpcButton.dataset.bsToggle = "modal";
cpcButton.dataset.bsTarget = "#myModal";
cpcButton.textContent = "Open Cookie Preference Center";

// Get the element where you want to insert the button
const container = document.getElementById("container");

// Insert the button into the container
container.appendChild(cpcButton);

// Set the innerHTML of the div element to the modal HTML code
modalContainer.innerHTML = `
<div class="modal fade" id="myModal" data-bs-backdrop="static">
<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
  <div class="modal-content">

    <!-- Modal Header -->
    <div class="modal-header">
      <h4 class="modal-title">Cookie Preference Center</h4>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>

    <!-- Modal body -->
    <div class="modal-body">
      <p>Cookies are used by us and our trusted partners to enhance your experience in a lot of ways. For example: data is collected, stored, shared, and tracked using cookies to remember recent activity, like your last search, or to personalize which ads you see so that our site is easier to use.</p>
      <h4 style="font-weight: bold;">Manage Consent Preferences</h4>
      <div class="container">
        <div class="row gx-5">
          <div class="col"><h6 class="p-3" style="font-weight: bold;">Essential Cookies</h6></div>
          <div class="col"><h6 class="p-3" style="font-weight: bold; color: dodgerblue;">Always Active</h6></div>
        </div>
        <p>These cookies are necessary. They're the basic cookies that enable our site to work properly so that you can use the most important functions and navigate the site smoothly.</p>
        
        <div class="row gx-5">
          <div class="col"><h6 class="p-3" style="font-weight: bold;">Performance Cookies</h6></div>
          <div class="col">
            <div class="form-check form-switch p-3">
            <input class="form-check-input" type="checkbox" id="cpcPerfToggle" checked>
          </div>
        </div>
      </div>
      <p>These cookies allow us to measure and improve the performance of our site. If you deactivate these cookies we won't be able to optimize our site for you.</p>
      
      <div class="row gx-5">
        <div class="col"><h6 class="p-3" style="font-weight: bold;">Advertising Cookies</h6></div>
        <div class="col">
          <div class="form-check form-switch p-3">
          <input class="form-check-input" type="checkbox" id="cpcAdToggle" checked>
        </div>
      </div>
    </div>
    <p>These cookies enable personalization by tracking things like what you view, browse, and search for on our site. This and other data that we have, converted so that it can't be used to directly identify you (pseudomized), may be shared with third-party partners who may use it to tailor ads to your profile.</p>
  </div>
  </div>
  <!-- Modal footer -->
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" id="cpcUpdatePrefsButton" data-bs-dismiss="modal">Confirm Preference</button>
  </div>
</div>
</div>
`;

// Append the modal container to the container element
container.appendChild(modalContainer.firstChild);

// create the element
const cookieContainer = document.createElement("div");
cookieContainer.className = "cookie-container";
cookieContainer.innerHTML = `
    <p>
      We use cookies (including third-party cookies), to provide you with the
      best possible online experience and to tailor content to your interests.
      By clicking on "Accept all" you agree to the saving and reading of
      information on your end device. Take a look at our
      <a href="#">cookie policy</a>
    </p>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="perfToggle" checked>
      <label class="toggleLbl" for="perfCookies">Enable Performance Cookies</label>
    </div>
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" id="adToggle" checked>
      <label class="toggleLbl" for="adCookies">Enable Advertising Cookies</label>
    </div>
    <div class="col-lg-4 login-btm login-button">
      <button class="cookie-btn btn btn-outline-primary">Accept all</button>
    </div>
    <div class="col-lg-8 login-btm login-button">
      <button class="cookie-btn-sel btn btn-outline-primary">Accept selected</button>
    </div>
`;

// get the body element to append the new element to
const body = document.querySelector("body");

// append the new element to the parent
body.appendChild(cookieContainer);

//const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");
const cookieButtonOnlySel = document.querySelector(".cookie-btn-sel");
const perfToggle = document.getElementById("perfToggle");
const adToggle = document.getElementById("adToggle");
const cpcPerfToggle = document.getElementById("cpcPerfToggle");
const cpcAdToggle = document.getElementById("cpcAdToggle");
const cpcUpdatePreferences = document.getElementById("cpcUpdatePrefsButton");
