import Maintainable from "@/app/scripts/hierarchy/classes/Maintainable";
import styles from "./floatingboxmodule.module.css";

export default function MaintainableComponent({maintainable} : {maintainable : Maintainable}) {
    return (
        <div className={styles.componentContainer}>
            <h3 className={styles.title}>Name</h3>
            <div className={styles.subcontent}>
                <p>Spaces: 3</p>
                <p>Tasks: 0</p>
                <p>Maintainable Items: 4</p>
                <p>Notes: 5</p>
            </div>
        </div>
    )
}