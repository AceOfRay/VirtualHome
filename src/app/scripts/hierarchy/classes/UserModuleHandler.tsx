import { auth } from "../../firebase/firebase";
import UserModules from "./UserModules";
import { collection, query, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { User } from "firebase/auth";
import Home from "./Home";
import Space from "./Space";
import Maintainable from "./Maintainable";
import Task from "./Task";
import Note from "./Note";
import ErrorComponent from "@/app/components/error/error";


class UserModuleHandler {
    user: User | null;
    userModules: UserModules | undefined;

    constructor () {
        this.user = auth.currentUser;
    }

    async init() {
        this.userModules = await this.loadData();
    }

    async loadData(): Promise<UserModules | undefined>{
        if (this.user) {
            return new UserModules([
                await getDocs(query(collection(firestore, "Users", this.user.uid, "Homes"))),
                await getDocs(query(collection(firestore, "Users", this.user.uid, "Spaces"))),
                await getDocs(query(collection(firestore, "Users", this.user.uid, "Maintainables"))),
                await getDocs(query(collection(firestore, "Users", this.user.uid, "Tasks"))),
                await getDocs(query(collection(firestore, "Users", this.user.uid, "Notes"))),
            ]);
        }
    }

    getModulesAsComponents(type: string, limit:number=0): React.JSX.Element[] | React.JSX.Element | undefined {
        if (this.userModules) {
            switch (type) {
                case "homes":
                    return Home.asReactComponents(this.userModules.modules[UserModules.homeIndex] as Home[]);
                case "spaces":
                    return Space.asReactComponents(this.userModules.modules[UserModules.spaceIndex] as Space[])
                case "maintainables":
                    return Maintainable.asReactComponents(this.userModules.modules[UserModules.maintainableIndex] as Maintainable[])
                case "tasks":
                    return Task.asReactComponents(this.userModules.modules[UserModules.taskIndex] as Task[])
                case "notes":
                    return Note.asReactComponents(this.userModules.modules[UserModules.noteIndex] as Note[])
                default:
                    throw new Error(`Unknown Module Type: ${type} when client requested Modules as TSX Components`);
            }
        } else {
            setTimeout(()=>{
                if (limit > 5) {
                    return <ErrorComponent message="Failed to load Modules As Components"/>
                } else {
                    this.getModulesAsComponents(type, limit + 1)
                }
            }, 1000)            
        }
    }
}
const handler = new UserModuleHandler();
handler.init();
export default handler;