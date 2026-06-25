export default function Footer() {
  return (
    <footer className="border-t border-purple-900/20 px-4 md:px-10 py-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-white/20 text-sm">© 2026 JERSEY ZONE • عيش شغفك، البس هويتك</p>
      <div className="flex gap-4">
        <a href="#" className="text-white/15 hover:text-[#A020F0] transition text-lg"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-white/15 hover:text-[#A020F0] transition text-lg"><i className="fab fa-facebook"></i></a>
        <a href="#" className="text-white/15 hover:text-[#A020F0] transition text-lg"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-white/15 hover:text-[#A020F0] transition text-lg"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  );
}