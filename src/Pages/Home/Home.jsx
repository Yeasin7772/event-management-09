import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import WeddingCard from "../WeddingCard/WeddingCard";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    const weddings = useLoaderData()
    console.log(weddings);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div>
                <div className="mt-10 text-center space-y-6">
                    <h1 className="text-xl font-medium ">SERVICES</h1>
                    <p className="text-5xl font-medium text-[#1A1A1A]">What We Can Do</p>
                    <p className="text-base font-medium text-[#e6b7b9]"> Maecenas et lorem sit amet arcu commodo ornare.
                         Sed ut neque eget velit suscipit condimentum. Vivamus placerat volutpat felis
                         , eget interdum augue. Donec erat mi, ullamcorper molestie arcu vitae, auctor finibus magna.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {
                            weddings.map(wedding => <WeddingCard key={wedding.id} wedding={wedding}></WeddingCard>)
                        }
                    </div>


                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;