import React from 'react';
import firebase from "./firebase";
import { OfficerInput } from './OfficerInput';
import ProfileOfficer from "../features/ProfileOfficer";
import test_img from "../imgs/kayton.jpeg";
import "./AddOfficersPage.css";


function AddOfficersPage() {
  const [officers, setOfficers] = React.useState([]);
  const [newOfficerName, setNewOfficerName] = React.useState([]);
  const [newOfficerRole, setNewOfficerRole] = React.useState([]);
  const [newOfficerEmail, setNewOfficerEmail] = React.useState([]);
  const [newOfficerLinkedin, setNewOfficerLinkedin] = React.useState([]);
  const [newOfficerImage, setNewOfficerImage] = React.useState([]);
  const [fileURL, setFileURL] = React.useState([]);


  React.useEffect( () => {
      const db = firebase.firestore();
      return db.collection('officers').onSnapshot((snapshot) => {
        const officersData = [];
        snapshot.forEach(doc => officersData.push({ ...doc.data(), id: doc.id }));
        setOfficers(officersData);
      });
  }, []);

  const onFileChange = async (e) =>{
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setFileURL( await fileRef.getDownloadURL());
    console.log(fileRef.getDownloadURL());
  }
  
  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('officers').add({name: newOfficerName, role: newOfficerRole, email: newOfficerEmail, linkedin: newOfficerLinkedin, image: newOfficerImage });
    
  }
  



  return (
    <div className = "insert_feild">
        <h3>Modify Officers</h3>
      <ul>
        <input name = "name" value = {newOfficerName} onChange = {(e) => setNewOfficerName(e.target.value)}/>
        <input name = "role" value = {newOfficerRole} onChange = {(e) => setNewOfficerRole(e.target.value)}/>
        <input name = "email" value = {newOfficerEmail} onChange = {(e) => setNewOfficerEmail(e.target.value)}/>
        <input name = "linkedin" value = {newOfficerLinkedin} onChange = {(e) => setNewOfficerLinkedin(e.target.value)}/>
        <input type = "file" name = "image" value = {setNewOfficerImage} onChange = {onFileChange}/>

        <button onClick = {onCreate}>Add Officer</button>
        {officers.map(officer =>(
          <li key = {officer.id}>
            <OfficerInput officer = {officer}/>
          </li>
        ))}
    </ul>    

    <h3>Officers</h3>
    
      <div className="about_officers">
        {officers.map(officer =>(
          <div key = {officer.id}>
            <a>{officer.role + ".jpg"}</a>
            <ProfileOfficer
              src={(officer.image)}
              title = {officer.role}
              name = {officer.name}
              linkedin = {officer.linkedin}
              github = {officer.github}
            />
          </div>
        ))}
      </div>

    </div>
    

  );
}

export default AddOfficersPage;
