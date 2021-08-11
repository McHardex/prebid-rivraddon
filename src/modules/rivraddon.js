const api = require("../services/api");

const trackerUrl = "https://tracker.simplaex-code-challenge.com";

const rivraddon = {
  analytics: {
    enableAnalytics: function () {
      console.log(
        "SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics"
      );
    },
    trackPbjsEvent: function async(event) {
      api("POST", trackerUrl, { eventType: event.eventType })
        .then((res) =>
          console.log("Successfully reported events to tracking URL")
        )
        .catch((error) => {
          console.log(
            error.message ||
              `Unable to report event "${event.eventType}" to "${trackerUrl}"`
          );
        });
    },
  },
};

window.rivraddon = rivraddon;

module.exports = rivraddon;
