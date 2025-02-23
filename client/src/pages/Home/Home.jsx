import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Espresso Emporium - Home</title>
                <meta name="description" content="Welcome to Espresso Emporium, the ultimate coffee shop experience." />
            </Helmet>
            <h1>Welcome to Espresso Emporium</h1>
        </div>
    );
};

export default Home;