import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import card1 from "@/assets/card1.png";
import card2 from "@/assets/card2.jpg";
import card3 from "@/assets/card3.jpg";
import card4 from "@/assets/card4.jpg";
import card5 from "@/assets/card5.jpg";
import card6 from "@/assets/card6.jpg";

const tickets = [
  { title: "VISITOR 3 DAY ACCESS TICKET", badge: null, details: "View Details →", features: ["Access to Conference & Investor Lounge", "All Keynotes Events", "All Conference Tracks", "3 Days Access to the Show"], price: "USD 32.5 incl. 20% VAT", color: "bg-purple-800", bgImage: card1 },
  { title: "VISITOR 3 DAY ACCESS TICKET", badge: null, details: "View Details →", features: ["Access to Conference & Investor Lounge", "All Keynotes Events", "All Conference Tracks", "3 Days Access to the Show"], price: "FREE", color: "bg-orange-600", bgImage: card2 },
  { title: "VISITOR 3 DAY ACCESS TICKET", badge: "EXCLUSIVE", details: "View Details →", features: ["Access to Conference & Investor Lounge", "All Keynotes Events", "All Conference Tracks", "3 Days Access to the Show"], price: "FREE", color: "bg-green-700", bgImage: card3 },
  { title: "VISITOR 3 DAY ACCESS TICKET", badge: "GCC ONLY", details: "View Details →", features: ["Access to Conference & Investor Lounge", "All Keynotes Events", "All Conference Tracks", "3 Days Access to the Show"], price: "FREE", color: "bg-red-800", bgImage: card4 },
  { title: "VISITOR 3 DAY ACCESS TICKET", badge: null, details: "View Details →", features: ["Access to Conference & Investor Lounge", "All Keynotes Events", "All Conference Tracks", "3 Days Access to the Show"], price: "FREE", color: "bg-green-600", bgImage: card5 },
  { title: "VISITOR 3 DAY ACCESS TICKET", badge: null, details: "View Details →", features: ["Access to Conference & Investor Lounge", "All Keynotes Events", "All Conference Tracks", "3 Days Access to the Show"], price: "FREE", color: "bg-blue-700", bgImage: card6 }
];

const TicketCardSkeleton = () => (
  <div className="rounded-xl bg-gray-100 animate-pulse h-[350px] w-full"></div>
);

const TicketCard = ({ ticket }) => {
  return (
    <div
      className="relative rounded-xl overflow-hidden text-white shadow-lg"
      style={{ backgroundImage: `url(${ticket.bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10"></div>
      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full z-10"></div>
      <div className={`p-3 ${ticket.color} bg-opacity-90`}>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold uppercase">{ticket.title}</h3>
          {ticket.badge && (
            <span className="text-xs bg-white text-green-600 px-2 py-1 rounded font-bold">{ticket.badge}</span>
          )}
        </div>
        <p className="text-xs text-green-200 underline cursor-pointer">{ticket.details}</p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>
        <div className="relative p-4 space-y-2">
          {ticket.features.map((feature, i) => (
            <div className="flex items-start gap-2 text-sm" key={i}>
              <CheckCircle className="w-5 h-5 text-green-400 mt-3" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3 flex justify-between items-center border-t border-gray-700 bg-black bg-opacity-70">
        <span className="text-xs font-bold text-white">{ticket.price}</span>
        <button className="bg-white text-black text-xs font-bold px-4 py-1 rounded" onClick={() => window.location.href = "/register"}>BUY NOW</button>
      </div>
    </div>
  );
};

const Ticket = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header step={4} />
      <div className="bg-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <TicketCardSkeleton key={i} />)
            : tickets.map((ticket, i) => <TicketCard key={i} ticket={ticket} />)
          }
        </div>
      </div>
      <Footer />
      <div className="py-4 text-white" style={{ background: "linear-gradient(90deg, #27963D 0%, #134323 100%)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-end items-center px-4 gap-3 mr-7">
          <div className="flex flex-col items-end">
            <div className="text-sm whitespace-nowrap">
              <span className="mr-1">Total:</span>
              <span className=" text-2xl font-bold">EUR 0</span>
              <span className="ml-1 text-md">Incl. 19% VAT</span>
            </div>
            <div className="text-xs">View Ticket Summary</div>
          </div>
          <button className="bg-white text-green-700 font-semibold text-sm px-4 py-2 rounded hover:bg-gray-100 cursor-pointer">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Ticket;
