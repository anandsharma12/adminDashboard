import React from 'react'
import './Sidebar.css';
import {AiOutlineSearch} from "react-icons/ai"
import { BottomMenu, SidebarData } from '../../Data/Data';
import butterfy from '../../img/butterfly.png'

const Sidebar = () => {
  return (
    <>
     <div className="Sidebar">
      
        {/* logo */}
        <div className='logo'>
            <img src={butterfy} alt="" />
        </div>
       
        <div className='search'>
            <AiOutlineSearch/>
        </div>
        

       {/* menu */}
       <div className='menu'>
         {SidebarData.map((item,index)=>{
            return(
                <div className="menuItem ">
                    <item.icon/>
                </div>
            )
         })}
       </div>

       {/* bottom menu */}
       <div className='bottomMenu'>
          {BottomMenu.map((item, index)=>{
            return(
                <div className="btm">
                    <item.icon/>
                </div>
            )
          })}
       </div>
     </div>
    </>
  )
}

export default Sidebar;