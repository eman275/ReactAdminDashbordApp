import React from 'react'
import './newUser.css'

export const NewUser = () => {
    return (
        <div className="newUser"> 
           <h1 className="newUserTitle">Create New User</h1>
            <form className="newUserForm">
            <div className="newUserItem">
                  <label >User Name</label>
                  <input type="text"  placeholder ="user name"  />
                </div> 
                <div className="newUserItem">
                  <label >Full Name</label>
                  <input type="text"  placeholder ="full name"  />
                </div> 
                <div className="newUserItem">
                  <label >email</label>
                  <input type="email"  placeholder ="Enter Your email"  />
                </div> 
                <div className="newUserItem">
                  <label >Password</label>
                  <input type="password"  placeholder ="Create a password"  />
                </div> 
                <div className="newUserItem">
                  <label >Phone</label>
                  <input type="text"  placeholder =" Enter Your phone"  />
                </div>
                <div className="newUserItem">
                  <label >Adress</label>
                  <input type="text"  placeholder =" Enter Your address"  />
                </div>  
                <div className="newUserItem">
                  <label >Gender</label>
                  <div className="newUserGender">
                  <input type="radio"  name="gender" id="male" value="Male"  />
                  <label for="Male">Male</label>
                  <input type="radio"  name="gender" id="female" value="Female"  />
                  <label for="Female">Female</label>
                  <input type="radio"  name="gender" id="others" value="Others"  />
                  <label for="Others">Others</label>
                  </div>
                </div>  
                  <div className="newUserItem">
                      <label>Active</label>
                      <select name="active" id="active" className="newUserSelect">
                          <option value="yes">YES</option>
                          <option value="No">NO</option>
                      </select>
                  </div>
                  <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
