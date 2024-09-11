'use client'
import PageContent from "../components/pagecontent/pagecontent";
import handler from "../scripts/hierarchy/classes/UserModuleHandler";

export default function Homes() {
    
    return (
        <PageContent className="content">
            <h3 className="FloatingPageTitle">Your Homes</h3>
            {handler.getModulesAsComponents("homes")}
        </PageContent>
    )
}