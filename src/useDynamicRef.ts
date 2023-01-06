import React from "react";
export const useTrueRef = <T>(initial?: T) => {
	const [state, _setState] = React.useState<any>(initial ?? null);
	const setState = React.useMemo(() => _setState, []);
	return [state, setState];
};
