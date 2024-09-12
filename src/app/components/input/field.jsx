import styles from "./input.module.css";

export default function Field({ required, text, placeholder, setValue }) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor="inputbox">{text}</label>
            <input required={required} className={styles.inputBox} type="text" name="inputbox" onChange={(e) => {setValue(e.target.value)}} placeholder={placeholder} />
        </div>
    )
}