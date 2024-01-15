const categories = [
  "All",
  "Buttons",
  "Loaders",
  "Icons",
  "Carousels",
  "Form Fields",
  "Hover Effects",
  "Text Animations",
  "Miscellaneous",
];

export default function Home() {
  return (
    <>
      <header className="flex flex-col items-center justify-center min-h-screen bg-red-100">
        <h1 className="my-8 text-5xl">CSS and JS Code Snippets</h1>
        <p>Find real-world code snippets to use in your projects!</p>
      </header>
      <main className="w-4/5 mx-auto my-8">
        <section className="space-y-6">
          <div className="flex justify-between">
            <h2 className="text-3xl">Snippets</h2>
            <button>Search</button>
          </div>
          <ul className="flex justify-between">
            {categories.map((category) => (
              <li
                key={category}
                className="border-2 border-purple-700 rounded-full px-4 py-0.5 text-purple-700 font-medium cursor-pointer"
              >
                {category}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}