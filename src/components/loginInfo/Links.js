import React from 'react';
import { Link } from "react-router-dom";

function Links() {
  return (
    <div >
      <Link className="navlink" to='/users/register'>Sign Up</Link>
      <Link className="navlink" to='/users/login'>Login</Link>
    </div>
  );
}

export default Links;