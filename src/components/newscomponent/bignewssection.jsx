import BigTemplate from "./newsfeedtemplate/bigtemp";

function BigNewsSection() {
  return (
    <div className="gridcontainer">
      <div className="gridwrapper grid grid-rows-2 gap-20">
        <div>
          <BigTemplate />
        </div>

        <div>
          <BigTemplate />
        </div>
      </div>
    </div>
  );
}

export default BigNewsSection;
