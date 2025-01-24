// ads.js - Google AdSense Advertisement Management Script

// Step 1: Load Google AdSense Script Dynamically
(function () {
    const adsenseScript = document.createElement("script");
    adsenseScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    adsenseScript.async = true;
    document.head.appendChild(adsenseScript);
})();

// Step 2: Function to Initialize and Display an AdSense Ad
function displayAd(containerId, adSlotId) {
    const container = document.getElementById(containerId);

    if (container) {
        // Create an AdSense ad element
        const ad = document.createElement("ins");
        ad.className = "adsbygoogle";
        ad.style.display = "block";
        ad.setAttribute("data-ad-client", "ca-pub-XXXXXXXXXXXXXXX"); // Replace with your AdSense Publisher ID
        ad.setAttribute("data-ad-slot", adSlotId); // Replace with your Ad Slot ID

        // Append the ad to the container
        container.appendChild(ad);

        // Initialize AdSense for this ad
        if (typeof adsbygoogle !== "undefined") {
            (adsbygoogle = window.adsbygoogle || []).push({});
        } else {
            console.warn("Google AdSense script is not loaded yet.");
        }
    } else {
        console.warn(`Ad container with ID "${containerId}" not found.`);
    }
}

// Step 3: Example Usage
document.addEventListener("DOMContentLoaded", () => {
    // Replace 'ad-container' with the ID of your ad container in HTML
    // Replace '1234567890' with your actual AdSense Ad Slot ID
    displayAd("ad-container", "1234567890");
});
