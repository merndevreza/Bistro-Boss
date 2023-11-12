import PropTypes from 'prop-types'; 
const SectionTitle = ({title,subTitle}) => {
   return (
      <div>
         <div className="max-w-sm mx-auto text-center mb-12">
         <p className="text-xl text-[#D99904] mb-3">---{subTitle}---</p>
         <h2 className="text-4xl border-b-4 border-t-4 border-[#E8E8E8] uppercase text-[#151515] py-5">{title}</h2>
         </div>
      </div>
   );
};
SectionTitle.propTypes={
   title:PropTypes.string,
   subTitle:PropTypes.string,
}
export default SectionTitle;