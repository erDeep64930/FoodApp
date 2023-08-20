import pic1 from "../../images/user-1.jpg";
import pic2 from "../../images/user-2.jpg";
import pic3 from "../../images/user-3.jpg";
import pic4 from "../../images/user-5.jpg";
import brand from "../../images/foods.png";


const customerList = [
  {
    id: 1,
    pic: pic1,
  },
  {
    id: 2,
    pic: pic2,
  },
  {
    id: 3,
    pic: pic3,
  },
  {
    id: 4,
    pic: pic4,
  },
];

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-orange-200 to-transparent ">
   
      <div className="flex flex-wrap items-center pt-24 xl:pt-20">
        {/* first div */}
        <div className="w-full lg:w-6/12 p-5">
          <h4 className="pb-5 text-xs font-mont uppercase font-medium bg-amber-200 px-3 py-2 rounded-3xl inline-block text-orange-700">
            Drink , Food & Enjoy
          </h4>
          <h1 className="mt-5 text-4xl sm:text-5xl capitalize font-bold font-rubik  md:w-9/12 lg:w-full pb-5 tracking-5">
            Most fastest food
            <span className="bg-orange-400 rotate-3 inline-block px-5 py-2">
              delivery
            </span>{" "}
            service
          </h1>
          <p className="mt-5 text-base text-gray-500 ">
            {" "}
            Healthy food , Healthy minds , Body growth , Nutritious Value , and
            so on ....
          </p>
          <div className="flex gap-4 space-x-4 items-center justify-center">
            <div>
              <ul className="flex flex-row mt-5 ">
                {customerList.map(({ id, pic }) => {
                  return (
                    <li
                      key={id}
                      className="block w-[40px] overflow-hidden rounded-full border-[3.5px] border-orange-200 -ml-2 first:-ml-0"
                    >
                      <img
                        src={pic}
                        className="w-full h-full object-cover bg-center"
                      />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="text-xs sm:text-sm ">3500+ happy customers</div>
          </div>
        </div>
        {/* first div end here */}

        {/* second div */}
        <div className="lg:w-1/2 hidden lg:block ">
          <img
            src={brand}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
        {/* second div end here */}
      </div>
    </header>
  );
};

export default Header;
