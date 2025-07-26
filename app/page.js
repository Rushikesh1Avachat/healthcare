"use client";
import React, { useState } from "react";
import SeatMap from "@/components/SeatMap";
import InfoPanel from "@/components/InfoPanel";

export default function HomePage() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [filter, setFilter] = useState("reset" || "all"); // "all" | "booked" | "available"

  return (
    <main className="max-w-5xl mx-auto mt-10 p-4">
 

      <InfoPanel
        selectedSeats={selectedSeats}
        filter={filter}
        setFilter={setFilter}
      />

      <SeatMap
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        filter={filter}
      />
    </main>
  );
}

