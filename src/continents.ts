interface Continent {
  name: string;
  area: {
    /** Number between 0-100 */
    pctOfTotal: number;
    sqKm: number;
    sqMiles: number;
  };
  highestPoint: string;
  population: {
    people: {
      count: number;
      unit?: "million" | "billion";
    };
    /** Number between 0-100 */
    pctOfTotal: number;
  };
}

export const ASIA: Continent = {
  name: "Asia",
  area: {
    sqKm: 44_614_000,
    sqMiles: 17_226_000,
    pctOfTotal: 29.8,
  },
  highestPoint: "Mount Everest",
  population: {
    people: { count: 4.6, unit: "billion" },
    pctOfTotal: 60,
  },
};

export const OCEANIA: Continent = {
  name: "Oceania",
  area: {
    sqKm: 8_510_900,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Puncak Jaya",
  population: {
    people: { count: 42, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const EUROPA: Continent = {
  name: "Europa",
  area: {
    sqKm: 14_200_200,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Elbrus",
  population: {
    people: { count: 751, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const ANTARCTICA: Continent = {
  name: "Antarctica",
  area: {
    sqKm: 10_530_751,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Vinson Peack",
  population: {
    people: { count: 0.01, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const AMERICA: Continent = {
  name: "America",
  area: {
    sqKm: 10_530_751,
    sqMiles: 3_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Elbrus",
  population: {
    people: { count: 331, unit: "million" },
    pctOfTotal: 0.54,
  },
};

export const AFRICA: Continent = {
  name: "Africa",
  area: {
    sqKm: 30_530_751,
    sqMiles: 11_286_100,
    pctOfTotal: 5.7,
  },
  highestPoint: "Kilimanjaro",
  population: {
    people: { count: 1.4, unit: "billion" },
    pctOfTotal: 0.54,
  },
};
