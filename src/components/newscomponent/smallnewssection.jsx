import SmallTemp from "./newsfeedtemplate/smalltemp";

function SmallNewsSection() {
  return (
    <div className="gridcontainer">
      <div className="gridwrapper grid grid-rows-[7] gap-10">
        <div>
          <SmallTemp />
        </div>
        <div>
          <SmallTemp />
        </div>
        <div>
          <SmallTemp />
        </div>
        <div>
          <SmallTemp />
        </div>
        <div>
          <SmallTemp />
        </div>
        <div>
          <SmallTemp />
        </div>
        <div>
          <SmallTemp />
        </div>
      </div>
    </div>
  );
}

export default SmallNewsSection;
