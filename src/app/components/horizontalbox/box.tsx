import styles from "./box.module.css";

export default function HorizontalBox<T extends React.ReactNode>({children, className} : {children : T, className : string}) {
    return (
        <div id={styles.hBoxContainer} className={className}>
            {children}
        </div>
    )
}