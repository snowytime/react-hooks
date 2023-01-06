import React from "react";

/**
Ever hated managing timeouts in react? Well I do too.
Here is a hook I created that takes care of managing timeouts
in cases where the timeout WILL be changing.

A great use case is a search for a menu that resets the search
after a set time of inactivity. Using this hook and the returns,
you can easily make sure that the timeout is erased between renders
and is accessible in between renders to make sure that action does take
place after that activity.

Sample:
Within a useEffect, that is responding to your search state:

clear(timeout);
if (!search) return;
// we set a timeout
timeout(() => {
    setSearch("");
}, 1000);

It will first make sure to erase the current timeout to reset the state,
then sets the timeout to the new timeout.

note that this hook returns the actual current timeout (which you can directly interact with)
as well as a helper setter function that is just a wrapper for timeout.current = setTimeout(fn, delay)
you can use either one of these functions to set the timeout effectively
*/

type Timeout = ReturnType<typeof setTimeout>;
export const useTimeout = () => {
	const timeout = React.useRef<Timeout | null>(null);
	const clear = (t: React.MutableRefObject<Timeout | null>) =>
		t.current ? clearTimeout(t.current) : null;
	const timeoutSetter = (cb: () => void, duration: number) => {
		timeout.current = setTimeout(cb, duration);
	};
	return { clear, timeout, timeoutSetter };
};
