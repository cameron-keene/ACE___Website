import React, {useEffect} from 'react';
import firebase from "./firebase";
import { OfficerInput } from './OfficerInput';
import ProfileOfficer from "../features/ProfileOfficer";
import "./AddOfficersPage.css";

const db = firebase.firestore();

function AddOfficersPage() {
  const [officers, setOfficers] = React.useState([]);


  const [fileUrl, setFileUrl] = React.useState(null);
  const [users, setUsers] = React.useState([]);

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
    setFileUrl( await fileRef.getDownloadURL());
    console.log(fileRef.getDownloadURL());
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const role = e.target.role.value;
    const email = e.target.email.value;
    const linkedin = e.target.linkedin.value;
    if (!username || !fileUrl) {
      return;
    }
    await db.collection("officers").doc(username).set({
      name: username,
      role: role,
      email: email,
      linkedin: linkedin,
      avatar: fileUrl,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const officersCollection = await db.collection("officers").get();
      setUsers(
        officersCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <div className = "modify_page">
      <div className = "insert_feild">
      <h3>Modify Officers</h3>
      <ul className = "current_officers">
          {officers.map(officer =>(
              <OfficerInput officer = {officer}/>
          ))}
      </ul>    

      <h3>Insert New Officer</h3>
      <div className="test_input">
        <div className = "input_form">
          <form onSubmit={onSubmit}>
            <input type="text" name="username" placeholder="Name" />
            <input type="text" name="role" placeholder="Role" />
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="linkedin" placeholder="LinkedIn" />
            <input type="file" onChange={onFileChange} />

            <button className = "submit_button">Submit</button>
          </form>
        </div>


        <div className="about_officers">
                {officers.map(officer =>(
                  <div key = {officer.id}>
                    <ProfileOfficer
                      src={(officer.avatar)}
                      role = {officer.role}
                      name = {officer.name}
                      linkedin = {officer.linkedin}
                      email = {"mailto:" + officer.email}
                    />
                  </div>
                ))}
        </div>
      </div>
      

      </div>
      

      </div>
      
  );
}

export default AddOfficersPage;
