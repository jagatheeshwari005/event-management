import React from 'react';

const UserProfile = ({ name, age, email, avatar }) => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={avatar} alt={name} className="profile-avatar" />
        <div className="profile-info">
          <h1>{name}</h1>
          <p className="email">{email}</p>
          {age !== undefined && <p className="age">Age: {age}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

