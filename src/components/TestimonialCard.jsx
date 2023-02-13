import fullstar from "../assets/star.svg";
import profileImage from "../assets/gavin-belson.jpg";

const TestimonialCard = ({
  numberOfStars,
  profileImage,
  name,
  testimonial,
}) => {
  return (
    <div className="h-48 w-48 bg-grey-color rounded-2xl">
      <div role={`testimonials stars`} className="flex px-4 py-4">
        <img src={fullstar} alt="star" />
        <img src={fullstar} alt="star" />
        <img src={fullstar} alt="star" />
        <img src={fullstar} alt="star" />
      </div>
      <div className="px-4 font-sans font-medium">
        <p>The best food ever. The service is great here !</p>
      </div>
      <div className="px-4 py-3 flex justify-between items-center">
        <img
          alt="image"
          src={profileImage}
          className="w-8 h-8 bg-green-color rounded-full"
        ></img>
        <p className="mr-3">Gavin Belson</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
