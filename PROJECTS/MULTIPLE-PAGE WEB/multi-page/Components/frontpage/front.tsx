import React from "react";


const Front = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            <div className="w-full md:w-1/2 bg-gradient-to-b from-yellow-300 to-orange-400 text-white flex flex-col justify-center items-center p-8">
                <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <img src="https://placehold.co/50x50" alt="Gift logo" className="w-12 h-12"/>
                    </div>
                    <div className="flex space-x-12 text-black font-bold text-lg">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">About</a>
                        <a href="#" className="hover:underline">Our gifts</a>
                        <a href="#" className="hover:underline">Shop</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                    </div>
                </div>
                <h1 className="text-4xl font-bold">Our Best</h1>
                <h2 className="text-6xl font-bold mt-2 text-black">Gifts Shop</h2>
                <p className="mt-4 text-center">Discover the perfect gift for every occasion at our shop. From birthdays to anniversaries, we have a wide range of unique and thoughtful gifts that will make your loved ones feel special and cherished.</p>
            </div>
            <div className="w-full md:w-1/2">
                <img src="https://placehold.co/600x800" alt="A beautifully wrapped gift box with a purple ribbon" className="w-full h-full object-cover"/>
            </div>
        </div>
    );
};

export default Front;