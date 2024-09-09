import Maintainable from "../interfaces/Maintainable";

export default class Space {
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