import Link from "next/link"
import Image from "next/image"
import accountIcon from "../../assets/icons/account-icon.png"
import favicon from "../../favicon.ico";
import HorizontalBox from "../horizontalbox/box";

import styles from "./header.module.css"

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <HorizontalBox className={styles.iconTitle}>
                <Image src={favicon} width={60} height={60} alt="NextLogo"></Image>
                <h1 className={styles.title}>Virtual Home</h1>
               
            </HorizontalBox>
            <HorizontalBox className={styles.headerLinks}>
                <Link className={styles.navLink} href={"/homes"}>Homes</Link>
                <Link className={styles.navLink} href={"/spaces"}>Spaces</Link>                
                <Link className={styles.navLink} href={"/tasks"}>Tasks</Link>
                <Link className={styles.navLink} href={"/notes"}>Notes</Link>
                <Link className={styles.navLink} href={"/data"}>Data</Link>
            </HorizontalBox>
            <Link href={"/account"}>
                <Image src={accountIcon} width={30} height={30} alt="me"></Image>
            </Link>
        </div>
    )
}