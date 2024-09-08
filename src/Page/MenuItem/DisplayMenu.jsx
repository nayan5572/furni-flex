import ItemCard from "../ItemCard/ItemCard";

/* eslint-disable react/prop-types */
const DisplayMenu = ({ item }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
        {item?.map((items) => (
          <ItemCard key={items.id} items={items}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default DisplayMenu;
