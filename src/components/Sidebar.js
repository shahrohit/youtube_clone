import React from "react";

const Sidebar = () => {
  // const homeIcon= ;
  const alignIcon =
    "flex flex-col items-center hover:bg-gray-200 sm:p-2 p-1 rounded-lg cursor-pointer w-full";
  return (
    <div className=" fixed bottom-0 sm:top-14 sm:left-0 flex flex-row justify-between  items-end sm:justify-start  gap-2   sm:flex-col w-screen sm:w-24 p-2 bg-white border overflow-auto">
      <div className={`${alignIcon}`}>
        <img
          src="/icons/homeActive.png"
          alt=""
          className="h-7 w-7 sm:h-7 pt-1 object-contain"
        />
        <p className=""> Home </p>
      </div>

      <div className={`${alignIcon}`}>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          // style={{
          //   pointerEvents: "none",
          //   display: "block",
          // }}
          // fill="black"
          className="h-7 w-7"
        >
          <g
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="style-scope yt-icon"
          >
            <path
              d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
              className="style-scope yt-icon"
            ></path>
          </g>
        </svg>

        <p>Shorts</p>
        {/* <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className="style-scope yt-icon"
        style={{
          pointerEvents: "none",
          display: "block",
          width: "100%",
          height: "100%",
        }}
      >
        <g
          height="24"
          viewBox="0 0 24 24"
          width="24"
          className="style-scope yt-icon"
        >
          <path
            d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"
            className="style-scope yt-icon"
          ></path>
        </g>
      </svg> */}
      </div>

      <div className={`${alignIcon}`}>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="h-8 w-7"
          // style="pointer-events: none; display: block; width: 100%; height: 100%;"
        >
          <g className="style-scope yt-icon">
            <path
              d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
              className="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <p className="text-sm">Suscriptions</p>
      </div>

      <div className={`${alignIcon}`}>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          className="w-7 h-7"
        >
          <g className="style-scope yt-icon">
            <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
          </g>
        </svg>
        <p>Library</p>
      </div>
    </div>
  );
};

export default Sidebar;
