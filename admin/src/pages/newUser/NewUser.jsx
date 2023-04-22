import "./newUser.css";
import React from "react";
import { useContext, useState } from "react";
import { createUser } from "../../context/userContext/UserApiCalls";
import { UserContext } from "../../context/userContext/UserContext";
import storage from "../../firebase";
import { useNavigate } from "react-router-dom";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

function NewUser() {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();
  const [uploaded, setUploaded] = useState(0);
  const { dispatch } = useContext(UserContext);
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
    console.log(e.target.value);
  };

  const upload = (items) => {
    items.forEach((item) => {
      // Create a storage reference from our storage service
      const fileName = new Date().getTime() + item.label + item.file.name;
      const storageRef = ref(storage, `/user-items/${fileName}`);

      // const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      const uploadTask = uploadBytesResumable(storageRef, item.file);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },

        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUser((prev) => {
              return { ...prev, [item.label]: downloadURL };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };
  const handleUpload = (e) => {
    e.preventDefault();
    upload([{ file: profilePic, label: "profilePic" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(user, dispatch);
    navigate("/users");
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Profile Picture</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={(e) => setProfilePic(e.target.files[0])}
          />
        </div>
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            placeholder="john"
            name="userName"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            placeholder="john@gmail.com"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>

        <div className="newUserItem">
          <label>Admin Status</label>
          <select
            className="newUserSelect"
            name="isAdmin"
            id="isAdmin"
            onChange={handleChange}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {uploaded === 1 ? (
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
        ) : (
          <button className="addProductButton" onClick={handleUpload}>
            Upload
          </button>
        )}
      </form>
    </div>
  );
}

export default NewUser;
