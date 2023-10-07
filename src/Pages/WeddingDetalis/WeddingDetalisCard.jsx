import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const WeddingDetalisCard = ({ wedding }) => {
    const { image, description, title } = wedding || {}
    console.log(wedding);
    return (

        <div>
            
            <div className="mt-10">
               

                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">

                        <p>{description}</p>
                        <div className="card-actions justify-end">
                            <Link to='/' className="inline-block" >
                                <button
                                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                >
                                    back
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default WeddingDetalisCard;