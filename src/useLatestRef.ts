import React from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect.js";

export const useLatestRef = <T>(value: T) => {
    const ref = React.useRef(value);
    useIsomorphicLayoutEffect(() => {
        ref.current = value;
    });
    return ref;
};
