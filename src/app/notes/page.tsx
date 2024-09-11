'use client'
import PageContent from "../components/pagecontent/pagecontent";
import handler from "../scripts/hierarchy/classes/UserModuleHandler";

export default function Notes() {
    return (
        <PageContent className="content">
            <h3 className="FloatingPageTitle">Your Notes</h3>
            {handler.getModulesAsComponents("notes")}
        </PageContent >
    )
}
