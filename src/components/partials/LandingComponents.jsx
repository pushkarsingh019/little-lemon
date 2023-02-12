import React from "react";
import HeroImage from "../../assets/hero-image.jpg";

export function HeroSection() {
  return (
    <section className="bg-green-color px-28 py-24 flex justify-between items-center gap-32">
      <div className="pr-8">
        <h1 className="text-7xl  font-semibold font-serif text-yellow-color">
          Little Lemon
        </h1>
        <code className="text-yellow-color font-sans text-lg font-normal">
          Chicago
        </code>
        <br />
        <br />
        <br />
        <p className="text-grey-color text-2xl font-sans">
          We serve contemporary American cuisine With a diverse menu of
          breakfast, sandwiches, salads, entrees and signature cocktails,
          coffee, wine, and beer.
        </p>
        <br />
        <br />
        <br />
        <button className="py-4 px-8 bg-yellow-color text-lg rounded-2xl text-black-color font-semibold">
          Reserve Table
        </button>
      </div>
      <img
        src={HeroImage}
        alt="Little lemon restraunt image"
        width={450}
        height={250}
        className="rounded-2xl border-solid border-2 border-black-color"
      />
    </section>
  );
}

export const WeeklySpecials = () => {
  return (
    <section className="px-28 py-24">
      <h1 className="text-3xl font-semibold">Weekly Specials</h1>
    </section>
  );
};
