import Home from "@/app/scripts/hierarchy/classes/Home";

export default function HomeComponent({home} : {home : Home}) {
    

    return (
        <div>
            <h1>home.name</h1>
            <div className="subcontent">
                <p>Spaces: {home.spaces.length}</p>
                <p>Tasks: {home.tasks.length}</p>
                <p>Maintainable Items: {home.maintainables.length}</p>
                <p>Notes: {home.notes.length}</p>
            </div>
        </div>
    )
}