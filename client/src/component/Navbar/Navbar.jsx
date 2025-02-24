
const Navbar = () => {
    return (
        <div style={{ backgroundImage: "url('/images/more/navbar_bg.jpg')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div className="flex items-center gap-2 py-2 md:py-4">
                <img src="/logo.png" className="h-10 w-10 md:w-12 md:h-12 lg:w-16 lg:h-16" alt="logo" />
            <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-white">Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Navbar;