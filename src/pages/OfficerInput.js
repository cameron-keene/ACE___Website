import React from "react";
import firebase from "./firebase";


export const OfficerInput = ({officer}) => {
    const [name, setName] = React.useState(officer.name);
    const [role, setRole] = React.useState(officer.role);
    const [email, setEmail] = React.useState(officer.email);
    const [linkedin, setLinkedin] = React.useState(officer.linkedin);
    const [image, setImage] = React.useState(officer.image);
    const [fileURL, setFileURL] = React.useState(officer.fileURL);

    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection('officers').doc(officer.id).set({...officer, name, role, email, linkedin, image});
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('officers').doc(officer.id).delete();
    }
    // for file upload
    const onFileChange = (e) =>{
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            console.log("Uploaded file", file.name);
        })

    }

    return (<>
        <input 
            value = {name} 
            onChange = {(e) => {
                setName(e.target.value);
            }}
        />
        <input 
            value = {role} 
            onChange = {(e) => {
                setRole(e.target.value);
            }}
        />
        <input 
            value = {email} 
            onChange = {(e) => {
                setEmail(e.target.value);
            }}
        />
        <input 
            value = {linkedin} 
            onChange = {(e) => {
                setLinkedin(e.target.value);
            }}
        />
        <input 
            // type = "file" does not work ???
            value = {fileURL} 
            onChange = {onFileChange}
        />
        <button onClick = {onUpdate}>Update</button>
        <button onClick = {onDelete}>Delete</button>
    </>
    );
};