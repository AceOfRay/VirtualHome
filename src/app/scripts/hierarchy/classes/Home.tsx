import Maintainable from "./Maintainable";
import Module from "../abstractclasses/Module";
import HomeComponent from "@/app/components/floatingbox/children/home";
import Task from "./Task";
import Note from "./Note";
import Space from "./Space";
import ModuleMetaData from "../../datastructures/ModuleMetaData";
import ModulesMap from "../../datastructures/ModuleMap";

export default class Home extends Module {
    maintainables: Maintainable[];
    spaces: Space[];
    notes: Note[];
    tasks: Task[];
    
    constructor(
        metadata: ModuleMetaData,
    ) {
        super(metadata)
        this.maintainables = [];
        this.spaces = [];
        this.notes = [];
        this.tasks = [];
    }
    
    attachModules(list: Module[][]): void {
        list[ModulesMap.spaceIndex].forEach((space) => {
            this.spaces.push(space as Space)
        });
        list[ModulesMap.maintainableIndex].forEach((maintainable) => {
            this.maintainables.push(maintainable as Maintainable)
        });
        list[ModulesMap.taskIndex].forEach((task) => {
            this.tasks.push(task as Task)
        });
        list[ModulesMap.noteIndex].forEach((note) => {
            this.notes.push(note as Note)
        })
    }
    
    addModule(module: Module) {

    }

    static asReactComponents(homes: Home[]): React.JSX.Element[] {
        return homes.map((home) => {
            return <HomeComponent home={home}/>
        })
    }

    asReactComponent(): React.JSX.Element {
        return <HomeComponent home={this}/>
    }

}