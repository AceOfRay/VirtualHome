import ModuleMetaData from "../../datastructures/ModuleMetaData";
import Module from "../abstractclasses/Module";
import Note from "./Note";
import ModuleMap from "../../datastructures/ModuleMap";
import Home from "./Home";
import TasksComponent from "@/app/components/boxes/floatingbox/children/tasks";

export default class Task extends Module {
    notes: Note[];
    
    constructor(metadata : ModuleMetaData) {
        super(metadata);
        this.notes = [];
    }
    
    attachModules(list: Module[][]): void {
        
        list[ModuleMap.noteIndex].forEach((note) => {
            this.notes.push(note as Note)
        })
    }
    addModule(module: Module): void {
        throw new Error("Method not implemented.");
    }

    static asReactComponents(tasks: Task[]): React.JSX.Element[] {
        return tasks.map((task) => {
            return <TasksComponent task={task}/>
        })
    }

    asReactComponent(): React.JSX.Element {
        return <TasksComponent task={this}/>
    }
}