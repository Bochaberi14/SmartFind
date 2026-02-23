import { Property } from "../../types/property";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-indigo-600 font-bold mt-4">
        KES {property.price.toLocaleString()}
      </p>
    </div>
  );
}
