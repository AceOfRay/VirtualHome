import styles from "./box.module.css";

export default function VerticalBox<T extends React.ReactNode>({children, className} : {children : T, className : string}) {
    return (
        <div id={styles.vBoxContainer} className={className}>
            {children}
        </div>
    )
}