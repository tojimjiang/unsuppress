unsuppress
===

What is dis?
---
Extension to **un**suppress quantity availability data on the electronic bay. Just add to Chrome and see your browser magically start pulling in quantity availability data like magic! ✨   
_The electronic bay is the e-commerce marketplace accessible at [https://ebay.com](https://ebay.com)._

Installation
---
1. Clone/Download this repo.
    - If you downloaded this repo as a ZIP archive, un-zip it.
2. Open Chrome and navigate to the extension page: chrome://extensions/
    - Enable `Developer mode` in the upper right corner, if you haven't already.
3. Click `Load unpacked` to load an unpacked extension
4. Navigate to this repo/folder on your local machine _and_ select the folder of the repo.
    - You **do not** need to open the actual repo/folder.
5. 🎉 Your done! Its now loaded. Give it a whirl.

Common questions:
---
> How did you do dis?
- Being cheeky and investigating a trail that the website leaves behind for the actual quantity data, as the marketplace does know the actual quantity, but may be suppressed by seller request or algorithm decision.

> Are you selling my personal history, data, identity, etc?
- Nope! We value our privacy, and we expect you to value yours the same. In full transparency, the extension _does_ ask Chrome to treat select pages a bit differently. So when your on the electronic bay marketplace, the extension can look at the page for quantity info and show it to you. Otherwise the extension sees nothing, and there isn't even a real server to handle this extension. The extension lives _entirely_ on your computer, there is **no** telemetry, **no** analytics, **no** tracking.

> How do you make money then?
- We don't. We do this to support people to be able to take some agency in their buying decisions, and to be a small thorn against our corporate overloads. If you ere hiring for a role or want to make a donation, see our dev page to reach out.

Reporting bugs and issues:
---
If you encounter a bug or issue with this extension being unable to extract quantity data for a listing please save the page as an HTML file and attach it to your bug report/issue. You can do this in Chrome by:
1. Right clicking the page. Ensure you are not clicking on any single element, left and right gutters are preferred.
2. Click "Save As..." to save the HTML of the page.
3. Attach this to your bug report.

_It is a feature to *not* load quantity information when the listing is of a single unit/lot._

Issues and Bugs
---
- Not on Chrome web store (at the moment).
- Chromium only (at the moment).
- Relies on polling from background script down to content script to determine when page has loaded enough that the page is "injectable".
