import ctaBg from "../../../assets/home/chef-service.jpg"
const CTA = () => {
   return (
      <div style={{backgroundImage:`url(${ctaBg})`}} className="bg-cover bg-right bg-fixed">
         <div className="bg-[#000] bg-opacity-20  p-20 lg:p-36 ">
         <div className="bg-white p-10 lg:p-32 text-center">
            <h2 className="font-title text-5xl mb-2">Bistro Boss</h2>
            <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
         </div>
         </div>
      </div>
   );
};

export default CTA;