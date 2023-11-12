import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="bg-cover bg-fixed"
    ><div className="bg-black bg-opacity-30 p-24">
      
      <div>
         <div className="max-w-sm mx-auto text-center mb-12">
         <p className="text-xl text-[#D99904] mb-3">---Check it out---</p>
         <h2 className="text-4xl border-b-4 border-t-4 border-[#E8E8E8] uppercase text-white py-5">FROM OUR MENU</h2>
         </div>
      </div>
      <div className="flex gap-10 justify-center items-center">
        <div>
          <img className="max-w-[650px]" src={featuredImg} alt="" />
        </div>
        <div>
          <p className="text-xl text-white mb-5">
            March 20, 2023 WHERE CAN I GET SOME? <br /> Lorem ipsum dolor sit amet <br />
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
              <button className="btn border-b-4 border-white border-l-0 border-r-0 border-t-0 text-white bg-transparent">
                View Full Menu
              </button>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
