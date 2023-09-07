import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteIcon from '@mui/icons-material/Delete';


function Field({deletedata, data, editItem}) {
  return (
    <>
    <div className="row m-4 bg-dark text-white p-2">    
      <div className='col-5'>
        <h5> Name </h5>
      </div>
      <div className='col-5'>
        <h5> Email </h5>
      </div>
      <div className='col'>
        <h5> Edit </h5>
      </div>
      <div className='col'>
        <h5> Remove </h5>
      </div>        
    </div>

    {
    data.map((curElem) => (           
      <div key={curElem.id} className='row m-4 bg-dark text-white p-2'>
      <div className='col-5'>
        <p> {curElem.name} </p>
      </div>
      <div className='col-5'>
        <p> {curElem.email} </p>
      </div>
      <div className='col'>
        <button className="btn btn-outline-success" onClick={() => editItem(curElem.id)} > <BorderColorIcon /> </button>
      </div>
      <div className='col'>
        <button onClick={() => deletedata(curElem.id)} className="btn btn-outline-danger"> <DeleteIcon /> </button> 
        </div>
    </div>
  ))}
  </>
  );
}
 
export default Field;