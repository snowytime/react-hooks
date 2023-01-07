import React from "react";

/*
Basically the same thing as a useEffect but executes the effect only after the initial render / mount
*/

export const useUpdate = (effect: Function, deps: Array<any> = []) => {
	const mount = React.useRef(true);
	React.useEffect(() => {
		if (mount.current) {
			mount.current = false;
			return;
		}
		effect();
	}, deps);
};
