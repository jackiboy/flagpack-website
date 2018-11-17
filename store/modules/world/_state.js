const state = () => ({
  countries: [],
  continents: [
    {name: "World", slug: "world", code: "WORLD"},
    {name: "North America", slug: "north-america", code: "NA"},
    {name: "South America", slug: "south-america", code: "SA"},
    {name: "Africa", slug: "africa", code: "AF"},
    {name: "Asia", slug: "asia", code: "AS"},
    {name: "Europe", slug: "europe", code: "EU"},
    {name: "Oceania", slug: "oceania", code: "OC"},
  ],
  searchResults: [],
  details: false,
  country: null
})

export default state;