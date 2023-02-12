const SpecialsCard = ({ image, name, cost, description, link }) => {
  return (
    <div className="w-72 bg-grey-color rounded-tr-2xl rounded-tl-2xl rounded-br-none rounded-bl-none ">
      <img
        src={image}
        alt={name}
        className="rounded-tr-2xl rounded-tl-2xl rounded-br-none rounded-bl-none h-44 w-72"
      />
      <div className="px-6 pb-6">
        <div className="flex justify-between mt-9 align-center">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-xl font-medium text-orange-color">${cost}</p>
        </div>
        <p className="my-6 text-base">{description}</p>
        <a href={link} className="font-semibold">
          Order a delivery
        </a>
      </div>
    </div>
  );
};

export default SpecialsCard;
