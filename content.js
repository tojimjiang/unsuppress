chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.action == 'load') {
      addUnsuppress();
      sendResponse({ ack: "LOAD" });
    }
    else if (request.action == 'ping') {
      sendResponse({ ack: "PING" });
    }
  }
);


function addUnsuppress() {
  let unsuppressScript = document.createElement('script');
  unsuppressScript.classList = 'unsuppress-extension unsuppress';
  unsuppressScript.text = `
    function unsuppress() {
      // Quantity Regex and Lookup
      let regex = /(More than 10[a-zA-Z ]*?available)|(Limited (quantity|lots) available)/gmi
      let scriptRegex = /(?<=remQty":)[0-9]*(?<!,)/
      let displayedQtyHTML = document.querySelector('.qtyTxt[style]  #qtySubTxt:not(.written)');
      // Test if listing contains more than 1 qty and is "hidden"
      if (displayedQtyHTML && regex.test(displayedQtyHTML.textContent)) {
        // Load script in DOM
        let scriptString = Array.from(document.querySelectorAll('script:not(.unsuppress-extension)')).reduce(function(acc, curr) {
          return acc + curr.text
        }, '')
        let actualQuantity = scriptString.match(scriptRegex);
        displayedQtyHTML.textContent = 'Actually ' +  parseInt(actualQuantity[0]).toLocaleString(undefined, {maximumFractionDigits:0}) + ' available / ' + displayedQtyHTML.textContent;
        displayedQtyHTML.classList.add('written');
      }
      else {
        console.log('did not find qty str')
      }
    }
    setTimeout(unsuppress, 1);`;
  document.body.append(unsuppressScript);
}
