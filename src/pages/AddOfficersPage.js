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


  React.useEffect( () => {
      const db = firebase.firestore();
      return db.collection('officers').onSnapshot((snapshot) => {
        const officersData = [];
        snapshot.forEach(doc => officersData.push({ ...doc.data(), id: doc.id }));
        setOfficers(officersData);
      });
  }, []);
  
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
        <input type = "file" name = "image" value = {setNewOfficerImage} onChange = {(e) => setNewOfficerImage(e.target.value)}/>

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
            <ProfileOfficer
              src={test_img}
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
