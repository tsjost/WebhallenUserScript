// ==UserScript==
// @name         Webhallen
// @namespace    tsjost
// @version      0.1
// @description  Make Webhallen Great Again
// @author       tsjost
// @match        https://www.webhallen.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=webhallen.com
// @grant        GM_addElement
// ==/UserScript==

(function() {
	'use strict'

	const mutationObserver = new MutationObserver((mutationList, observer) => {
		mutationList.forEach(mutation => {
			if (mutation.type == 'childList' && typeof mutation.addedNodes == 'object' && mutation.addedNodes.length > 0) {
				mutation.addedNodes.forEach(node => {
					if (node.nodeType !== Node.ELEMENT_NODE) return

					node.querySelectorAll('img[alt="acheivment-icon-rarity"][title="N/A"]').forEach(img => {
						img.src = "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw1AUhU9TRZGKQzOICGZoneyiIo61CkWoEGqFVh1MXvoHTVqSFBdHwbXg4M9i1cHFWVcHV0EQ/AFxdXFSdJES70sKLWK88Hgf591zeO8+QGhWmG71xAHdsM10MiFlc6tS3ysCGIOIKMIKs2pzspyCb33dUzfVXYxn+ff9WYNa3mJAQCKOs5ppE28Qz2zaNc77xCIrKRrxOfGESRckfuS66vEb56LLAs8UzUx6nlgklopdrHYxK5k68TRxRNMNyheyHmuctzjrlTpr35O/MJQ3Vpa5TmsUSSxiCTIkqKijjApsxGg3SLGQpvOEj3/E9cvkUslVBiPHAqrQobh+8D/4PVurMDXpJYUSQO+L43xEgb5doNVwnO9jx2mdAMFn4Mro+KtNYPaT9EZHixwBQ9vAxXVHU/eAyx1g+KmmmIorBWkJhQLwfkbflAPCt8DAmje39jlOH4AMzSp1AxwcAuNFyl73eXd/99z+7WnP7wepPHK86D+wlAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAuIwAALiMBeKU/dgAAAAd0SU1FB+cBHxQyBXS6RLEAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAACwElEQVRIx82WTUhUURiGn+uMzoyOPzOjZmqB+VMUaQoaIuqiAl1JVNCuaFMh5KZVtGjjLgg3URQUmCXlokgjjKSBlEwxzIZQKzHDsRw1Z5wfr3fubRHC3Hvnx0VC3+6ec7+X55zvO+85Agmirq5OifweHBwU4v2fxD8OYyKy/v5+ANrb2zenlHik20+oJdNGY2NjXNLtI9SSbUgSbvcvlpZXCK2LzP30A2AwCKSajNQ3NJAkCDpS3ZJlWWbA+Y6Oe8+Z8CmE91cSzs5D2deCIIkYPAsYx4fJlELU7EnXEQqRZIqicPLsZcaWZAInzuHfW4ViTNYnhUWsE8NYeu5TXWCiosSG0+nUF2XCNcmYW8TbepXQzqKY+6QYUvAdqkdy5DFyq518hzl6UZ6+cLLedDyuWGQEd5UiHmvhhyeoF9zYkOh6/ZHAwcO6xPTxt9h7bmN1jejmQqUVBNbl6IRKRiYbmTmqBPP8DJbHdznq+4Sl94FOULakxW5swe/H8fAGsn0Hsi2HcIad5O9TVOVbePPFR+j0BX3frSxGFzQaDQx2XmN11cvyby837/ylWQuGGXWL+M+04S+rVFdbDmMZeonNmszikkZQEASyHTayHTaKgZLCDGbmfYx6wngvXiFUUKwTy3r1BOu0i6KaXBZnE7hNWFYY+uojeOq8TixJDJHV14n1wxDN5Q4sJmNi+wqGJALpmawdqFaLrQexP+ogZ26KI1XZZKSlxHebTd9ru9RK1/U+lCSDuoVGBjBNu2iuLcBsMmzdYAGENR+p31yqseTJcXKEFcym3dFzNs9yhM8B4PYE6F00I+cVqpc8N0tLocTnifcqf4x6lrUhVjeyWtukGstyPoMFZ2w/jHDcqKSxQku2qbN9jq0lLdO0iza0ZFuqsqm3m9zebv1EuT12ZyS6l7V7Gots22494b9/2/wBL8UgQ9u11z0AAAAASUVORK5CYII="
					})
				})
			}
		})
	})

	mutationObserver.observe(document, {
		childList: true,
		subtree: true,
	})
})()
