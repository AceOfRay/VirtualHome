import { doc, QuerySnapshot } from "firebase/firestore";
import Home from "./Home";
import Task from "./Task";
import Space from "./Space";
import Note from "./Note";
import Maintainable from "./Maintainable";
import ModuleMap from "../../datastructures/ModuleMap";
import ModuleMetaData from "../../datastructures/ModuleMetaData";
import Module from "../abstractclasses/Module";

export default class UserModules {
    snapshots: QuerySnapshot[];
    modulesStructure: ModuleMap;
    modules: Module[][];

    constructor(snapshots: QuerySnapshot[]) {
        this.snapshots = snapshots;
        this.modulesStructure = this.structureSnapshots();
        this.modules = this.populateModules();
    }

    static homeIndex = 0;
    static spaceIndex = 1;
    static maintainableIndex = 2;
    static taskIndex = 3;
    static noteIndex = 4;

    private structureSnapshots(): ModuleMap {
        const map = new ModuleMap()

        this.snapshots.forEach((snapshot: QuerySnapshot) => {
            snapshot.forEach((doc) => {
                const metadata = new ModuleMetaData(doc.data())
                switch (metadata.moduleType) {
                    case "home":
                        map.put(new Home(metadata));
                    case "space":
                        map.put(new Space(metadata));
                    case "maintainable":
                        map.put(new Maintainable(metadata))
                    case "task":
                        map.put(new Task(metadata));
                    case "note":
                        map.put(new Note(metadata))
                }

            })
        })

        return map;
    }

    private populateModules(): Module[][] {
        const modules : Module[][] = [[],[],[],[],[]]
        this.modulesStructure.map.forEach((attachedModules, m) => {
            m.attachModules(attachedModules);
            switch (m.metadata.moduleType) {
                case "home":
                    modules[UserModules.homeIndex].push(m)
                case "space":
                    modules[UserModules.spaceIndex].push(m)
                case "maintainable":
                    modules[UserModules.maintainableIndex].push(m)
                case "task":
                    modules[UserModules.taskIndex].push(m)
                case "note":
                    modules[UserModules.noteIndex].push(m)
            }
        })
        return modules;
    }



}