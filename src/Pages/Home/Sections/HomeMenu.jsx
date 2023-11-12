import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menu from "../../shared/Menu/Menu";

const HomeMenu = () => {
   const [loadedMenu,setLoadedMenu]=useState([])
   useEffect(()=>{
      fetch("menu.json")
      .then(res=>res.json())
      .then(data=>{
         setLoadedMenu(data)
      })
   },[])
   return (
      <div className="my-20">
         <SectionTitle title={"FROM OUR MENU"} subTitle={"Check it out"}></SectionTitle>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
         {
            loadedMenu.map(item=>item.category === "popular" || item.category==="drinks"  ? <Menu key={item._id} item={item}></Menu>:"")
         }
         </div>
         <div className="text-center mt-10">
         <button className="btn border-b-4 border-black border-l-0 border-r-0 border-t-0">View Full  Menu</button>
         </div>
      </div>
   );
};

export default HomeMenu;