import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useRef, useEffect } from "react";

export default function Modal({ children, open }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialog} className={classes.modal}>
            {children}
        </dialog>,
        document.getElementById("modal")
    );
}
