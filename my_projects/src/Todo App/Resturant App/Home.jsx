import React, { useState } from 'react'
import MediaCard from './Card';
import Menu from './Menu';
import Navbar from './Navbar';

  const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
  })),
  "All"
]
  // console.log(uniqueList);

function Home() {
    const [data, setData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
      if(category==="All") {
        return setData(Menu);
      }


      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      });
      setData(updatedList);
    }

  return (
    <div>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MediaCard data={data} />
    </div>
  )
}

export default Home;