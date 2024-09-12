'use client'
import { Dispatch, SetStateAction } from "react";
import styles from "./modal.module.css";

export default function Modal<T extends React.ReactNode>({ children, setShown }: { children: T, setShown: Dispatch<SetStateAction<boolean>> }) {

return (
    <div className={styles.modalContainer} onClick={() => {setShown(false)}}>
    <div className={styles.modalContent}>
        {children}
    </div>
    </div>
);
}