// import logo from "../../images/logo.png";

import { menuItems } from "../../constant/constant";

const Navbar = () => {
  return (
    <nav className="inset-0 w-full h-full bg-black/10">
      <div className="absolute top-0 right-0 h-full bg-orange-100 items-center flex">
        <ul className="  capitalize w-full">
          {menuItems.map(({ id, title }) => {
            return <li key={id} className="block py-3 px-4 w-full text-orange-800 text-base hover:bg-orange-600 hover:text-white hover:pl-6 transition-all duration-200">{title}</li>;
          })}
        </ul>
      </div>
      {/* <div>
        <div className="mx-auto  w-auto h-[40px] top-6 ml-6">
          <img
            src={logo}
            loading="lazy"
            className="w-14 h-14 bg-center object-cover rounded-full"
          />
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
