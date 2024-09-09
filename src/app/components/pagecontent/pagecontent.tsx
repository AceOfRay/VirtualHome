'use client'
import styles from "./pagecontent.module.css";
import AddModules from "../addmodules/modules";
import FloatingBox from "../floatingbox/box";
import Header from "../header/header";
import { useRouter } from "next/navigation";
import { auth } from "@/app/scripts/firebase/firebase";

export default function PageContent<T extends React.ReactNode>({ children, className }: { children: T, className: string }) {
    const router = useRouter();
    const user = auth.currentUser;
    if (user === null) {
        router.push("/")
    } else {
        
        return (
            <main>
                <Header></Header>
                <div className={className} id={styles.pageContainer}>
                    <AddModules></AddModules>
                    <FloatingBox className={styles.spacesContainer}>
                        {children}
                    </FloatingBox>
                </div>
            </main>

        )
    }
}