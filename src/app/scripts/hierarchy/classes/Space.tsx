import Maintainable from "../interfaces/Maintainable";

class Space {
    maintainables : Maintainable[];
    id : string;

    constructor(id : string) {
        this.id = id;
        this.maintainables = this.queryMaintainables()
    }

    queryMaintainables() : Maintainable[] {
        return [];
    }
}