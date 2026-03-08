import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Anav from '../Anav'

const UserEdit = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState('')

  let { id } = useParams()
  console.log(id)
  let navigate = useNavigate()
 const token = localStorage.getItem("token");
  
useEffect(() => {
  const fetchUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setName(response.data.name);
      setEmail(response.data.email);
    } catch (error) {
      console.log("DIDN'T GET USER", error);
    }
  };

  fetchUser();
}, [id, token]);

const formHandle = async (e) => {
  e.preventDefault();

  try {
    const payload = { name, email };

    await axios.put(
      `http://localhost:8000/api/users/${id}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Data updated successfully");
    navigate("/users");
  } catch (error) {
    alert("Failed to update");
    console.error(error);
  }
};
  return (
    <div className="bg-amber-100 min-h-screen">
      <Anav />
      <br />
      <div  >
        <h1 className='text-center'>Update User</h1>    <br />
        <form onSubmit={formHandle} className="max-w-md mx-auto mt-4 p-4 bg-amber-50 rounded shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name:</label>
            <input placeholder="name" onChange={(e) => setName(e.target.value)} value={name} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email:</label>
            <input placeholder=" Email" onChange={(e) => setEmail(e.target.value)} value={email} className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /><br />
          </div>

          <button className="bg-amber-500 hover:bg-amber-700 text-black font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</button>

        </form>
      </div>
    </div>
  )
}

export default UserEdit