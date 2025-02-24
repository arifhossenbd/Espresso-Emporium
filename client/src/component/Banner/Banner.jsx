import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-[url(/images/more/banner.png)] bg-cover bg-center h-lvh flex items-center justify-center">
            <div className="w-2/3 mx-auto"></div>
            <div className="text-lg text-white text-left px-12 md:px-24 lg:px-32 xl:px-40 space-y-2 md:space-y-3 lg:space-y-4">
                <h1 className="text-3xl md:text-4xl">Would you like a Cup of Delicious Coffee?</h1>
                <p className="text-lg md:text-xl text-wrap">It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <Link className="bg-[#E3B577] text-[#242222] px-4 py-2 cursor-pointer mt-2 md:mt-4">Learn More</Link>
            </div>
        </div>
    );
};

export default Banner;