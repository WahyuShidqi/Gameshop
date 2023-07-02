import smallnewstempimg from "../../../assets/smallNewsTempImg.png";

function SmallTemp() {
  return (
    <div className=" w-[50rem] h-48">
      <div className="flex">
        <img className=" w-48 h-48" src={smallnewstempimg} alt="news.png" />

        <div id="content" className="ml-3">
          <div className="flex pt-3 items-center">
            <p id="author" className="p-2 bg-[#23cf2b] ">
              John Smash
            </p>
            <p id="time" className="ml-5">
              .5 min ago
            </p>
          </div>
          <h1 className=" text-2xl font-semibold">
            Lorem Ipsum is simply dummy text dummy text
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SmallTemp;
