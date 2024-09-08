'use client'
import { useRouter } from "next/navigation";
import {auth} from "../scripts/firebase/firebase";
import Header from "../components/header/header";

export default function Spaces({}) {
    const router = useRouter();
    const user = auth.currentUser;
    if (user === null) {
        router.push("/")
    } else {
        return (
            <main>
                <Header></Header>                
            </main>
        )
    }
    
}
