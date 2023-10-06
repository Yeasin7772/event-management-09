import Banner from "../../components/Header/Banner";
import Navbar from "../../components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import WeddingCard from "../WeddingCard/WeddingCard";
import Footer from "../../components/Footer/Footer";
import planning from '../../assets/planning.jpg'
import image1 from '../../assets/img-portfolio01.jpg'
import image2 from '../../assets/img-portfolio02.jpg'
import image3 from '../../assets/img-portfolio03.jpg'
import image4 from '../../assets/img-portfolio_04.jpg'
import image5 from '../../assets/img-portfolio_05.jpg'
import image6 from '../../assets/img-portfolio_06.jpg'
import { FaTwitterSquare,FaInstagram } from 'react-icons/fa';


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
            <section className="mt-20 mb-20">
                <div className="sm:flex-row md:flex justify-between mt-5 mb-5">
                    <div className="space-y-6">
                        <h1 className="text-3xl font-semibold">Plan Your Wedding With 3 Steps</h1>
                        <p className="text-xl font-bold">Maecenas et lorem sit amet arcu commodo ornare.
                            Sed ut neque eget velit suscipit condimentum. Vivamus placerat volutpat felis, eget augue.</p>
                        <div className="space-y-3">
                            <p ><strong>Step 1:</strong>  <span className="text-[#9F9F9F]">Bring your wedding ideas to life with our incredible inspiration.</span></p>
                            <p className="font-medium"> <strong>Step 2:</strong> <span className="text-[#9F9F9F]">Our planning tools will be there to help you every step of the way.</span></p>
                            <p className="font-medium"><strong>Step 3:</strong> <span className="text-[#9F9F9F]"> Create your wedding team from over 6,000 venues & suppliers.</span>
                            </p>
                            <button className=" mt-3 border-2 px-6 py-2 rounded-md hover:bg-[#f78da7] text-xl text-[#abb8c3]  ">Book Now</button>

                        </div>

                    </div>

                    <img className="w-[500px]" src={planning} alt="" />

                    <div>

                    </div>
                </div>
            </section>

            <section className="mt-20 mb-20">
                <div className="text-center mb-10 ">
                    <h1 className="text-4xl font-semibold text-[#E527B2]">Our Amazing Work</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    {/* card 01 */}

                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="h-[300px]" src={image1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">

                                <div className="badge p-4 badge-secondary">Wedding Bouquet</div>
                            </h2>
                            <p className="text-xl font-medium">Libero Simplo Egestas</p>

                            <div className="card-actions justify-end">
                                <div className=" text-3xl text-blue-500"><FaTwitterSquare></FaTwitterSquare></div>
                                <div className="text-3xl text-red-500"><FaInstagram/></div>
                            </div>

                        </div>
                    </div>
                    {/* card 02 */}

                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="h-[300px]" src={image2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">

                                <div className="badge p-4 badge-secondary">Wedding Bouquet</div>
                            </h2>
                            <p className="text-xl font-medium">Quisque Nisl Simple</p>
                            <div className="card-actions justify-end">
                                <div className=" text-3xl text-blue-500"><FaTwitterSquare></FaTwitterSquare></div>
                                <div className="text-3xl text-red-500"><FaInstagram/></div>
                            </div>

                        </div>
                    </div>
                    {/* card 03 */}

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="h-[300px]" src={image3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">

                                <div className="badge p-4 badge-secondary">Wedding Cake</div>
                            </h2>
                            <p className="text-xl font-medium">Malesuada Fames Turpis</p>
                            <div className="card-actions justify-end">
                                <div className=" text-3xl text-blue-500"><FaTwitterSquare></FaTwitterSquare></div>
                                <div className="text-3xl text-red-500"><FaInstagram/></div>
                            </div>

                        </div>
                    </div>
                    {/* card 04 */}

                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="h-[300px]" src={image4} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">

                                <div className="badge p-4 badge-secondary">Suspendisse Tincidunt</div>
                            </h2>
                            <p className="text-xl font-medium">Wedding Bouquet, Wedding Ceremony</p>
                            <div className="card-actions justify-end">
                                <div className=" text-3xl text-blue-500"><FaTwitterSquare></FaTwitterSquare></div>
                                <div className="text-3xl text-red-500"><FaInstagram/></div>
                            </div>

                        </div>
                    </div>
                    {/* card 05 */}

                    <div className="card bg-base-100 shadow-xl">
                        <figure><img className="h-[300px]" src={image5} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">

                                <div className="badge p-4 badge-secondary">Wedding Bouquet</div>
                            </h2>
                            <p className="text-xl font-medium">Vivamus Volutpat Felis</p>
                            <div className="card-actions justify-end">
                                <div className=" text-3xl text-blue-500"><FaTwitterSquare></FaTwitterSquare></div>
                                <div className="text-3xl text-red-500"><FaInstagram/></div>
                            </div>

                        </div>
                    </div>
                    {/* card 06 */}

                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="h-[300px]" src={image6} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">

                                <div className="badge p-4 badge-secondary">Mauris Placerat Eleifend</div>
                            </h2>
                            <p className="text-xl font-medium">Wedding Cake, Wedding Ceremony</p>
                            <div className="card-actions justify-end">
                                <div className=" text-3xl text-blue-500"><FaTwitterSquare></FaTwitterSquare></div>
                                <div className="text-3xl text-red-500"><FaInstagram/></div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>



            <Footer></Footer>
        </div>
    );
};

export default Home;