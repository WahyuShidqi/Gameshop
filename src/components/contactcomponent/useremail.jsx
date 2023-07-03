import "./useremail.css";

function UserEmail() {
  return (
    <div className="emailcontainer flex justify-center">
      <div className=" mt-16">
        <h1 className=" text-3xl font-medium text-center">Contact us</h1>

        <div className="contact-form justify-center mt-20">
          <form>
            <div className="NameForm flex gap-5">
              <div className="flex flex-col mt-5">
                <label htmlFor="firstname">First Name</label>
                <input
                  id="firstname"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="flex flex-col mt-5">
                <label htmlFor="lastname">LastName</label>
                <input
                  id="lastname"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="useremail">Email</label>
              <input
                id="useremail"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>

            <div className="flex flex-col mt-5">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                placeholder="Write your message"
                name="message"
                required
              ></textarea>
            </div>

            <div className="button flex justify-end">
              <button
                className="sendbutton px-10 py-2 mt-3 rounded bg-[#e87d0e]"
                type="submit"
                value="Send"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserEmail;
