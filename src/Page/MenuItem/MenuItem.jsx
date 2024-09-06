import useMenu from "../../Components/hooks/useMenu";
import DisplayMenu from "./DisplayMenu";

const MenuItem = () => {
  const [menu] = useMenu();
  console.log("all cart items", menu);
  return (
    <div className="flex mt-20">
      <div className="w-[20%]">
        <h2>Hello World</h2>
      </div>
      <div className="w-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {menu.map((item) => (
            <DisplayMenu key={item.id} item={item}></DisplayMenu>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
