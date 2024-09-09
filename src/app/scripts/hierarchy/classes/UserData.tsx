import Home from "./Home";
import Space from "./Space";
import Task from "./Task";
import Note from "./Note";
import Data from "./Data"

export default class UserModules {
    homes : Home[];
    spaces : Space[];
    tasks : Task[];
    notes : Note[];
    data: Data[];
    
    constructor(homes: Home[], spaces: Space[], tasks: Task[], notes: Note[], data: Data[]) {
        this.homes = homes;
        this.spaces = spaces;
        this.tasks = tasks;
        this.notes = notes;
        this.data = data;
    }

    
}