import styles from "./error.module.css"

export default function ErrorComponent({message} : {message : string}){
    return (
        <div className={styles.errorContainer}>{message}</div>
    )
}