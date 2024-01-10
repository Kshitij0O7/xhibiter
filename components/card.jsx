import React from "react"; // Make sure to import React

const Card = ({ sliderData }) => {
  if (!Array.isArray(sliderData)) {
    return <div>No data available</div>; // Handle the case where sliderData is not an array
  }

  return (
    <div>
      {sliderData.map((data, index) => (
        <div
          key={index} // Unique key for each card
          className="card h-96 border-[--primary] border-4 w-96 bg-[primary] shadow-base rounded-[25px]"
          // onClick={onClick} // Define or pass this function as needed
        >
          <img
            src={data.imgUrl}
            alt={`Slide ${index + 1}`} // Adding an alt attribute for accessibility
            className="h-full w-full  p-2 border-0 align-middle rounded-[25px] object-cover bg-no-repeat" // Adjusted className for image
          />
          <p>{data.postedBy}</p>
          <p className="font-bold text-xl text-center">{data.title}</p>

          {/* Additional card content can go here */}
        </div>
      ))}
    </div>
  );
};

export default Card;
