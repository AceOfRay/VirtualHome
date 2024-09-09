'use client'
import { useRouter } from "next/navigation";
import {auth} from "../scripts/firebase/firebase";
import Header from "../components/header/header";
import PageContent from "../components/pagecontent/pagecontent";

export default function Homes() {
    const router = useRouter();
    const user = auth.currentUser;
    if (user === null) {
        router.push("/")
    } else {
        return (
            <PageContent className="content">
                <h3>Your Homes</h3>
            </PageContent>
        )
    }
}