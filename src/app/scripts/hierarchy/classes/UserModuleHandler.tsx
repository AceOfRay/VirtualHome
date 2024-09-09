import { auth } from "../../firebase/firebase";
import Module from "../interfaces/Module";
import UserModules from "./UserData";

class UserModuleHandler {
    modules : UserModules;

    constructor() {
        this.modules = this.loadData();
    }

    loadData() : UserModules {
        return new UserModules([], [], [], [], []);
    }

    addModule(m: Module) : void {
        
    }

}

// const handler : UserModuleHandler = new UserModuleHandler()
// userData : UserModules = handler.modules;

/* 
Scenario: adding a new task to a Space
client code:
    handler.addModule(module)

Scenario: creating a recurring task
    handler.addModule(module)

Scenario: adding a new space to a home
    handler.addModule(module)

Scenario: removing a task from a home
    handler.removeModule(module) // sets the deleted field to true for the handler and all modules w/ that id as a parent. (probably recursive) 
*/
