import { useState } from "react";
import estate3 from "../../assets/images/estate3.jpg";
import { properties } from "../../data/mockProperties";
import PropertyCard from "../../components/landing/PropertyCard";
import { Property } from "../../types/property";

export default function Rent() {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filtered = properties
    .filter((p) => p.category === "rent")
    .filter((p) =>
      filters.location
        ? p.location.toLowerCase().includes(filters.location.toLowerCase())
        : true
    )
    .filter((p) => (filters.type ? p.type === filters.type : true))
    .filter((p) => (filters.minPrice ? p.price >= Number(filters.minPrice) : true))
    .filter((p) => (filters.maxPrice ? p.price <= Number(filters.maxPrice) : true))
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="pt-24">
      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${estate3})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-indigo-600/50 to-black/50"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Want to rent a property? SmartFind has got you covered
          </h1>
          <p className="mb-6 text-lg md:text-xl">
            Rent a property near you with ease. Just enter the location, price, and type.
          </p>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-black grid md:grid-cols-3 gap-4">
            <input
              id="rent-location"
              name="location"
              placeholder="Location"
              className="border p-2 rounded-xl w-full"
              onChange={handleChange}
            />

            <input
              id="rent-min-price"
              name="minPrice"
              type="number"
              placeholder="Min Price"
              className="border p-2 rounded-xl w-full"
              onChange={handleChange}
            />

            <input
              id="rent-max-price"
              name="maxPrice"
              type="number"
              placeholder="Max Price"
              className="border p-2 rounded-xl w-full"
              onChange={handleChange}
            />

            {/* Added label for accessibility */}
            <div className="flex flex-col">
              <label htmlFor="rent-type" className="mb-1 text-black font-medium">
                Property Type
              </label>
              <select
                id="rent-type"
                name="type"
                className="border p-2 rounded-xl w-full"
                onChange={handleChange}
              >
                <option value="">Select type</option>
                <option value="2-bedroom-house">2 Bedroom House</option>
                <option value="1-bedroom-house">1 Bedroom House</option>
                <option value="bedsitter">Bedsitter</option>
                <option value="single-room">Single Room</option>
                <option value="land">Land</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {filtered.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </section>
    </div>
  );
}
