/* eslint-disable react/prop-types */
const ItemCard = ({ items }) => {
  return (
    <div className="border rounded-lg">
      <div className="space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B]">
        <img
          width={400}
          height={400}
          className="h-[275px] w-[350px] rounded-lg object-cover"
          src={items.img}
          alt="card navigate ui"
        />
        <div className="grid gap-2">
          <h1 className="text-[18px] font-semibold ">{items.name}</h1>
          <h1 className="text-[18px] font-semibold">
            ${items.currentPrice}
            <span className="text-[#ABABAB] ml-2 mr-4">
              {/* ml-2 mr-4 */}
              <del>$ {items.originalPrice}</del>
            </span>
            <span className="text-[#B92A2A]">{items.discount}</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-white/60">
            {items.description}
          </p>
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

export default ItemCard;
