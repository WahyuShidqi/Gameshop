import BigNewsSection from "./newscomponent/bignewssection";
import Header from "./newscomponent/header";
import SmallNewsSection from "./newscomponent/smallnewssection";

function News() {
  return (
    <div className=" mt-56 px-28">
      <div>
        <Header />
      </div>
      <div id="newscontainer" className="flex">
        <div className="bignewstemp">
          <BigNewsSection />
        </div>
        <div className="smallnewstemp ml-10">
          <SmallNewsSection />
        </div>
      </div>
    </div>
  );
}

export default News;
