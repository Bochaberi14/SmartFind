import { useState } from "react";
import { agencies } from "../../data/mockAgencies";

export default function FindAgency() {
  const [location, setLocation] = useState("");

  const filteredAgencies = agencies.filter((a) =>
    location ? a.location.toLowerCase().includes(location.toLowerCase()) : true
  );

  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative min-h-[50vh] flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(/src/assets/images/agencyHero.jpg)`, backgroundSize: "cover" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-indigo-600/50 to-black/50"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            In need of an agent to sell, buy or rent a property? We have just the right match for you
          </h1>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-black w-full max-w-xl mx-auto flex gap-4">
            <input
              id="agency-location"
              type="text"
              placeholder="Enter location"
              className="border p-2 rounded-xl flex-1"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:opacity-90 transition font-semibold"
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* AGENCIES */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {filteredAgencies.map((agency) => (
          <div key={agency.id} className="bg-white p-4 rounded-2xl shadow-lg text-black">
            <h3 className="text-xl font-bold">{agency.name}</h3>
            <p className="text-gray-700">{agency.location}</p>
            <p className="text-gray-700">{agency.properties} Properties</p>
          </div>
        ))}
      </section>
    </div>
  );
}
