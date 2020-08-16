// Manage Ports
let readyToSend = false;
let pingActive = false;


// Ping (to create a working message port)
function ping(tabId, callback) {
  if (!readyToSend && !pingActive) {
    pingActive = true;
    chrome.tabs.sendMessage(tabId, { action: 'ping' }, response => {
      if (chrome.runtime.lastError) {
        // Close current ping session, create a new on 100ms later.
        pingActive = false;
        setTimeout(function () { ping(tabId, callback); }, 1);
      } else {
        // Pinging successfully opened a port.
        readyToSend = true;
        pingActive = false;
        // Process Callbacks (if necessary)
        if (callback) {
          callback(tabId);
        }
      }
    });
  }
}

// Content Script Injection
function requestContactScriptToInject(tabId) {
  if (readyToSend) {
    chrome.tabs.sendMessage(tabId, { action: 'load' }, response => {
      readyToSend = false;
    });
  }
  else {
    ping(tabId, function () { requestContactScriptToInject(tabId); });
  }
}

// Request Listener
chrome.webRequest.onResponseStarted.addListener((details) => {
  requestContactScriptToInject(details.tabId);
}, { urls: ["https://*.ebay.com/itm/*"] });
