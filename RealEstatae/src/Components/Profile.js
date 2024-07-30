import React, { useState, useRef } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = ({ user, updateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    profession: user.profession,
    company: user.company,
    image: user.image || 'https://static.vecteezy.com/system/resources/previews/020/213/738/original/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg',
  });
  const [imagePreview, setImagePreview] = useState(formData.image);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({
          ...formData,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData); // Debugging log
      const response = await axios.put(`http://localhost:8181/users/${user.id}`, formData);
      console.log('Server response:', response); // Debugging log
      if (response.status === 200) {
        updateUser(response.data);
        toast.success("Profile saved successfully!");
        setIsEditing(false);
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error('There was an error updating the user!', error);
      toast.error(`Failed to save profile: ${error.message}`);
    }
  };

  return (
    <div className="h-screen w-full bg-gray-300 pt-10">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
        <div className="bg-blue-500 h-32"></div>
        <div className="p-4 flex flex-col items-center">
          <img
            className="rounded-full h-32 w-32 -mt-16 border-5w border-white cursor-pointer"
            src={imagePreview}
            alt="Profile"
            onClick={() => fileInputRef.current.click()}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          {isEditing ? (
            <form className="w-full mt-4" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Save
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h1 className="text-2xl font-bold mt-4">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600 mt-2">{user.profession}</p>
              <p className="text-gray-600">{user.company}</p>
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Profile;
