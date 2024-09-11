import ModuleMetaData from "../../datastructures/ModuleMetaData";
import Maintainable from "./Maintainable";
import Module from "../abstractclasses/Module";
import Note from "./Note";
import Task from "./Task";
import ModuleMap from "../../datastructures/ModuleMap";
import SpaceComponent from "@/app/components/floatingbox/children/spaces";

export default class Space extends Module {
    maintainables : Maintainable[];
    notes: Note[];
    tasks: Task[];
    
    constructor(metadata : ModuleMetaData) {
        super(metadata);
        this.maintainables = [];
        this.notes = [];
        this.tasks = [];
    }
    
    attachModules(list: Module[][]): void {
        
        list[ModuleMap.maintainableIndex].forEach((maintainable) => {
            this.maintainables.push(maintainable as Maintainable)
        });
        list[ModuleMap.taskIndex].forEach((task) => {
            this.tasks.push(task as Task)
        });
        list[ModuleMap.noteIndex].forEach((note) => {
            this.notes.push(note as Note)
        })
    }
    addModule(module: Module): void {
        throw new Error("Method not implemented.");
    }
    queryMaintainables() : Maintainable[] {
        return [];
    }

    static asReactComponents(spaces: Space[]): React.JSX.Element[] {
        return spaces.map((space) => {
            return <SpaceComponent space={space}/>
        })
    }

    asReactComponent(): React.JSX.Element {
        return <SpaceComponent space={this}/>;
    }
}