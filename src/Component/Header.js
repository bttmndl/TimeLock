import React, { useContext} from 'react';
import { searchText } from './Context';
import './Header.css';



export default function Header() {
  
  const {text, setText} = useContext(searchText);
  return (
    <div className="container">
        <div className="row">
          <div className="col">
            <div className="box"><h3>Time Lock</h3></div>
          </div>
          <div className="col">
            <div className="box">
              <form className="d-flex" role="search">
                <input onChange={(e)=>{e.preventDefault();setText(e.target.value)}} className="form-control me-3" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={(e)=>{e.preventDefault();setText(text)}} className="btn btn-primary" >Search</button>
              </form>
            </div>
          </div>
          <div className="col">
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

