import bgBanner from "../../assets/cover.png";
import { FaSearch } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="h-screen lg:h-[76vh] flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${bgBanner})` }}>
            <div className="mx-8 lg:mx-28 w-full space-y-4">
                <div>
                    <h2 className="text-white text-2xl lg:text-4xl max-md:text-center lg:pl-10 max-md:pt-12">Welcome To <span className="font-bold text-sky-600">AirBook</span></h2>
                </div>
                <div className="bg-white p-5 md:p-10 rounded-lg space-y-3">
                    <div className="flex justify-between max-md:flex-col max-md:gap-3">
                        <div className="flex gap-3 max-md:justify-center">
                            <div className="form-control bg-slate-100 rounded-lg px-1">
                                <label className="label cursor-pointer">
                                    <input type="radio" name="radio-10" className="radio radio-sm" />
                                    <span className="label-text text-xs pl-1">One Way</span>
                                </label>
                            </div>
                            <div className="form-control bg-slate-100 rounded-lg px-1">
                                <label className="label cursor-pointer">
                                    <input type="radio" name="radio-10" className="radio  radio-sm" />
                                    <span className="label-text text-xs pl-1">Round Trip</span>
                                </label>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <select className="select select-sm text-xs w-full max-w-xs bg-sky-100 text-sky-600">
                                <option selected>1 Traveler</option>
                                <option>2 Traveler</option>
                                <option>2 Traveler</option>
                            </select>
                            <select className="select select-sm text-xs w-full max-w-xs bg-sky-100 text-sky-700">
                                <option selected>Economy</option>
                                <option>Business</option>
                            </select>
                        </div>
                    </div>
                    {/* boxes and search button */}
                    <div className="flex max-lg:flex-col justify-evenly items-center gap-3">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                            <div className="flex items-center border rounded-lg p-3">
                                <div className="pr-2">
                                    <h3 className="font-semibold">DAC</h3>
                                </div>
                                <div className="border-l pl-2">
                                    <h3 className="font-semibold">Dhaka</h3>
                                    <p className="text-xs">Hazrat Shajalal Internatio</p>
                                </div>
                            </div>

                            <div className="flex items-center border rounded-lg p-3">
                                <div className="pr-2">
                                    <h3 className="font-semibold">DAC</h3>
                                </div>
                                <div className="border-l pl-2">
                                    <h3 className="font-semibold">Dhaka</h3>
                                    <p className="text-xs">Hazrat Shajalal Internatio</p>
                                </div>
                            </div>
                            <div className="flex items-center border rounded-lg p-3">
                                <div className="pr-2">
                                    <h3 className="font-semibold">DAC</h3>
                                </div>
                                <div className="border-l pl-2">
                                    <h3 className="font-semibold">Dhaka</h3>
                                    <p className="text-xs">Hazrat Shajalal Internatio</p>
                                </div>
                            </div>
                            <div className="flex items-center border rounded-lg p-3">
                                <div className="pr-2">
                                    <h3 className="font-semibold">DAC</h3>
                                </div>
                                <div className="border-l pl-2">
                                    <h3 className="font-semibold">Dhaka</h3>
                                    <p className="text-xs">Hazrat Shajalal Internatio</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn max-md:w-[72%] max-lg:w-[76%] lg:btn-lg btn-warning"><FaSearch className="text-white text-2xl" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;