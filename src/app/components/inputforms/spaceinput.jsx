'use client'
import styles from "./inputforms.module.css";
import { use, useState } from "react"
import Field from "../input/field"
import Button from "../input/button"
import VerticalBox from "../boxes/verticalbox/box"
import ModuleMetaData from "@/app/scripts/datastructures/ModuleMetaData"
import Handler, { UserModuleHandler } from "@/app/scripts/hierarchy/classes/UserModuleHandler"
import { Timestamp } from "firebase/firestore"
import DropDown from "../input/dropdown";
import Space from "../../scripts/hierarchy/classes/Space";

export default function SpaceInputForm() {
    const homes = Handler.userModules.modules[UserModules.homeIndex];
    const homeNames = [];
    homes.forEach((home) => {
        homeNames.push(home.name)
    })

    const findId = (name) => {
        homes.forEach((home) => {
            if (home.name === name) {
                return home.metadata.moduleId;
            }
        })
    }

    const [attachedTo, setAttachedTo] = useState("");
    const [name, setName] = useState("");

    const handleClick = () => {
        if (name === "" || attachedTo === "") {
            return;
        }
        const id = findId(attachedTo);
        const s = new Space(
            new ModuleMetaData({
                moduleType: "space",
                moduleId: UserModuleHandler.generateId(),
                attachedModuleId: id,
                attachedModuleType: "home",
                dateCreated: Timestamp.fromDate(new Date(Date.now())),
                dateDeleted: null,
                deleted: false,
            }), name
        )
        Handler.addModuleToFirestore(s);

    }
    return (
        <VerticalBox>
            <h1 className="FloatingPageTitle">Add Space Module</h1>
            <div className={styles.fieldContainer}>
                <Field required={true} text={"Name:"} placeholder={"New Space Name*"} setValue={setName}></Field>
                <DropDown text={"Attach To:"} list={homeNames} setAttachedTo={setAttachedTo}></DropDown>;
                <Button text={"Add Space"} onClick={handleClick}></Button>
            </div>
        </VerticalBox>
    )
}