import React from "react";

const totalSeats = 80;

const SeatMap = ({ selectedSeats, setSelectedSeats, filter }) => {
  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      if (selectedSeats.length < 80 && selectedSeats.length < 8) {
        setSelectedSeats([...selectedSeats, seatNumber]);
      } else {
        alert("You can only select up to 80 seats. or 8 seats");
      }
    }
  };

  const filteredSeats = Array.from({ length: totalSeats }, (_, i) => i + 1).filter((seat) => {
    if (filter === "booked") return selectedSeats.includes(seat);
    if (filter === "available") return !selectedSeats.includes(seat);
    return true;
  });

  return (
    <div className="bg-white border border-gray-300 p-6 rounded-md shadow-sm max-w-4xl mx-auto mt-6">
      <div className="grid grid-cols-10 gap-2 justify-center">
        {filteredSeats.map((seatNumber) => {
          const isSelected = selectedSeats.includes(seatNumber);

          return (
            <button
              key={seatNumber}
              onClick={() => handleSeatClick(seatNumber)}
              className={`w-10 h-10 rounded border text-sm font-medium transition-all duration-150
                ${isSelected
                  ? "bg-orange-100 border-orange-500 text-orange-600"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-green-100 hover:border-green-500"}
              `}
            >
              {seatNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SeatMap;







