const planets = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

export default function Navbar({currentPage, setPage}) {
  return (
    <nav className="flex justify-center gap-8 flex-wrap p-5">
      {planets.map((planetName, index) => {
        return (
          <button
            onClick={function (x) {
              setPage(planetName);
              // if (
              //   x.target.innerText.toLowerCase() != currentPage.toLowerCase()
              // ) {
              //   const index = planets.indexOf(planetName);
              //   planets.splice(index, 1);
              //   planets.push(planetName);
              // }
            }}
            className={`text-sm uppercase tracking-[0.3em] transition-colors active:text-gray-600 hover:text-white ${currentPage === planetName ? "text-white" : "text-white/40"}`}
            key={index}
          >
            {planetName}
          </button>
        );
      })}
    </nav>
  );
}
