// src/data/mockAgencies.ts
export interface Agency {
  id: number;
  name: string;
  location: string;
  properties: number; // number of properties they manage
  popularity?: number; // optional for sorting
}

export const agencies: Agency[] = [
  {
    id: 1,
    name: "Prime Estates",
    location: "Nairobi",
    properties: 120,
    popularity: 100,
  },
  {
    id: 2,
    name: "Luxury Homes Ltd",
    location: "Mombasa",
    properties: 85,
    popularity: 90,
  },
  {
    id: 3,
    name: "Green Valley Realty",
    location: "Kisumu",
    properties: 60,
    popularity: 80,
  },
  {
    id: 4,
    name: "Urban Nest Agency",
    location: "Nairobi",
    properties: 95,
    popularity: 95,
  },
  {
    id: 5,
    name: "Sunrise Property Group",
    location: "Nakuru",
    properties: 70,
    popularity: 85,
  },
];
