import React, {useEffect} from 'react';
import firebase from "./firebase";
import { OfficerInput } from './OfficerInput';
import ProfileOfficer from "../features/ProfileOfficer";
import "./AddOfficersPage.css";

const db = firebase.firestore();

function AddOfficersPage() {
  const [officers, setOfficers] = React.useState([]);
  // const [newOfficerName, setNewOfficerName] = React.useState([]);
  // const [newOfficerRole, setNewOfficerRole] = React.useState([]);
  // const [newOfficerEmail, setNewOfficerEmail] = React.useState([]);
  // const [newOfficerLinkedin, setNewOfficerLinkedin] = React.useState([]);
  // const [newOfficerImage, setNewOfficerImage] = React.useState([]);


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

  
  // const onCreate = async (e) => {
  //   // try{
  //   //   const file = e.target.files[0];
  //   //   const storageRef = firebase.storage().ref();
  //   //   const fileRef = storageRef.child(file.name);
  //   //   await fileRef.put(file);
  //   //   setFileURL( await fileRef.getDownloadURL());
  //   //   console.log(fileRef.getDownloadURL());
  //   // }
  //   // catch(err){
  //   //   console.log(err);
  //   // }
    
  //   const db = firebase.firestore();
  //   db.collection('officers').add({name: newOfficerName, role: newOfficerRole, email: newOfficerEmail, linkedin: newOfficerLinkedin, image: newOfficerImage });
    
  // }
  



  return (
    <div className = "insert_feild">
      <h3>Modify Officers</h3>
      <ul>
        {/* <input name = "name" value = {newOfficerName} onChange = {(e) => setNewOfficerName(e.target.value)}/>
        <input name = "role" value = {newOfficerRole} onChange = {(e) => setNewOfficerRole(e.target.value)}/>
        <input name = "email" value = {newOfficerEmail} onChange = {(e) => setNewOfficerEmail(e.target.value)}/>
        <input name = "linkedin" value = {newOfficerLinkedin} onChange = {(e) => setNewOfficerLinkedin(e.target.value)}/>
        <input type = "file" name = "image" value = {setNewOfficerImage} onChange = {(e) => setFileUrl(e.target.value)}/>

        <button onClick = {onCreate}>Add Officer</button> */}
        {officers.map(officer =>(
          <li key = {officer.id}>
            <OfficerInput officer = {officer}/>
          </li>
        ))}
    </ul>    

    {/* <h3>Officers</h3>
    
      <div className="about_officers">
        {officers.map(officer =>(
          <div key = {officer.id}>
            <a>{officer.role + ".jpg"}</a>
            <ProfileOfficer
              src={(officer.image)}
              title = {officer.role}
              name = {officer.name}
              linkedin = {officer.linkedin}
              github = {officer.email}
            />
          </div>
        ))}
      </div> */}
    <h3>Test Input</h3>
    <div className="test_input">
      <form onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="Name" />
        <input type="text" name="role" placeholder="Role" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="linkedin" placeholder="LinkedIn" />
        <input type="file" onChange={onFileChange} />

        <button>Submit</button>
      </form>
      {/* <ul> */}
        {/* {users.map((user) => {
          return (
            

            <li key={user.name}>
              <img width="100" height="100" src={user.avatar} alt={user.name} />
              <p>{user.name}</p>
            
            
            </li>
          );
        })} */}

      <div className="about_officers">
              {officers.map(officer =>(
                <div key = {officer.id}>
                  <ProfileOfficer
                    src={(officer.avatar)}
                    role = {officer.role}
                    name = {officer.name}
                    linkedin = {officer.linkedin}
                    email = {officer.email}
                  />
                </div>
              ))}
      </div>
      {/* </ul> */}
    </div>
    

    </div>
    

  );
}

export default AddOfficersPage;
