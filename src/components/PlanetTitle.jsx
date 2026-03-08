const subtitles = {
    Mercury: "The First - Messenger",
    Venus: "The Second - Love",
    Earth: "The Third - World",
    Mars: "The Fourth - War",
    Jupiter: "The Fifth - King",
    Saturn: "The Sixth - Time",
    Uranus: "The Seventh - Sky",
    Neptune: "The Eighth - Sea",
}

export default function PlanetTitle({currentPage}) {
    return (
        <section className="absolute w-screen h-screen flex justify-center items-end">
            <div className="h-fit w-fit mb-10 text-center">
                <h1 className="text-6xl font-light tracking-tighter mb-2">{currentPage.toUpperCase()}</h1>
                <h2 className="flex items-center justify-center gap-4 text-[10px] tracking-[0.5em] font-medium opacity-40 uppercase">{subtitles[currentPage]}</h2>
            </div>
        </section>
    );
}