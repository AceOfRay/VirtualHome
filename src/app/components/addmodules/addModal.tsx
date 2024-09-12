import { useState } from "react"
import styles from "./addmodules.module.css"

export default function AddModuleModal<T extends React.ReactNode>({className, children} : {className : string, children : T}) {
    const [newModuleType, setNewModuleType] = useState("");
    const [attachedToType, setAttachedToType] = useState("");
    const [shown, setShown] = useState(false);
    return shown ? (
        <div className={styles.expandedModal}>
            
        </div>
    ) : (
        <div className={styles.reducedModal} onClick={() => {setShown(true)}}>
            {children}
        </div>
    )
}