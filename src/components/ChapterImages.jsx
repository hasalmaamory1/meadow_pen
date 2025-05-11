export default function ChapterImages({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {images.map((img, idx) => (
        <div key={idx} className="bg-gray-800 p-2 rounded shadow-md text-center">
          <img src={img.src} alt={`Chapter ${img.chapter}`} className="w-full h-auto rounded" />
          <p className="mt-2">Chapter {img.chapter}</p>
        </div>
      ))}
    </div>
  );
}