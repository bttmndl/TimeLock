import React, { useContext} from 'react';
import { globalState } from './Context';
import './Header.css';
import {useNavigate} from 'react-router-dom';

const brandButtonStyle = {
  border: 'none',
  backgroundColor : 'rgb(239, 231, 231)',
  fontWeight: '900',
  fontFamily: 'Times New Roman", Times, serif',
  fontSize: '28px',
}

export default function Header() {
  const navigate = useNavigate();
  const {text, setText} = useContext(globalState);
  return (
    <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="box brand-name"><button style={brandButtonStyle} onClick={()=>navigate('/')}>TimeLock</button></div>
          </div>
          <div className="col-4">
            <div className="box">
              <form className="d-flex" role="search">
                <input onChange={(e)=>{e.preventDefault();setText(e.target.value)}} className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={(e)=>{e.preventDefault();setText(text)}} className="btn btn-primary" >Search</button>
              </form>
            </div>
          </div>
          <div className="col-4">
            <div className="box">
              <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Sign Up</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-expanded="false">Profile</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/"><h3>Action</h3></a></li>
                    <li><a className="dropdown-item" href="/"><h3>Action</h3></a></li>
                    <li><a className="dropdown-item" href="/"><h3>Action</h3></a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/"><h3>Action</h3></a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      
    </div>
  )
}

