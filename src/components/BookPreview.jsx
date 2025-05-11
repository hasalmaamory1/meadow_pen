export default function BookPreview({ content }) {
  return (
    <section style={{ backgroundColor: '#1f2937', padding: '1rem', borderRadius: '0.5rem' }}>
      <h2 className="text-xl font-bold mb-2">Book Preview</h2>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: '1rem', lineHeight: '1.5' }}>
        {content.slice(0, 1000)}...
      </pre>
    </section>
  );
}