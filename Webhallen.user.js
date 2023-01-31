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
				})
			}
		})
	})

	mutationObserver.observe(document, {
		childList: true,
		subtree: true,
	})
})()
