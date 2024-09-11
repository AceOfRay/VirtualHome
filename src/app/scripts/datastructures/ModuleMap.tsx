import Module from "../hierarchy/interfaces/Module";
import ModuleMetaData from "./ModuleMetaData";

export default class ModuleMap {
    map: Map<Module, Module[][]>;

    constructor() {
        this.map = new Map()
    }

    static spaceIndex = 0;
    static maintainableIndex = 1;
    static taskIndex = 2;
    static noteIndex = 3;

    public put(module: Module) {
        const val = this.instantiateMapValue(module);
        this.map.set(module, val)
        this.addToParent(module);
    }

    private addToParent(module : Module) {
        if (module.metadata.moduleType === "home") {
            return;
        }
        const idx = this.getModuleIndex(module);
        this.map.forEach((val, key) => {
            if (key.metadata.moduleId === module.metadata.attachedModuleId) {
                val[idx].push(module);
            }
        })
    }

    private instantiateMapValue(module : Module) : Module[][] {
        const mapValue = [];
        let length: number;
        switch (module.metadata.moduleType) {
            case "home":
                length = 4;
            case "space":
                length = 3;
            case "maintainable":
                length = 2;
            case "task":
                length = 1;
            case "note":
                length = 0;
            default:
                length = 0;
        }
        for (let i = 0; i < length; i++) {
            mapValue.push([]);
        }
        return mapValue;
    }

    private getModuleIndex(module : Module) {
        switch (module.metadata.moduleType) {
            case "space":
                return ModuleMap.spaceIndex;
            case "maintainable":
                return ModuleMap.maintainableIndex;
            case "task":
                return ModuleMap.taskIndex;
            case "note":
                return ModuleMap.noteIndex
            default:
                return -1;
        }
    }
}