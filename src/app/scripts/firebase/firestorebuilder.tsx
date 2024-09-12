import { setDoc, doc } from "firebase/firestore";
import { firestore, auth } from "./firebase";
import Module from "../hierarchy/abstractclasses/Module";
import { User } from "firebase/auth";

export class FirestoreBuilder {
    user : User | null;
    constructor () {
        this.user = auth.currentUser
    }

    async addModuleToFirestore(module : Module) {
        const path = this.createPath(module);
        await setDoc(doc(firestore, path[0], path[1], path[2]), module.metadata) 
    }

    createPath(module : Module) : string[] {
        let collection : string = this.getCollection(module);
        
        if (this.user) {
            return ["Users", "testUser", collection]
        } else {
            throw new Error("Error when creating path: user is undefined")
        }
    }

    getCollection(module : Module) : string {
        switch (module.metadata.moduleType) {
            case "home":
                return "Homes";
            case "space":
                return "Spaces";
            case "maintainable":
                return "Maintainables";
            case "task":
                return "Tasks";
            case "note":
                return "Notes"
            default:
                throw new Error("Invalid module type")
        }
    }
}