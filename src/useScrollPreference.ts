import React from "react";

export const useScrollbarPreference = () => {
	const [state, setState] = React.useState<null | boolean>(null);
	React.useEffect(() => {
		const windowWidth = window.innerWidth;
		const docWidth = document.body.offsetWidth;
		setState(windowWidth !== docWidth);
	}, []);
	return state;
};
