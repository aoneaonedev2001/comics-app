import React from "react";

const Navbar = () => {
  const toggleThemeDark = () => {
    const newTheme = "darkMod";
    localStorage.setItem("Theme", newTheme);
    window.location.reload();
  };
  const toggleThemeLight = () => {
    const newTheme = "lightMod";
    localStorage.setItem("Theme", newTheme);
    window.location.reload();
  };

  const currentTheme = localStorage.getItem("Theme");

  return (
    <div className="bg-[#ffff] dark:bg-[#1A1B1A] h-[61px] border-b-1 border sticky top-0 z-30 ">
      <div className="w-[1200px] sm:w-[400px] lg:w-[1000px]  md:w-[700px] mx-auto flex justify-between items-center h-full ">
        {/* <Link to="/" className="">
         <img className="cover " src="/home/main-logo.png" alt="" />
        </Link> */}
        <a href="/">
          <img className="cover sm:w-[144px] " src="/home/main-logo.png" alt="" />
        </a>

        {currentTheme === "darkMod" ? (
          <div onClick={toggleThemeLight} className="cursor-pointer">
            <img className="cover sm:w-[144px] " src="/home/light-mod-logo.png" alt="" />
          </div>
        ) : (
          <div onClick={toggleThemeDark} className="cursor-pointer">
            <img className="cover sm:w-[144px] " src="/home/dark-mod-logo.png" alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
