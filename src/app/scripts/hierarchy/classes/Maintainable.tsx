import ModuleMetaData from "../../datastructures/ModuleMetaData";
import Module from "../abstractclasses/Module";
import Note from "./Note";
import Task from "./Task";
import ModulesMap from "../../datastructures/ModuleMap";
import MaintainableComponent from "@/app/components/boxes/floatingbox/children/maintainables";

export default class Maintainable extends Module {
    notes: Note[];
    tasks: Task[];
    
    constructor(metadata : ModuleMetaData) {
        super(metadata);
        this.notes = [];
        this.tasks = [];
    }
    
    attachModules(list: Module[][]): void {
        list[ModulesMap.taskIndex].forEach((task) => {
            this.tasks.push(task as Task)
        });
        list[ModulesMap.noteIndex].forEach((note) => {
            this.notes.push(note as Note)
        })
    }
    addModule(module: Module): void {
        throw new Error("Method not implemented.");
    }

    static asReactComponents(maintainables: Maintainable[]): React.JSX.Element[] {
        return maintainables.map((maintainable) => {
            return <MaintainableComponent maintainable={maintainable}/>
        })
    }

    asReactComponent(): React.JSX.Element {
        return <MaintainableComponent maintainable={this}/>;
    }
}