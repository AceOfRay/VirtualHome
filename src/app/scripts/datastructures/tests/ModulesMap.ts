import { DocumentData, DocumentReference, Timestamp } from "firebase/firestore";
import { FirestoreBuilder } from "../../firebase/firestorebuilder";
import Home from "../../hierarchy/classes/Home";
import Space from "../../hierarchy/classes/Space";
import ModulesMap from "../ModuleMap";
import ModuleMetaData from "../ModuleMetaData";
import Maintainable from "../../hierarchy/classes/Maintainable";
import Task from "../../hierarchy/classes/Task";
import Note from "../../hierarchy/classes/Note";
import Module from "../../hierarchy/abstractclasses/Module";

function build() {
    const builder = new FirestoreBuilder()
    
    const basicModules= [
        new Home(new ModuleMetaData({
            moduleType: "home",
            moduleId: "1",
            attachedModuleId: null,
            attachedModuleType: null,
            dateCreated: Timestamp.now(),
            dateDeleted: null,
            deleted: false,
        } as DocumentData)),
        new Space(new ModuleMetaData({
            moduleType: "space",
            moduleId: "2",
            attachedModuleId: "1",
            attachedModuleType: "home",
            dateCreated: Timestamp.now(),
            dateDeleted: null,
            deleted: false,
        } as DocumentData)),
        new Maintainable(new ModuleMetaData({
            moduleType: "maintainable",
            moduleId: "3",
            attachedModuleId: "2",
            attachedModuleType: "space",
            dateCreated: Timestamp.now(),
            dateDeleted: null,
            deleted: false,
        } as DocumentData)),
        new Task(new ModuleMetaData({
            moduleType: "task",
            moduleId: "4",
            attachedModuleId: "3",
            attachedModuleType: "maintainable",
            dateCreated: Timestamp.now(),
            dateDeleted: null,
            deleted: false,
        } as DocumentData)),
        new Note(new ModuleMetaData({
            moduleType: "note",
            moduleId: "5",
            attachedModuleId: "4",
            attachedModuleType: "maintainable",
            dateCreated: Timestamp.now(),
            dateDeleted: null,
            deleted: false,
        } as DocumentData))
        
    ]
    
    basicModules.forEach((module : Module) => {
        builder.addModuleToFirestore(module);
    })
}

build();
// get module index

// add to parent

// put