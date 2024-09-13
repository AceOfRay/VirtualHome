'use client'
import styles from "./inputforms.module.css"
import { useState } from "react"
import Field from "../input/field"
import Button from "../input/button"
import VerticalBox from "../boxes/verticalbox/box"
import Home from "@/app/scripts/hierarchy/classes/Home"
import ModuleMetaData from "@/app/scripts/datastructures/ModuleMetaData"
import Handler, { UserModuleHandler } from "@/app/scripts/hierarchy/classes/UserModuleHandler"
import { Timestamp } from "firebase/firestore"

export default function HomeInputForm() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [people, setPeople] = useState("");

    const handleClick = () => {
        if (name === "") {
            return;
        } else {
            const h = new Home(
                new ModuleMetaData({
                    moduleType: "home",
                    moduleId: UserModuleHandler.generateId(),
                    attachedModuleId: null,
                    attachedModuleType: null,
                    dateCreated: Timestamp.fromDate(new Date(Date.now())),
                    dateDeleted: null,
                    deleted: false,
                }), name, address, people
            )
            Handler.addModuleToFirestore(h)
        }
    }

    return (
        <VerticalBox>
            <h1 className="FloatingPageTitle">Add Home Module</h1>
            <div className={styles.fieldContainer}>
            <Field required={true} text={"Name:"} placeholder={"New Home Name*"} setValue={setName}></Field>
            <Field required={false} text={"Address:"} placeholder={"optional"} setValue={setAddress}></Field>
            <Field required={false} text={"People:"} placeholder={"optional"} setValue={setPeople}></Field>
            
                <Button text={"Add Home"} onClick={handleClick}></Button>
            </div>
        </VerticalBox>
    )
}