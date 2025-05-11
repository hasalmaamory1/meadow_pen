export default function ChapterNavigation({ chapterCount, currentChapter, onSelectChapter }) {
  return (
    <aside className="bg-gray-800 p-4 rounded shadow-md">
      <h3 className="font-semibold mb-2">Chapters</h3>
      <ul>
        {Array.from({ length: chapterCount }).map((_, i) => (
          <li key={i + 1}>
            <button
              onClick={() => onSelectChapter(i + 1)}
              className={`block w-full text-left px-3 py-2 rounded hover:bg-gray-700 ${
                currentChapter === i + 1 ? 'bg-teal-700' : ''
              }`}
            >
              Chapter {i + 1}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}