import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide1.jpg";
const ChefRecommends = () => {
  return (
    <div className="my-24">
      <SectionTitle
        title={"CHEF RECOMMENDS"}
        subTitle={"Should Try"}
      ></SectionTitle>
      <div className="grid grid-cols-3 gap-12">
        <div>
          <img className="w-full h-[300px] object-cover" src={img1} alt="" />
          <div className="p-8 bg-[#F3F3F3] rounded-sm">
            <h2 className="text-2xl font-title font-semibold text-center">Caeser Salad</h2>
            <p className="text-center text-lg">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center mt-10">
              <button className="btn border-b-4 border-black border-l-0 border-r-0 border-t-0">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="w-full h-[300px] object-cover" src={img1} alt="" />
          <div className="p-8 bg-[#F3F3F3] rounded-sm">
            <h2 className="text-2xl font-title font-semibold text-center">Caeser Salad</h2>
            <p className="text-center text-lg">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center mt-10">
              <button className="btn border-b-4 border-black border-l-0 border-r-0 border-t-0">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
        <div>
          <img className="w-full h-[300px] object-cover" src={img1} alt="" />
          <div className="p-8 bg-[#F3F3F3] rounded-sm">
            <h2 className="text-2xl font-title font-semibold text-center">Caeser Salad</h2>
            <p className="text-center text-lg">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="text-center mt-10">
              <button className="btn border-b-4 border-black border-l-0 border-r-0 border-t-0">
                View Full Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecommends;
