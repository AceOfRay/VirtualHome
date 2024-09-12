import Home from "@/app/scripts/hierarchy/classes/Home";
import styles from "./floatingboxmodule.module.css"

export default function HomeComponent({home} : {home : Home}) {

    return (
        <div className={styles.componentContainer}>
            <h3 className={styles.title}>{home.name}</h3>
            <div className={styles.subcontent}>
                <h4>{home.address}</h4>
                <h4>{home.people}</h4>
            </div>
            <div className={styles.subcontent}>
                <p>Spaces: {home.spaces.length}</p>
                <p>Tasks: {home.tasks.length}</p>
                <p>Maintainable Items: {home.maintainables.length}</p>
                <p>Notes: {home.notes.length}</p>
            </div>
        </div>
    )
}