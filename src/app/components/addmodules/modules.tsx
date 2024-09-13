import VerticalBox from "../boxes/verticalbox/box"
import Link from "next/link"
import styles from "./addmodules.module.css"
import Modal from "../modal/modal"
import Field from "../input/field"
import DropDown from "../input/dropdown";
import Button from "../input/button";
import HomeInputForm from "../inputforms/homeinput"
import SpaceInputForm from "../inputforms/spaceinput"


export default function AddModules() {
    const list = [
        "None",
        "Home 1",
        "Home 2",
        "Space 1",
    ]

    const setAttachedModule = (value : string) => {
        console.log(value);
    }

    const onClick = () => {
        console.log('clicked');
    }

    return (
        <VerticalBox className={styles.addContainer}>
            <h4 className={styles.containerTitle}>Add New Modules</h4>
            <Modal text="Home"><HomeInputForm/></Modal>
            <Modal text="Space"><SpaceInputForm/></Modal>
            <Modal text="Maintainable"><VerticalBox className=""><Button onClick={onClick} text={"Add Maintainable"}></Button></VerticalBox></Modal>
            <Modal text="Task"><VerticalBox children={undefined} className=""></VerticalBox></Modal>
            <Modal text="Note"><VerticalBox children={undefined} className=""></VerticalBox></Modal>
            
        </VerticalBox>
    )
}