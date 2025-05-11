export default function ToastNotification({ message, type = 'success' }) {
  if (!message) return null;

  const bgColor = type === 'success' ? 'bg-green-600' : 'bg-red-600';

  return (
    <div className={`${bgColor} fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow-lg animate-fade-out`}>
      {message}
    </div>
  );
}