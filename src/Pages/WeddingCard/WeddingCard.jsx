import { Link } from "react-router-dom";

const WeddingCard = ({ wedding }) => {
    const { id, image, title, name, price } = wedding || {}
    // console.log(wedding);
    return (
        <div>


            <div className="card flex flex-grow  bg-base-100 shadow-xl" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <figure><img className="h-[250px]" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="">

                        <div className="text-xl">{name}</div>
                    </h2>
                    <p className="text-sm font-medium">{title}</p>
                    <p className="text-xl font-medium"> Price: {price}$</p>

                    <div className="card-actions ">
                        <Link to={`/wedding/${id}`}
                            className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Details
                        </Link>
                    </div>

                </div>
            </div>

            {/* <div className="p-6 pt-3">
                    <Link to={`/wedding/${id}`}
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                       Details
                    </Link>
                </div> */}



        </div>
    );
};

export default WeddingCard;