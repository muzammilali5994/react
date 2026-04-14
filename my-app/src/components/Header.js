function Header() {
  return (
    <header className="flex justify-between items-center p-5 shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">MyWebsite</h1>

      <nav className="space-x-6">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">About</a>
        <a href="#" className="hover:text-blue-500">Services</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </nav>
    </header>
  );
}

export default Header;