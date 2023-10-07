import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import WeddingDetalisCard from "./WeddingDetalisCard";
import Navbar from "../../components/Navbar/Navbar";

const WeddingDetails = () => {
    const [wedding, setWedding] = useState()
    console.log(wedding);
    const {id} = useParams()
    console.log(id);


    const weddings = useLoaderData()
    //console.log(weddings);
   
    useEffect(()=>{
        
        const findWedding = weddings?.find(wedding => wedding.id == id)
        setWedding(findWedding)
    },[id,weddings])

    return (
        <div>

            <Navbar></Navbar>

            <div className="flex justify-center items-center mt-10">
                {
                    <WeddingDetalisCard wedding={wedding} ></WeddingDetalisCard>
                }
            </div>

        </div>
    );
};

export default WeddingDetails;