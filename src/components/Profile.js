import { useContext } from "react";

import "../styles/profile.css";
import { UsersContext } from "../context/UsersContext";

export default function Profile() {
  const { profileData } = useContext(UsersContext);

  if (profileData) {
    const fullName = `${profileData.name.title} ${profileData.name.first} ${profileData.name.last}`;

    return (
      <div className="profile">
        <img src={profileData.picture.large} alt="Profile Pic" />
        <div className="profile-info">
          <p>Name: {fullName}</p>
          <p>Country: {profileData.location.country}</p>
          <p>Gender : {profileData.gender}</p>
          <p>Email: {profileData.email}</p>
          <p>Phone: {profileData.phone}</p>
          <p>Birthday: {profileData.dob.date}</p>
          <p>Age: {profileData.dob.age}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
