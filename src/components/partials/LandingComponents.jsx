import React from "react";
import HeroImage from "../../assets/hero-image.jpg";

// importing components
import Button from "../Button";
import SpecialsCard from "../SpecialsCard";
import TestimonialCard from "../TestimonialCard";

// importing assets
import greekSalad from "../../assets/greek-salad.jpg";
import lemonDessert from "../../assets/lemon-desert.jpg";
import restrauntImage from "../../assets/restaurant.jpg";
import chefGarnish from "../../assets/chef-garnish.jpg";

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
        <Button>Reserve Table</Button>
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
    <section className="px-28 py-24 text-black-color">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Weekly Specials</h1>
        <Button>Online Menu</Button>
      </div>
      <div className="mt-20 flex justify-around align-center">
        <SpecialsCard
          image={greekSalad}
          name={"Greek Salad"}
          cost={12.99}
          description={`lorem ipsum dolor sit amet
              with tasty sausages and
              creamy leaves, you should
              try it and you will love it.`}
          link={`somelink`}
        />
        <SpecialsCard
          image={greekSalad}
          name="Bruchetta"
          cost={12.99}
          description={`lorem ipsum dolor sit amet
              with tasty sausages and
              creamy leaves, you should
              try it and you will love it.`}
          link={`bruchetta`}
        />
        <SpecialsCard
          image={lemonDessert}
          name="Lemon Dessert"
          cost={12.99}
          description={`lorem ipsum dolor sit amet
          with tasty sausages and
          creamy leaves, you should
          try it and you will love it.`}
          link={`lemon-desert`}
        />
      </div>
    </section>
  );
};

export const Testimonials = () => {
  return (
    <section className="px-28 py-24 bg-green-color">
      <h2 className="text-4xl font-bold text-center text-yellow-color font-serif">
        Testimonials
      </h2>
      <div role={`testimonials`} className="mt-12 flex justify-around">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export const BottomHero = () => {
  return (
    <section className="px-28 py-24 flex justify-between items-center gap-32">
      <div className="pr-8">
        <h1 className="text-5xl  font-semibold font-serif">Little Lemon</h1>
        <code className="font-sans text-lg font-normal">Chicago</code>
        <br />
        <br />
        <br />
        <p className=" text-2xl font-sans">
          We serve contemporary American cuisine With a diverse menu of
          breakfast, sandwiches, salads, entrees and signature cocktails,
          coffee, wine, and beer.
        </p>
        <br />
        <br />
        <br />
        <Button>Reserve Table</Button>
      </div>
      <div class="relative w-full h-full">
        <img
          class="absolute object-cover"
          src={restrauntImage}
          alt="Background Image"
          width={300}
          height={500}
        />
        <img
          class="absolute top-0 right-0 object-cover"
          src={chefGarnish}
          alt="Overlapping Image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export const CTA = () => {
  return (
    <section className="text-center px-28 py-24">
      <h1 className="text-4xl font-bold">So, what are you waiting for?</h1>
      <br />
      <Button>Reserve table</Button>
    </section>
  );
};
