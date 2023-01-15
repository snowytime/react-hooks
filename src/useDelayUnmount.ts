import React from "react";

export const useDelayUnmount = (open: boolean, durationMs: number): boolean => {
    const [isMounted, setIsMounted] = React.useState(open);

    if (open && !isMounted) {
        setIsMounted(true);
    }

    React.useEffect(() => {
        if (!open) {
            const timeout = setTimeout(() => setIsMounted(false), durationMs);
            return () => clearTimeout(timeout);
        }
    }, [open, durationMs]);

    return isMounted;
};
