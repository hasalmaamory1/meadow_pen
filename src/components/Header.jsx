export default function Header({ onLogin, user, onLogout }) {
  return (
    <header style={{ backgroundColor: '#10b981', color: 'white', padding: '1rem', textAlign: 'center' }}>
      <h1 className="text-3xl font-bold">MeadowPen</h1>
      <p>Write, Humanize, and Publish Your Next Novel</p>
      <button onClick={user ? onLogout : onLogin} className="mt-2 px-4 py-2 bg-white text-green-800 rounded hover:bg-gray-100">
        {user ? 'Logout' : 'Login'}
      </button>
    </header>
  );
}