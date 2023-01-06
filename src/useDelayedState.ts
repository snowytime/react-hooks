import React from "react";

export const useDelayedState = <T>(initial: T, delay: number) => {
	const [state, setState] = React.useState(initial);
	React.useEffect(() => {
		if (initial) {
			setState(initial);
		} else {
			setTimeout(() => {
				setState(initial);
			}, delay);
		}
	}, [delay, initial, state]);
	return [state];
};
