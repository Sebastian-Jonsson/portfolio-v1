import React from "react";
import image from "../images/pexels-johannes.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="johannes plenio" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="lg:text-6xl text-yellow-100 font-bold cursive leading-none lg:leading-snug">
                    Hey,<br/> I'm Sebastian.
                </h1>
            </section>
        </main>
    )
}