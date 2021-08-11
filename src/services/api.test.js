const api = require("./api");

const mockXHR = require("../../__mocks__/api");

const trackerUrl = "https://tracker.simplaex-code-challenge.com";

const payload = { eventType: "bidding" };

describe("XHR HTTP REQUEST", () => {
  it("should make XHR request with the correct parameters", () => {
    api("POST", trackerUrl, payload);
    expect(mockXHR.open).toBeCalledWith("POST", trackerUrl, true);
    expect(mockXHR.setRequestHeader).toBeCalledWith(
      "Content-Type",
      "application/json"
    );
    expect(mockXHR.send).toBeCalledWith(JSON.stringify(payload));
  });

  it("should catch API error", () => {
    mockXHR.responseText = "An error occured";
    api("POST", trackerUrl, payload)
      .then((res) => res)
      .catch((error) => {
        expect(error.message).toEqual("An error occured");
      });

    mockXHR.onerror();
  });
});
