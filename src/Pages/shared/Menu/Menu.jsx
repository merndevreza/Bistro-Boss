
const Menu = ({item}) => {
   const {name,image,recipe,price}=item;
   return (
      <div className="flex justify-between items-center gap-5">
         <div>
            <img style={{borderRadius:"0 200px 200px 200px"}} className="max-w-[120px]" src={image} alt="" />
         </div>
         <div>
            <h2 className="font-title text-xl font-medium mb-1">{name}  ------------------</h2>
            <p className="text-[#737373]">{recipe}</p>
         </div>
         <div>
            <span>${price}</span>
         </div>
      </div>
   );
};

export default Menu;