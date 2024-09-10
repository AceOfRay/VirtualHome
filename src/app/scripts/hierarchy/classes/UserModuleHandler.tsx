
import { auth } from "../../firebase/firebase";
import Module from "../interfaces/Module";
import UserModules from "./UserModules";
import { collection, query, getDocs, where, QuerySnapshot } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { User } from "firebase/auth";


class UserModuleHandler {
    user: User | null;
    modules: UserModules;

    constructor() {
        this.modules = this.loadData();
        this.user = auth.currentUser;
    }

    loadData(): UserModules {

        userModules: UserModules;
        try {
            const createModule = async () => {
                if (this.user) {
                    const userModules = new UserModules(
                        await getDocs(query(collection(firestore, "Users", this.user.uid, "Homes"))),
                        await getDocs(query(collection(firestore, "Users", this.user.uid, "Spaces"))),
                        await getDocs(query(collection(firestore, "Users", this.user.uid, "Maintainables"))),
                        await getDocs(query(collection(firestore, "Users", this.user.uid, "Tasks"))),
                        await getDocs(query(collection(firestore, "Users", this.user.uid, "Notes"))),

                    );
                    return userModules;
                }
            }
            createModule().then((m) => {
                return m;
            })

        } catch (error) {
            console.error(error);
            console.log("An Error Ocurred Fetching Data From Firebase");
            throw Error("Ray error in UserModuleHandler")
        }
    }

    addModule(m: Module): void {

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

const handler = new UserModuleHandler();
export default handler;