import React from 'react';
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
// import { Link } from "react-router-dom";


const Header = props => {

      // console.log(props)

      return (
            <div className="header">
                  <a className="icon" href='https://potluck-party-planner-fe.now.sh/'>
                        
                        <h1 className="heading">Potluck<i className="fas fa-utensils">
                        </i> Planner</h1>
                  </a>
                  
                  <Button negative onClick={() => {
                        localStorage.removeItem("token");
                        props.history.push("/");
                  }}>Logout</Button>
            </div>
      )
}

export default Header 