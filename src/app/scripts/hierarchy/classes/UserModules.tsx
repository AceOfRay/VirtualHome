import { QuerySnapshot } from "firebase/firestore";

export default class UserModules {
    homes : QuerySnapshot;
    spaces : QuerySnapshot;
    maintainables : QuerySnapshot;
    tasks : QuerySnapshot;
    notes : QuerySnapshot;
    
    constructor(homes: QuerySnapshot, spaces: QuerySnapshot, maintainables: QuerySnapshot, tasks: QuerySnapshot, notes: QuerySnapshot) {
        this.homes = homes;
        this.spaces = spaces;
        this.maintainables = maintainables;
        this.tasks = tasks;
        this.notes = notes;
    }

    
}