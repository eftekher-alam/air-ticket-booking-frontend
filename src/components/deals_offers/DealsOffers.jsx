import offer1 from "../../assets/offer-1.png";
import offer2 from "../../assets/offer-2.png";
import offer3 from "../../assets/offer-3.png";


const DealsOffers = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold mb-10 max-lg:text-center">Deals and Offers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="card card-side bg-base-100 shadow-xl ">
                    <figure><img src={offer1} className="rounded-xl w-full h-full" /></figure>
                    <div className="card-body w-[65%] p-3 flex flex-col justify-center">
                        <div>
                            <p className="text-sm">With bkash payment only</p>
                            <h2 className="card-title text-lg text-sky-600">up to 14% discount on the base fare of domestic flights</h2>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl ">
                    <figure><img src={offer2} className="rounded-xl w-full h-full" /></figure>
                    <div className="card-body w-[65%] p-3 flex flex-col justify-center">
                        <div >
                            <p className="text-sm">With bkash payment only</p>
                            <h2 className="card-title text-lg text-sky-600">up to 14% discount on the base fare of domestic flights</h2>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl ">
                    <figure><img src={offer3} className="rounded-xl w-full h-full" /></figure>
                    <div className="card-body w-[65%] p-3 flex flex-col justify-center">
                        <div>
                            <p className="text-sm">With bkash payment only</p>
                            <h2 className="card-title text-lg text-sky-600">up to 14% discount on the base fare of domestic flights</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DealsOffers;