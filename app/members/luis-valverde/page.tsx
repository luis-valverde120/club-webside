export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a la página de Luis Valverde</h1>
      <p className="text-lg text-gray-700 mb-6">
        ¡Hola! Soy Luis Valverde, y esta es mi página personal. Aquí encontrarás información sobre mí y mis proyectos.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Conoce más sobre mí
      </button>
    </div>
  )
}