import Navbar from "../../components/Navbar/Navbar";


const StoryPage = () => {
    return (
        <div>

            <Navbar></Navbar>

            <div className="text-center">
                <h1 className="text-4xl font-medium py-4 ">
                Our Story
                </h1>
                <p className="text-xl">Where The Love Begin</p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://onelove.catanisthemes.com/wp-content/uploads/2017/02/img-story-bride.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">ELIZABETH BENNET</h2>
                        <p>Duis tristique elit at ullamcorper tempus. Mauris faucibus dapibus libero. Etiam at nunc in urna tempor fermentum sed sit amet velit. Morbi id magna nec mauris venenatis aliquet. Quisque in felis ut erat dictum luctus id a lacus sem dui accumsan.</p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure><img src="	https://onelove.catanisthemes.com/wp-content/uploads/2017/02/img-story-groom.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">FITZWILLIAM DARCY</h2>
                        <p>Duis tristique elit at ullamcorper tempus. Mauris faucibus dapibus libero. Etiam at nunc in urna tempor fermentum sed sit amet velit. Morbi id magna nec
                            mauris venenatis aliquet. Quisque in felis ut erat dictum luctus id a lacus sem dui accumsan.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryPage;