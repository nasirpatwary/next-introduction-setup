
const SectionTitle = ({ toTitle, boTitle }) => {
    return (
        <div className="ml-8">
            <div className="absolute top-40 left-56">
            <h4 className="text-3xl text-[#fdfdfd] font-bold">{toTitle}</h4>
            </div>
            <div className="absolute bottom-0 left-[480px]">
            <p className="text-lg font-semibold bg-[#ff3811] rounded-tl-full rounded-tr-full text-[#fdfdfd] py-1 px-8 ">{boTitle}</p>
            </div>
        </div>
    );
};

export default SectionTitle;