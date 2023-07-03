import Headers from "./Headers";
import GlobeInfo from "./contactcomponent/globeinfo";
import UserEmail from "./contactcomponent/useremail";

function Contact() {
  return (
    <div className=" mt-56">
      <div className="px-40">
        <Headers
          ContactHeader="Our service are all across the world"
          ContactHeaderText="many people from different countries use our service"
        />
      </div>

      <div className="px-40">
        <GlobeInfo />
      </div>

      <div className=" mt-40 bg-[#1C140F] h-[54rem]">
        <UserEmail />
      </div>
    </div>
  );
}

export default Contact;
