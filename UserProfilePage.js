import React, { useState } from 'react';
import './UserProfile.css';

const UserProfilePage = () => {
  const [isFormMode, setIsFormMode] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    bio: '',
    avatar: '/assets/IMG-20240915-WA0039.jpg',
    skills: '',
    location: '',
    joinDate: new Date().toISOString().split('T')[0],
    projects: []
  });

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    status: 'In Progress'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (e) => {
    setUserData(prev => ({
      ...prev,
      skills: e.target.value
    }));
  };

  const handleAddProject = () => {
    if (newProject.name && newProject.description) {
      setUserData(prev => ({
        ...prev,
        projects: [...prev.projects, { ...newProject }]
      }));
      setNewProject({ name: '', description: '', status: 'In Progress' });
    }
  };

  const handleRemoveProject = (index) => {
    setUserData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormMode(false);
  };

  const handleEdit = () => {
    setIsFormMode(true);
  };

  const handleLogout = () => {
    console.log('User logged out');
  };

  const skillsArray = userData.skills.split(',').map(skill => skill.trim()).filter(skill => skill);

  if (isFormMode) {
    return (
      <div className="user-profile-page">
        <div className="profile-container">
          <div className="profile-section">
            <h2>Fill Your Profile Details</h2>
            <form onSubmit={handleSubmit} className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Full Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={userData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                />
              </div>

              <div className="form-group">
                <label htmlFor="bio">Bio:</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={userData.bio}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="skills">Skills (comma-separated):</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={userData.skills}
                  onChange={handleSkillsChange}
                  placeholder="e.g., React, JavaScript, Node.js"
                />
              </div>

              <div className="form-group">
                <label>Projects:</label>
                <div className="project-inputs">
                  <input
                    type="text"
                    placeholder="Project name"
                    value={newProject.name}
                    onChange={(e) => setNewProject(prev => ({ ...prev, name: e.target.value }))}
                  />
                  <input
                    type="text"
                    placeholder="Project description"
                    value={newProject.description}
                    onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                  />
                  <select
                    value={newProject.status}
                    onChange={(e) => setNewProject(prev => ({ ...prev, status: e.target.value }))}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Planning">Planning</option>
                  </select>
                  <button type="button" onClick={handleAddProject} className="add-project-btn">
                    Add Project
                  </button>
                </div>
                
                {userData.projects.length > 0 && (
                  <div className="projects-preview">
                    <h4>Added Projects:</h4>
                    {userData.projects.map((project, index) => (
                      <div key={index} className="project-preview-item">
                        <span>{project.name} - {project.status}</span>
                        <button 
                          type="button" 
                          onClick={() => handleRemoveProject(index)}
                          className="remove-project-btn"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Create Profile
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="user-profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <img src={userData.avatar} alt={userData.name} className="profile-avatar" />
          <div className="profile-info">
            <h1>{userData.name}</h1>
            <p className="email">{userData.email}</p>
            <p className="location">{userData.location}</p>
            <p className="join-date">Member since {new Date(userData.joinDate).toLocaleDateString()}</p>
          </div>
          <div className="profile-actions">
            <button onClick={handleEdit} className="edit-btn">
              Edit Profile
            </button>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>

        <div className="profile-content">
          {userData.bio && (
            <div className="profile-section">
              <h2>About</h2>
              <p>{userData.bio}</p>
            </div>
          )}

          {skillsArray.length > 0 && (
            <div className="profile-section">
              <h2>Skills</h2>
              <div className="skills-list">
                {skillsArray.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {userData.projects.length > 0 && (
            <div className="profile-section">
              <h2>Projects</h2>
              <div className="projects-list">
                {userData.projects.map((project, index) => (
                  <div key={index} className="project-card">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
