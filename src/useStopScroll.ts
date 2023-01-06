import React from "react";
import { useScrollbarPreference } from "./useScrollPreference.js";

/**
 * Ever wanted to stop scrolling?
 * -- oops layout shifts, and other gross things.
 * Well this solves that problem, it handles the scrollbars appropriately,
 * and handles the freezing of the screen.
 * Excellent for use in modals and drawers where we NEED to limit scrolling,
 * and ensure that it works on mobile.
 *
 * Requirements:
 * a. create the following css class
 */

export const useStopScroll = (condition: boolean) => {
	// gets the state of scrollbars existing
	const scrollbars = useScrollbarPreference();
	const disableScroll = () => {
		const scrollTop =
			window.pageYOffset || document.documentElement.scrollTop;
		const scrollLeft =
			window.pageXOffset || document.documentElement.scrollLeft;
		// disable scrolling by overwriting the default scroll behavior
		window.onscroll = function () {
			window.scrollTo(scrollLeft, scrollTop);
		};
	};
	const enableScroll = () => {
		window.onscroll = function () {};
	};
	React.useEffect(() => {
		const body = document.body;
		const isMobile = window.innerWidth < 1000;
		if (condition) {
			if (isMobile) {
				body.classList.add("no-scroll");
			} else {
				disableScroll();
			}
		} else {
			if (isMobile) {
				body.classList.remove("no-scroll");
			} else {
				enableScroll();
			}
		}
	}, [scrollbars, condition]);
	// return the dynamic delayed state
};
