import React, { useContext } from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import Authcontext from '../../../context/Logincontext';

const Header = () => {
  const { accessToken } = useContext(Authcontext);

  return (
    <div className="container-fluid bg-warning py-3" >
      <div className="col-md-4 text-center" style={{marginLeft:400}}>
        <div className="row justify-content-center align-items-center" >
          <div className="link-card">
            <Link to="/" className="text-light mx-3">Home</Link>
          </div>
          {!(accessToken) && (
            <div className="link-card">
              <Link to="/signuppage" className="text-light mx-3">Sign Up</Link>
            </div>
          )}
          {!(accessToken) && (
            <div className="link-card">
              <Link to="/loginpage" className="text-light mx-3">Login</Link>
            </div>
          )}
        </div>
        
          {accessToken && (
            <div className="link-card">
              <Link to="/dashboard" className="text-light mx-3">Profile</Link>
            </div>
          )}
       
      </div>
    </div>
  );
}

export default Header;
