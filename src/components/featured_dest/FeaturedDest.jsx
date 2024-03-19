import feature1 from "../../assets/feature-1.png";
import feature2 from "../../assets/feature-2.png";
import feature3 from "../../assets/feature-3.png";

const FeaturedDest = () => {
    return (
        <div>
            <h1 className="text-4xl font-semibold mb-10 max-lg:text-center">Featured Destinations</h1>
            <div className="grid grid-cols-1  lg:grid-cols-3  gap-6">
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="p-3">
                        <img src={feature1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Stopover opportunity in İstanbul with Turkish Airlines</h2>
                        <div className="card-actions w-full">
                            <button className="btn btn-warning w-2/3 mx-auto">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="p-3">
                        <img src={feature2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Discover the timeless city of Turkish Airlines</h2>
                        <div className="card-actions w-full">
                            <button className="btn btn-warning w-2/3 mx-auto">View More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-2xl">
                    <figure className="p-3">
                        <img src={feature3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">The best of Abu Dhabi with exclusive Etihad Airways!</h2>
                        <div className="card-actions w-full">
                            <button className="btn btn-warning w-2/3 mx-auto">View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedDest;