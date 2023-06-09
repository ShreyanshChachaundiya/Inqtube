import React, { useContext } from "react";
import { data } from "../Data/PMO";

import { Context } from "../context/contextApi";

// -------------- importing components ----------------
import { SideNav, VideoCard } from "../components";
import { useParams } from "react-router-dom";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);
  const { category } = useParams();

  // console.log(category.toLowerCase());

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <SideNav />

      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {/* ------------------------ showing videos if video is fetched successfully---------------- */}
          {!loading &&
            data.map((item, ind) => {
              return (
                (category=="New"||category==""||item.type.toUpperCase() === category) && <VideoCard video={item} id={ind} />
                // Or you can use a ternary operator for conditional rendering:
                // category === item.type ? <VideoCard video={item} id={ind} /> : null
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
