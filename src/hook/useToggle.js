import React from "react";



export const useToggle = (id,name) => {
    const [isOpen, setIsopen] = React.useState(false);
    const open = () => {
        setIsopen(true)
    };
    const close = () => setIsopen(false);
    const toggle = () => setIsopen(!isOpen);

    return { isOpen, close, open, toggle };
};