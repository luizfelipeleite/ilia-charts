export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container py-6">
      <p className="text-sm text-gray-500">ília Charts © {currentYear}</p>
    </footer>
  );
}