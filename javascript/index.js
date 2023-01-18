function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss"
  )} <small>${losAngelesTime.format("a")}</small>`;

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
  parisTimeElement.innerHTML = `${parisTime.format(
    "h:mm:ss"
  )} <small>${parisTime.format("a")}</small>`;

  let hongKongElement = document.querySelector("#hong-kong");
  let hongKongDateElement = hongKongElement.querySelector(".date");
  let hongKongTimeElement = hongKongElement.querySelector(".time");
  let hongKongTime = moment().tz("Asia/Hong_Kong");

  hongKongDateElement.innerHTML = hongKongTime.format("MMMM Do, YYYY");
  hongKongTimeElement.innerHTML = `${hongKongTime.format(
    "h:mm:ss"
  )} <small>${hongKongTime.format("a")}</small>`;
}

updateTime();
setInterval(updateTime, 1000);

function updateLocation(event) {
  let locationTimeZone = event.target.value;
  if (event.target.value.length > 0) {
    if (locationTimeZone === "current") {
      locationTimeZone = moment.tz.guess();
    }
    let locationName = locationTimeZone.replace("_", " ").split("/")[1];
    let locationTime = moment().tz(locationTimeZone);
    let locationsElement = document.querySelector("#cities");
    locationsElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${locationName}</h2>
          <div class="date">${locationTime.format("MMMM Do, YYYY")}</div>
      </div>
        <div class="time">${locationTime.format(
          "h:mm:ss"
        )} <small>${locationTime.format("a")}</small></div>
    </div>
    <div class="back-to-all-cities"><a href="/">Back to all cities</a></div>
    `;
  }
}

let locationSelectElement = document.querySelector("#location");
locationSelectElement.addEventListener("change", updateLocation);
