function Subscribe() {
  return (
    <div className="container px-40 mt-60">
      <div className="text-line">
        <h1 className=" font-semibold text-3xl">Read our latest gaming news</h1>
        <p className=" mt-5">simply by entering your email address.</p>
      </div>

      <div className="user-emailinput emaildarkbox mt-16 flex justify-between">
        <div className="text-line w-[33rem]">
          <h1 className=" font-medium text-3xl">Stay in the loop</h1>
          <p className="pt-3 ">
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!
          </p>
        </div>
        <div className="email-input w-96 mt-8 h-12 bg-white rounded-lg flex items-center pl-4">
          <form action="/action_page.php">
            <input
              className="text-black w-60"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
            <button
              type="submit"
              className="bg-[#DC7000] hover:bg-[#ca6513be] w-28 h-9 ml-3 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Subscribe;
