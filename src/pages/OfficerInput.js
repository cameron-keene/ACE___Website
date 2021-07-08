import React from "react";
import firebase from "./firebase";


export const OfficerInput = ({officer}) => {
    const [name, setName] = React.useState(officer.name);
    const [role, setRole] = React.useState(officer.role);
    const [email, setEmail] = React.useState(officer.email);
    const [linkedin, setLinkedin] = React.useState(officer.linkedin);
    const [image, setImage] = React.useState(officer.image);

    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection('officers').doc(officer.id).set({...officer, name});
        db.collection('officers').doc(officer.id).set({...officer, role});
        db.collection('officers').doc(officer.id).set({...officer, email});
        db.collection('officers').doc(officer.id).set({...officer, linkedin});
        db.collection('officers').doc(officer.id).set({...officer, image});
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('officers').doc(officer.id).delete();
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
            value = {image} 
            onChange = {(e) => {
                setImage(e.target.value);
            }}
        />
        <button onClick = {onUpdate}>Update</button>
        <button onClick = {onDelete}>Delete</button>
    </>
    );
};