import React, { useContext ,useState} from 'react'
import {Auth} from '../utils/AuthContext';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Profile() {
    const {user,setUser}=useContext(Auth);
    const [image,setImage]=useState(null);
    const changeProfileImg= async() =>{
        
        const formData=new FormData();
        formData.append("token",JSON.parse(localStorage.getItem("token")))
        formData.append("profileImage",image)
        
        await axios.put(process.env.REACT_APP_IMG, formData)
        .then((res)=>{
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err);
        });
    }
  return (
    <section className='profilePage'>
        <div className="container">
            <div className="row">
                <h2 className='title'>My Profile</h2>
                <div className="profile-content">
                    <h3 >{user.name} {user.surname}</h3>
                    <p>{user.email}</p>
                    <div className="img" >
                        <img  src={`http://localhost:8000/${user.profileImage}`} alt={user.profileImage && user.name+user.surname} />
                    </div>
                    <label htmlFor="img" >Edit profile image</label>
                    <input id="img" type='file' onChange={(e)=>setImage(e.target.files[0])}/>
                    {image && <button onClick={changeProfileImg}>Change a photo</button>}
                </div>
                <Link to="/reset">Change password</Link>

            </div>
        </div>
    </section>
  )
}

export default Profile