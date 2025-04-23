import Link from "next/link"
import { ArrowRight, Code, Calculator, Users, Calendar, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 backdrop-blur-lg bg-gray-950/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">COMC</span>
              <span className="text-gray-400">|</span>
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">CP</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Acerca de
              </Link>
              <Link href="#activities" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Actividades
              </Link>
              <Link href="#team" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Equipo
              </Link>
              <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="border-gray-700 hover:bg-gray-800 hover:text-white transition-all">
            Unirse <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.2),transparent_60%)]"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Optimización y Programación
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300 sm:text-xl">
            Explora el mundo de la optimización matemática computacional y la programación con nuestros clubes
            especializados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20">
              COMC <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/20">
              CP <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Nuestros Clubes
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="group bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-purple-500/10 hover:border-purple-500/30">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-purple-500/10 text-purple-400">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                Club de Optimización Matemática Computacional
              </h3>
              <p className="text-gray-400 mb-4">
                Exploramos algoritmos y técnicas para resolver problemas de optimización matemática, desde programación
                lineal hasta métodos heurísticos avanzados.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="mr-2 h-1 w-1 rounded-full bg-purple-500"></div>
                  Algoritmos de optimización
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="mr-2 h-1 w-1 rounded-full bg-purple-500"></div>
                  Modelado matemático
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="mr-2 h-1 w-1 rounded-full bg-purple-500"></div>
                  Resolución de problemas complejos
                </li>
              </ul>
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0">
                Conocer más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="group bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/30">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-blue-500/10 text-blue-400">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                Club de Programación
              </h3>
              <p className="text-gray-400 mb-4">
                Desarrollamos habilidades de programación a través de desafíos, competencias y proyectos colaborativos
                utilizando diversos lenguajes y tecnologías.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-300">
                  <div className="mr-2 h-1 w-1 rounded-full bg-blue-500"></div>
                  Competencias de programación
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="mr-2 h-1 w-1 rounded-full bg-blue-500"></div>
                  Desarrollo de software
                </li>
                <li className="flex items-center text-gray-300">
                  <div className="mr-2 h-1 w-1 rounded-full bg-blue-500"></div>
                  Algoritmos y estructuras de datos
                </li>
              </ul>
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 p-0">
                Conocer más <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Actividades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gray-900/70 border-gray-800 hover:border-blue-500/30 transition-all group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <Calendar className="h-16 w-16 text-gray-700 group-hover:text-blue-400 transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Talleres Semanales</h3>
                <p className="text-gray-400">
                  Sesiones prácticas donde exploramos conceptos avanzados de optimización y programación.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/70 border-gray-800 hover:border-purple-500/30 transition-all group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center">
                <Users className="h-16 w-16 text-gray-700 group-hover:text-purple-400 transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Competencias</h3>
                <p className="text-gray-400">
                  Participamos en competencias nacionales e internacionales de programación y optimización.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/70 border-gray-800 hover:border-cyan-500/30 transition-all group overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <Code className="h-16 w-16 text-gray-700 group-hover:text-cyan-400 transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Proyectos</h3>
                <p className="text-gray-400">
                  Desarrollamos proyectos colaborativos aplicando técnicas de optimización y programación.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="aspect-square mb-4 rounded-xl bg-gray-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:opacity-70 opacity-40 transition-opacity"></div>
                </div>
                <h3 className="text-lg font-bold">Miembro {i}</h3>
                <p className="text-gray-400">Cargo / Especialidad</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Únete a Nosotros
            </h2>
            <p className="text-gray-300 mb-8">
              ¿Interesado en la optimización matemática o la programación? Únete a nuestros clubes y forma parte de una
              comunidad apasionada por resolver problemas complejos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg shadow-purple-500/20">
                Contactar <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                Más Información
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center gap-2 font-bold text-xl">
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">COMC</span>
                <span className="text-gray-400">|</span>
                <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">CP</span>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Contacto
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} COMC & CP. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
