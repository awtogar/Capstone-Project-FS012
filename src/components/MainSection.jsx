
import React from "react";
import SectionBg from "../assets/images/images-1.webp";

const MainSection = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <section id="section-1" className="relative bg-cover bg-center h-96" style={{ backgroundImage: `url(${SectionBg})` }}>
                <div className="container mx-auto flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">Epic Indonesia</h1>
                        <p className="text-xl mb-8">asdasdasdsa</p>
                    </div>
                </div>
            </section>

            <section id="products" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Explore The City</h2>
                    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainSection;
