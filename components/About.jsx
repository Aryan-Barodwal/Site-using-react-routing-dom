import React from "react";


export default function About() {
    return (
        <div className="py-10 bg-white">
            <div className="container m-auto px-6 text-gray-600">
            {/* md:px-12 xl:px-6 */}
                <div className="space-y-6 flex justify-center md:space-y-0 md:flex md:items-center md:gap-6 lg:items-center lg:gap-12">

                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>

                    <div className="md:7/12 lg:w-6/12 flex flex-col justify-center ">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl
                         text-left">
                            The new Miracle Teams is now <span className="text-left">available
                            </span>
                        </h2>
                        <p className="mt-2 w-[80%] text-gray-600 text-left">
                            Collaborate more effectively with a faster, simpler,
                            smarter, and more flexible Teams.
                        </p>
                        <div className="flex gap-3 items-center">
                            <button type="button" className="w-[40%] text-sky-700 border-2 border-sky-700 px-4 py-1 hover:bg-[#E1DFF2]">
                                Learn About New Teams
                            </button>
                            <button className="bg-sky-700 text-white px-4 py-[0.35rem] hover:bg-sky-500" type="button">
                                More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

          

        </div>
    );
}
