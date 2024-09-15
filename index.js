document.addEventListener("DOMContentLoaded", function () {
    let settings = document.getElementById("select-settings");
    let buttonSettings = document.getElementById("settings-container");
    let returnConsent = document.getElementById("return")

    settings.style.display = "none";
    buttonSettings.style.display = "flex"; //!
    returnConsent.style.display = "none"


    buttonSettings.addEventListener("click", (event) => {
        console.log("Activated 1");
        settings.style.display = "block";
        returnConsent.style.display = "flex"
        buttonSettings.style.display = "none"
    });
    returnConsent.addEventListener("click", (event) => {
        console.log("Activated 2");
        settings.style.display = "none";
        returnConsent.style.display = "none"
        buttonSettings.style.display = "flex"
    })

    document.body.style.backgroundColor = "black";
});