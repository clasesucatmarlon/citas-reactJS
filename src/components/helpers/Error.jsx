const Error = ({mensaje}) => {
  return (
    <div className="bg-red-500 mb-4 rounded">
      <p className="py-3 text-center font-bold text-white uppercase">
        {mensaje}
      </p>
    </div>
  ); 
};

export default Error;
