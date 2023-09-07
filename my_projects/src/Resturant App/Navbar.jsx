import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar({filterItem, menuList}) {
  return (
    <>
    <nav class="navbar bg-dark navbar-dark">
    <div class="container">
      {menuList.map((curElem) => {
          return (
            <button class="navbar-brand border-0 bg-dark" onClick={() => filterItem(curElem)}>{curElem}</button>
            )
          })
        }
        </div>
        </nav>
      </>
  )
}


export default Navbar;