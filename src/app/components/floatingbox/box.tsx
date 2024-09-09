import styles from "./box.module.css";

export default function FloatingBox<T extends React.ReactNode>({children, className} : {children : T, className : string}) {
    return(
        <div className={className} id={styles.floatingbox}>
            {children}
        </div>
    )
}