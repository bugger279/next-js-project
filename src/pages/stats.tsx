const stats = () => {
  return (
    <div className="grid md:grid-cols-2 p-5 lg:px-24 h-full">
      <div className="flex flex-col justify-center space-y-3">
      <div className="textBlock-wrapper bg-gray-dark w-10/20 mx-auto md:py-14 items-center">
        <h1 className="textBlock-title text-yellow mb-4 md:text-5xl text-2xl">
          Total Donation
        </h1>
        <span className="px-6 py-4 text-2xl md:text-3xl bg-gray-light">$120</span>  
      </div>
      </div>

      <div className="flex flex-col justify-center text-center space-y-3">
        <h1 className="textBlock-title text-yellow mb-4 md:text-5xl text-2xl">Last 5 Donaters</h1>
        {
            [...Array(5)].map((data, i) => (
                <div key={i} className="flex justify-between px-6 text-x1 bg-gray-dark py-4">
                    <span>Saul</span>
                    <span>1</span>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default stats;
