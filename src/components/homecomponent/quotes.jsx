function Quotes(props) {
  return (
    <div className="px-40 pt-48 w-full">
      <div className="wrapper flex items-center flex-col">
        <q className="text-center font-semibold text-4xl w-[51.625rem] h-28">
          {props.Quote}
        </q>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
export default Quotes;
