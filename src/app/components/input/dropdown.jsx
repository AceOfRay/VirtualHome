import styles from "./input.module.css";

export default function DropDown({ text, list, setAttachedModule }) {
    const options = list.map((str) => {
        return <option className={styles.option} value={str}>{str}</option>
    })
    return (
        <div className={styles.fieldContainer}>
            <label className={styles.label} htmlFor="input">{text}</label>
            <select className={styles.dropdown} onSelect={(e) => {setAttachedModule(e.target)} } defaultValue={null} name="input">
                {options}
            </select>
        </div>
    )
}