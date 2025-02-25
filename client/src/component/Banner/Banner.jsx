import { Link } from "react-router-dom";
import { useTransition } from "../../hooks/useTransition";

const Banner = () => {
  return (
    <div>
      <div className="bg-[url(/images/more/banner.png)] bg-cover bg-center h-lvh flex items-center justify-center">
        <div className="w-10/12 mx-auto hidden lg:block"></div>
        <div
          className={`text-lg text-white lg:text-left px-12 md:px-24 lg:px-32 xl:px-40 space-y-2 md:space-y-3 lg:space-y-4 text-center ${useTransition}`}
        >
          <h1 className="text-3xl md:text-4xl">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-wrap text-sm md:text-base font-[Raleway]">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div className="mt-4">
            <Link
              className={`bg-[#E3B577] text-[#242222] px-4 py-2 cursor-pointer hover:bg-transparent border hover:border-white hover:text-white ${useTransition}`}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#ECEAE3]">
        <div className="px-4 md:px-0 md:w-10/12 lg:w-9/12 mx-auto py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-7">
            <div className="text-[#331A15] flex flex-col items-center justify-center lg:justify-start lg:items-start">
              <img src="/images/icons/1.png" alt="icon" />
              <h1 className="text-lg md:text-xl font-bold mt-2">
                Awesome Aroma
              </h1>
              <p className="text-sm md:text-base text-wrap flex-grow">
                You will definitely be a fan of the design & aroma of your
                coffee.
              </p>
            </div>
            <div className="text-[#331A15] flex flex-col items-center justify-center lg:justify-start lg:items-start">
              <img src="/images/icons/2.png" alt="icon" />
              <h1 className="text-lg md:text-xl font-bold mt-2">
                High Quality
              </h1>
              <p className="text-sm md:text-base text-wrap flex-grow">
                We served the coffee to you maintaining the best quality.
              </p>
            </div>
            <div className="text-[#331A15] flex flex-col items-center justify-center lg:justify-start lg:items-start">
              <img src="/images/icons/3.png" alt="icon" />
              <h1 className="text-lg md:text-xl font-bold mt-2">Pure Grades</h1>
              <p className="text-sm md:text-base text-wrap flex-grow">
                The coffee is made of the green coffee beans which you will
                love.
              </p>
            </div>
            <div className="text-[#331A15] flex flex-col items-center justify-center lg:justify-start lg:items-start">
              <img src="/images/icons/4.png" alt="icon" />
              <h1 className="text-lg md:text-xl font-bold mt-2">
                Proper Roasting
              </h1>
              <p className="text-sm md:text-base text-wrap flex-grow">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
