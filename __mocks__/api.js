const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  readyState: 4,
  setRequestHeader: jest.fn(),
  onreadystatechange: jest.fn(),
  onerror: jest.fn(),
  responseText: "Event reported successfully",
};

window.XMLHttpRequest = jest.fn(() => mockXHR);

module.exports = mockXHR;
