import VerticalBox from "../verticalbox/box"
import Link from "next/link"
import styles from "./addmodules.module.css"
import AddModuleModal from "./addModal"
export default function AddModules() {
    return (
        <VerticalBox className={styles.addContainer}>
            <h4 className={styles.containerTitle}>Add New Modules</h4>
            <AddModuleModal className={styles.addLink}>Home</AddModuleModal>
            <AddModuleModal className={styles.addLink}>Spaces</AddModuleModal>
            <AddModuleModal className={styles.addLink}>Maintainables</AddModuleModal>
            <AddModuleModal className={styles.addLink}>Tasks</AddModuleModal>
            <AddModuleModal className={styles.addLink}>Notes</AddModuleModal>
            
        </VerticalBox>
    )
}