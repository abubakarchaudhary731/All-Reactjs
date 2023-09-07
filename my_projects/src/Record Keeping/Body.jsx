import React from 'react';
import Field from './field';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect} from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';

// JSON.stringify used to convert an array into string
// JSON.parse used to convert string into an array
// Get the Local Storage data back
const getLocalData = () => {
  const lists = localStorage.getItem("myData");
  if (lists) { 
    return JSON.parse(lists);
  } else {
    return [];
  }
};

function Body() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState(getLocalData());
    const [iseditItem, setIsEditItem] = useState();
    const [toggleButton, setToggleButton] = useState(false);

    const  addData = () => {
      if (!name || !email) {
        alert("Please Fill the Required Fields");
      } else if ((name || email) && toggleButton) {
        setData(
          data.map((curElem) => {
            if(curElem.id === iseditItem) {
            return { ...curElem, name:name, email:email };
          }
          return curElem;
        })
        );
    setName("");
    setEmail("")
    setIsEditItem();
    setToggleButton(false);
        
      } else {
        const myNewInputData = { 
          id: new Date().getTime().toString(),
          name: name,
          email: email
        };
        // ... are spread operator
        // ... is used to spread the elements of an array into another array
                setData([...data, myNewInputData]);
                setName("");
                setEmail("");
      }
    };

// Delete Row 
const deletedata = (index) => {
  const updateddata = data.filter((curElem) => {
    return curElem.id !== index;
  });
  setData(updateddata);
};

// Edit Rows
  const editItem = (index) => {
    const item = data.find((curElem) => {
      return curElem.id === index;
    });
    setName(item.name);
    setEmail(item.email)
    setIsEditItem(index);
    setToggleButton(true);
  };


// Remove All Rows 
  const removeAll = () => {
    setData([]);
  };

// Adding Local Storage
  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(data));
  }, [data]);


  return (
  <>
    <div className='container d-flex justify-content-center'> 
      <Stack className="mt-4" direction='row' spacing={3}>
        <TextField 
          value={name}
          onChange={(event)=> setName(event.target.value)}  
          id="outlined-textarea"
          label="Name"
          placeholder="Name"
          multiline 
          maxRows={2}/> 

        <TextField 
          value={email}
          onChange={(event) => setEmail(event.target.value)}   
          id="outlined-textarea"
          label="Email" 
          placeholder="Email"
          multiline 
          maxRows={1} /> 
        {toggleButton ? (
          <button class="btn btn-outline-success" onClick={addData}> <BorderColorIcon /> </button>
        ) : (
          <button class="btn btn-outline-success" onClick={addData}> <AddIcon /> </button>
        )}
      </Stack>
    </div>
{/* (? true ) (: false) */}

      <Field deletedata={deletedata} data={data} editItem={editItem} />   
    <div className="d-flex justify-content-center">
      <button className='btn btn-outline-danger' onClick={removeAll}> REMOVE ALL </button> 
      </div>    
  </>
  );
}

export default Body;