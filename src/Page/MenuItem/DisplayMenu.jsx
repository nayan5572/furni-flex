/* eslint-disable react/prop-types */
const DisplayMenu = ({ item }) => {
  return (
    <div className="">
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
        <img
          width={400}
          height={400}
          className="h-[275px] w-[350px] rounded-lg object-cover"
          src={item.img}
          alt="card navigate ui"
        />
        <div className="grid gap-2">
          <h1 className="text-lg font-semibold ">{item.name}</h1>
          <h1 className="text-lg font-semibold">
            {item.currentPrice}{" "}
            <span className="text-[#ABABAB] ml-2 mr-4">
              <del>{item.originalPrice}</del>
            </span>
            <span className="text-[#B92A2A]">{item.discount}</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-white/60">
            {item.description}
          </p>
          <div className="text-lg font-semibold">{}</div>
        </div>
        <div className="">
          <button className="w-full rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayMenu;
