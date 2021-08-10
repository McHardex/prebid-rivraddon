const API =  require('../services/api');

var trackerUrl = 'https://tracker.simplaex-code-challenge.com';

var rivraddon = {
  analytics: {
    enableAnalytics: function () {
      console.log('SIMPLAEX CODE CHALLENGE LOG rivraddon analytics.enableAnalytics');
    },
    trackPbjsEvent: function(event) {
      API('POST', trackerUrl, {eventType: event.eventType})
    }
  }
}

window.rivraddon = rivraddon;

module.exports = rivraddon;
