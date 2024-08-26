import React from "react";

function SocialMediaIcons({ title, icon, type, link }) {
  return (

    //  custome reusable button code which is used to navigate new url with tab changing
    <div
    
      className="w-fit text-white flex justify-center    hover:text-red-600 items-center gap-2  font-light md:text-lg text-xs px-2 text-center  py-2 h-fit font-sans transition-all duration-500  hover:bg-opacity-80 rounded-full"
    >
    
      <a href={link}  target="_blank" className="py-1 border-b border-transparent hover:border-[red] " >
        {icon && icon}
        <span style={{ fontFamily: '"Outfit", sans-serif',}} className="text-black text-sm font-semibold">{title && title}</span>
      </a>
    </div>
  );
}

export default SocialMediaIcons;
