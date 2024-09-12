import Maintainable from "./Maintainable";
import Module from "../abstractclasses/Module";
import HomeComponent from "@/app/components/boxes/floatingbox/children/home";
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

    name: string;
    address: string;
    people: string;
    
    constructor(
        metadata: ModuleMetaData,
        name: string,
        address: string,
        people: string,
    ) {
        super(metadata)
        this.maintainables = [];
        this.spaces = [];
        this.notes = [];
        this.tasks = [];
        this.name = name;
        this.address = address;
        this.people = people;
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

    objectify() : {} {
        return {
            moduleType : this.metadata.moduleType,
            moduleId : this.metadata.moduleId,
            attachedModuleId : this.metadata.attachedModuleId,
            attachedModuleType : this.metadata.attachedModuleType,
            dateCreated : this.metadata.dateCreated,
            dateDeleted : this.metadata.dateDeleted,
            deleted: this.metadata.deleted, 
            name: this.name,
            address: this.address,
            people: this.people,
                
        }
    }
}