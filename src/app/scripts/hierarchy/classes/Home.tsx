import Maintainable from "../interfaces/Maintainable";
import Module from "../interfaces/Module";
import UserModules from "./UserModules";

export default class Home extends Module {
    maintainables: Maintainable[];
    
    constructor(
        maintainables: Maintainable[],
        moduleType: string,
        moduleId: string,
        parentModuleType: string | null,
        parentModuleId: string | null,
        dateCreated: Date,
        dateDeleted: Date | null,
        deleted: boolean
    ) {
        super(moduleType, moduleId, parentModuleType, parentModuleId, dateCreated, dateDeleted, deleted)
        this.maintainables = maintainables;
    }

    getComponentData(): [] {
        
    }
}