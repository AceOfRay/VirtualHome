'use client'
import PageContent from "../components/pagecontent/pagecontent"
import handler from "../scripts/hierarchy/classes/UserModuleHandler"

export default function Maintainables({ }) {
    return (
        <PageContent className="content">
            <h3 className="FloatingPageTitle">Your spaces</h3>
            {handler.getModulesAsComponents("maintainables")}
        </PageContent>
    )
}
