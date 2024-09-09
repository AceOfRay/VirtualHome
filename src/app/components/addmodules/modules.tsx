import VerticalBox from "../verticalbox/box"
import Link from "next/link"
import styles from "./addmodules.module.css"
export default function AddModules() {
    return (
        <VerticalBox className={styles.addContainer}>
            <h4 className={styles.containerTitle}>Add New Modules</h4>
            <Link className={styles.addLink} href={"/add"}>Home</Link>
            <Link className={styles.addLink} href={"/add"}>Space</Link>
            <Link className={styles.addLink} href={"/add"}>Maintainable</Link>
            <Link className={styles.addLink} href={"/add"}>Task</Link>
            <Link className={styles.addLink} href={"/add"}>Note</Link>
        </VerticalBox>
    )
}