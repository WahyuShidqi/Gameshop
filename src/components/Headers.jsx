function Headers({
  NewsHeader,
  NewsHeaderText,
  ContactHeader,
  ContactHeaderText,
}) {
  return (
    <div id="Header" className="flex items-center flex-col mb-28">
      <div id="title" className="text-center">
        <h1 className="text-4xl font-semibold">
          {NewsHeader ? NewsHeader : ContactHeader}
        </h1>
        <p className=" pt-3">
          {NewsHeaderText ? NewsHeaderText : ContactHeaderText}
        </p>
      </div>
    </div>
  );
}

export default Headers;
