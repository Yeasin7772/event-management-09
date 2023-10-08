

const Banner = () => {
    return (
        <div>
            <div className="hero h-[80vh]" style={{ backgroundImage: 'url(https://i.ibb.co/163MV7b/cover-img.jpg)' }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-white font-mono">
                    <div className="max-w-md" data-aos="fade-up"
                        data-aos-duration="3000">
                        <h1 className="text-3xl mb-5 font-bold">Plan Your special Day</h1>
                        <h1 className="mb-5 text-5xl font-bold">Wedding Planning</h1>

                        <button className="btn text-xl text-white bg-[#808080] hover:bg-[#e6b7b9] px-5 ">Find Your Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;