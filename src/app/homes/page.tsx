'use client'
import { DocumentSnapshot } from "firebase/firestore";
import HomeComponent from "../components/home/home";
import PageContent from "../components/pagecontent/pagecontent";
import handler from "../scripts/hierarchy/classes/UserModuleHandler";
import { useEffect } from "react";

export default function Homes() {    
    useEffect(() => {
        const getData = async () => {
            const homes = await handler.modules.homes;

            const homeComponents : React.JSX.Element[] = []

            homes.forEach((m : DocumentSnapshot) => {
                homeComponents.push(
                    <HomeComponent home={m}/>
                )
            })
        }
        getData();
        
    }, [])
    

    return (
        <PageContent className="content">
            <h3>Your Homes</h3>
            {homeComponents}
        </PageContent>
    )
}