export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Diligence. Todos los derechos reservados.</p>
        <p className="text-xs mt-2">Hecho con ❤️ por el equipo de Diligence</p>
      </div>
    </footer>
  )
}
