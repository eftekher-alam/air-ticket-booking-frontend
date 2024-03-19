
const FeaturedDest = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold mb-10">Featured Destinations</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="p-3">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
                        <div className="card-actions w-full">
                            <button className="btn btn-warning w-2/3 mx-auto">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="p-3">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
                        <div className="card-actions w-full">
                            <button className="btn btn-warning w-2/3 mx-auto">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="p-3">
                        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
                        <div className="card-actions w-full">
                            <button className="btn btn-warning w-2/3 mx-auto">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDest;