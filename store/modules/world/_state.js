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
    {name: "Other", slug: "other", code: "OT"},
  ],
  searchResults: [],
  details: false,
  country: null,
  flag: {
    type: 'normal'
  }
})

export default state;