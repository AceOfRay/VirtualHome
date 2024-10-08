import NoteComponent from "@/app/components/boxes/floatingbox/children/notes";
import ModuleMetaData from "../../datastructures/ModuleMetaData";
import Module from "../abstractclasses/Module";

export default class Note extends Module {
    
    constructor(metadata : ModuleMetaData) {
        super(metadata);
    }
    
    attachModules(list: Module[][]): void {
        throw new Error("Notes Are At The Bottom of The Type Tree and Cannot Have Attached Modules");
    }
    addModule(module: Module): void {
        throw new Error("Notes Are At The Bottom of The Type Tree and Cannot Have Attached Modules");
    }

    static asReactComponents(notes: Note[]): React.JSX.Element[] {
        return notes.map((note) => {
            return <NoteComponent note={note}/>
        })
    }
    asReactComponent(): React.JSX.Element {
        throw new Error("Method not implemented.");
    }
}