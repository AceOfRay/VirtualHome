import Link from "next/link"
import Image from "next/image"
import accountIcon from "../../assets/icons/account-icon.png"

import styles from "./header.module.css"

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.title}>Virtual Home</h1>
            <Link href={"/account"}>
                <Image src={accountIcon} width={30} height={30} alt="me"></Image>
            </Link>
        </div>
    )
}