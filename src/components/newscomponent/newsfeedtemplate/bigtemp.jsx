import lolnews from "../../../assets/lolnews.png";

function BigTemplate() {
  return (
    <div className=" w-[39rem] border-b-2 border-solid border-white pb-16">
      <div>
        <img src={lolnews} alt="LOL.png" />
        <div className="flex pt-3 items-center">
          <p id="author" className="p-3 bg-[#f58719]">
            John Smash
          </p>
          <p className="ml-5">.5 min ago</p>
        </div>
        <div id="content" className="mt-5">
          <h1 className="text-3xl font-semibold">
            Lorem Ipsum is simply dummy text dummy text
          </h1>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
          <p className="mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </div>
      </div>
    </div>
  );
}
export default BigTemplate;
