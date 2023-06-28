import Teamimg from "../../assets/Bill 1.png";

function OurTeam() {
  return (
    <div className="whytrustus-section px-40 my-40">
      <div className=" flex items-center justify-between mb-14">
        <h1 className=" h-14 font-bold text-3xl">Our Team</h1>
      </div>
      <div className="grid-container">
        <div className="grid-wrapper grid grid-cols-4 gap-10">
          <div className="bg-[#1C140F] w-64 h-64 rounded-2xl p-5 flex items-center flex-col">
            <img src={Teamimg} alt="team-img.png" />
            <p className=" text-xl font-semibold pt-6">Hasbi Assiddiqi</p>
          </div>
          <div className="bg-[#1C140F] w-64 h-64 rounded-2xl p-5 flex items-center flex-col">
            <img src={Teamimg} alt="team-img.png" />
            <p className=" text-xl font-semibold pt-6">Michael David Jatmiko</p>
          </div>
          <div className="bg-[#1C140F] w-64 h-64 rounded-2xl p-5 flex items-center flex-col">
            <img src={Teamimg} alt="team-img.png" />
            <p className=" text-xl font-semibold pt-6">Rilo Supriyatno</p>
          </div>
          <div className="bg-[#1C140F] w-64 h-64 rounded-2xl p-5 flex items-center flex-col">
            <img src={Teamimg} alt="team-img.png" />
            <p className=" text-xl font-semibold pt-6">Wahyu Shidqi</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OurTeam;
