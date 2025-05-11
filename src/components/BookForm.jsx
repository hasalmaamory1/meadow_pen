export default function BookForm({ title, genre, onTitleChange, onGenreChange, onGenerate, loading }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Enter book title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="border border-gray-700 bg-gray-800 text-white p-2 w-full mb-2"
      />
      <select
        value={genre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="border border-gray-700 bg-gray-800 text-white p-2 w-full mb-2"
      >
        <option value="fantasy">Fantasy</option>
        <option value="sci-fi">Sci-Fi</option>
        <option value="mystery">Mystery</option>
        <option value="romance">Romance</option>
      </select>
      <button
        onClick={onGenerate}
        disabled={loading}
        className={`w-full py-2 px-4 bg-teal-600 text-white rounded ${loading ? 'opacity-50' : ''}`}
      >
        {loading ? 'Generating...' : 'Generate 1000-Page Book'}
      </button>
    </div>
  );
}