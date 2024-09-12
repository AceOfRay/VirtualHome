'use client'
import { useState } from "react"
import Modal from "../modal/modal";

export default function AddModuleModal<T extends React.ReactNode>({ className, children }: { className: string, children: T }) {
    const [newModuleType, setNewModuleType] = useState("");
    const [attachedToType, setAttachedToType] = useState("");
    const [shown, setShown] = useState(false);

    return (
        <div onClick={() => { setShown(true) }}>
            {children}
            {shown ? (<Modal setShown={setShown}>some text</Modal>) : (<div></div>)}
        </div>
    );
    
}