import { useState } from "react";
import estate1 from "../../assets/images/estate1.jpg";
import { properties } from "../../data/mockProperties";
import PropertyCard from "../../components/landing/PropertyCard";
import { Property } from "../../types/property";

export default function Buy() {
  const [filters, setFilters] = useState({
    location: "",
    minPrice: "",
    maxPrice: "",
    type: "",
    petFriendly: false,
    balcony: false,
    swimmingPool: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;

    setFilters({
      ...filters,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const filtered = properties
    .filter((p) => p.category === "buy")
    .filter((p) =>
      filters.location
        ? p.location.toLowerCase().includes(filters.location.toLowerCase())
        : true
    )
    .filter((p) => (filters.type ? p.type === filters.type : true))
    .filter((p) => (filters.minPrice ? p.price >= Number(filters.minPrice) : true))
    .filter((p) => (filters.maxPrice ? p.price <= Number(filters.maxPrice) : true))
    .filter((p) => (filters.petFriendly ? p.petFriendly === true : true))
    .filter((p) => (filters.balcony ? p.balcony === true : true))
    .filter((p) => (filters.swimmingPool ? p.swimmingPool === true : true))
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="pt-24">

      {/* HERO */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: `url(${estate1})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-indigo-600/50 to-black/50"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">
            Kenya’s No.1 Real Estate App
          </h1>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-black grid md:grid-cols-3 gap-4">

            <div>
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                id="location"
                name="location"
                placeholder="Location"
                className="border p-2 rounded-xl w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="minPrice" className="sr-only">
                Minimum Price
              </label>
              <input
                id="minPrice"
                name="minPrice"
                placeholder="Min Price"
                type="number"
                className="border p-2 rounded-xl w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="maxPrice" className="sr-only">
                Maximum Price
              </label>
              <input
                id="maxPrice"
                name="maxPrice"
                placeholder="Max Price"
                type="number"
                className="border p-2 rounded-xl w-full"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="property-type" className="sr-only">
                Property Type
              </label>
              <select
                id="property-type"
                name="type"
                className="border p-2 rounded-xl w-full"
                onChange={handleChange}
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="petFriendly"
                name="petFriendly"
                onChange={handleChange}
              />
              <label htmlFor="petFriendly">Pet Friendly</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="balcony"
                name="balcony"
                onChange={handleChange}
              />
              <label htmlFor="balcony">Balcony</label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="swimmingPool"
                name="swimmingPool"
                onChange={handleChange}
              />
              <label htmlFor="swimmingPool">Swimming Pool</label>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {filtered.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}
