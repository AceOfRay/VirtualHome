import styles from "./input.module.css";

export default function Button({ onClick, text }) {
    return (
        <button className={styles.button} onClick={onClick}>{text}</button>
    )
}