/* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import useMenu from "../../Components/hooks/useMenu";
// import DisplayMenu from "../MenuItem/DisplayMenu";

// const OrderItem = () => {
//   const categories = ["lounge", "rocking", "side"];
//   const { category } = useParams();
//   const initialIndex = categories.indexOf(category);
//   const [tabIndex, setTabIndex] = useState(initialIndex);
//   const [menu] = useMenu();

//   const lounge = menu.filter((item) => item.category === "Lounge");
//   const rocking = menu.filter((item) => item.category === "Rocking");
//   const side = menu.filter((item) => item.category === "Side");
//   return (
//     <div>
//       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//         <TabList className="inline-block space-y-2">
//           <Tab className="bg-black/60 p-1 text-white">Lounge Chair</Tab>
//           <Tab className="bg-black/60 p-1 text-white">Rocking Chair</Tab>
//           <Tab className="bg-black/60 p-1 text-white">Side Chair</Tab>
//         </TabList>
//         <TabPanel>
//           <DisplayMenu item={lounge}></DisplayMenu>
//         </TabPanel>
//         <TabPanel>
//           <DisplayMenu item={rocking}></DisplayMenu>
//         </TabPanel>
//         <TabPanel>
//           <DisplayMenu item={side}></DisplayMenu>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default OrderItem;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Ensure default react-tabs styles are applied
import useMenu from "../../Components/hooks/useMenu";
import DisplayMenu from "../MenuItem/DisplayMenu";

const OrderItem = () => {
  const categories = ["lounge", "rocking", "side"]; // Available categories
  const { category } = useParams(); // Extract the category from the URL
  const [tabIndex, setTabIndex] = useState(0); // Initial tab index state
  const [menu] = useMenu(); // Fetch the menu data using your custom hook

  // Filter the menu data based on the category
  const lounge = menu.filter(
    (item) => item.category.toLowerCase() === "lounge"
  );
  const rocking = menu.filter(
    (item) => item.category.toLowerCase() === "rocking"
  );
  const side = menu.filter((item) => item.category.toLowerCase() === "side");

  useEffect(() => {
    const categoryIndex = categories.indexOf(category?.toLowerCase());
    if (categoryIndex >= 0) {
      setTabIndex(categoryIndex);
    }
  }, [category, categories]);

  return (
    <div className="flex justify-between mt-20">
      <div className="w-[263px] border-r-2 border-gray-200 pr-[30px]">
        {" "}
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="space-y-4">
            {" "}
            <Tab
              style={{ padding: "8px 8px" }}
              className="tab-item cursor-pointer rounded-lg bg-[#0E0E0E] text-white"
            >
              Lounge Chair
            </Tab>
            <Tab
              style={{ padding: "8px 8px" }}
              className="tab-item cursor-pointer rounded-lg bg-[#0E0E0E] text-white"
            >
              Rocking Chair
            </Tab>
            <Tab
              style={{ padding: "8px 8px" }}
              className="tab-item cursor-pointer rounded-lg bg-[#0E0E0E] text-white"
            >
              Side Chair
            </Tab>
          </TabList>
        </Tabs>
      </div>

      {/* Right side: TabPanel content, taking 80% width */}
      <div className="w-[960px]">
        <Tabs
          className=""
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabPanel>
            <DisplayMenu item={lounge} />
          </TabPanel>
          <TabPanel>
            <DisplayMenu item={rocking} />
          </TabPanel>
          <TabPanel>
            <DisplayMenu item={side} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderItem;
