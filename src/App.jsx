import { useState, useEffect } from 'react'
import {
  Zap,
  Shield,
  BarChart3,
  Code2,
  Globe,
  Cpu,
  X,
  ArrowRight,
  ChevronRight,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
} from 'lucide-react'

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-black text-xl tracking-tighter">
          CLOPS<span className="text-emerald-500">TECH</span>
        </span>

        <div className="hidden md:flex items-center gap-8">
          {['Servicios', 'Tecnología', 'Resultados', 'Nosotros'].map((link) => (
            <a
              key={link}
              href="#"
              className="relative text-sm text-slate-400 hover:text-white transition-colors duration-200 group"
            >
              {link}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          onClick={onContactClick}
          className="text-sm text-white border border-white/20 hover:border-emerald-500/50 hover:text-emerald-400 px-5 py-2 rounded-lg transition-all duration-200"
        >
          Contacto
        </button>
      </div>
    </nav>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onContactClick }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background spheres */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs text-slate-300 tracking-wider uppercase">
            Software de próxima generación
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-none mb-6">
          SOFTWARE
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
            FUTURE-PROOF
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed mb-10">
          Construimos soluciones digitales de alto impacto que escalan con tu
          negocio. Arquitectura sólida, diseño excepcional y resultados
          medibles.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onContactClick}
            className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all duration-200"
            style={{
              boxShadow: '0 0 30px rgba(16,185,129,0.35)',
            }}
          >
            Iniciar proyecto
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button className="flex items-center gap-2 text-slate-300 hover:text-white px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm">
            Ver portfolio
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '50+', label: 'Proyectos entregados' },
            { value: '99.9%', label: 'Uptime garantizado' },
            { value: '3x', label: 'Velocidad de entrega' },
            { value: '100%', label: 'Clientes satisfechos' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-black text-white tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
const features = [
  {
    icon: Zap,
    title: 'Alta Performance',
    description:
      'Arquitecturas optimizadas para cargas extremas. Zero downtime, respuesta en milisegundos.',
  },
  {
    icon: Shield,
    title: 'Seguridad Enterprise',
    description:
      'Cifrado end-to-end, autenticación robusta y cumplimiento de estándares internacionales.',
  },
  {
    icon: BarChart3,
    title: 'Analytics en Tiempo Real',
    description:
      'Dashboards inteligentes que transforman datos en decisiones estratégicas accionables.',
  },
  {
    icon: Code2,
    title: 'Código Limpio',
    description:
      'Desarrollo con las mejores prácticas. Código mantenible, escalable y bien documentado.',
  },
  {
    icon: Globe,
    title: 'Deploy Global',
    description:
      'Infraestructura distribuida en múltiples regiones para latencia mínima en todo el mundo.',
  },
  {
    icon: Cpu,
    title: 'IA Integrada',
    description:
      'Modelos de machine learning integrados nativamente en tus flujos de trabajo diarios.',
  },
]

function Features() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-emerald-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Capacidades
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Una plataforma completa para construir, escalar y optimizar
            productos digitales de clase mundial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-white/8 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-emerald-500" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2 tracking-tight">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {f.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Showcase interactivo ─────────────────────────────────────────────────────
const showcaseTabs = [
  {
    id: 0,
    label: 'Innovación',
    headline: 'Pensamos diferente',
    description:
      'No copiamos soluciones del mercado. Diseñamos desde cero con una perspectiva fresca que elimina la deuda técnica desde el día uno.',
    items: [
      'Investigación profunda del dominio',
      'Prototipado rápido con feedback real',
      'Arquitectura diseñada para el futuro',
    ],
    color: 'from-emerald-500 to-teal-400',
  },
  {
    id: 1,
    label: 'Tecnología',
    headline: 'Stack de vanguardia',
    description:
      'Usamos las herramientas correctas para cada problema. Nuestro equipo domina las tecnologías más demandadas del mercado actual.',
    items: [
      'React, Next.js, TypeScript',
      'Node.js, Go, Python (FastAPI)',
      'AWS, GCP, Docker, Kubernetes',
    ],
    color: 'from-blue-500 to-indigo-400',
  },
  {
    id: 2,
    label: 'Resultados',
    headline: 'Métricas que importan',
    description:
      'Cada proyecto se mide contra KPIs concretos. Entregamos valor real, no solo código bonito que nadie usa.',
    items: [
      '+40% conversión promedio en proyectos web',
      '-60% en tiempo de carga vs. versiones previas',
      'ROI positivo en menos de 6 meses',
    ],
    color: 'from-violet-500 to-purple-400',
  },
]

function Showcase() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % showcaseTabs.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const tab = showcaseTabs[active]

  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(16,185,129,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-emerald-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Nuestro enfoque
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Cómo lo hacemos
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex justify-center gap-2 mb-10">
          {showcaseTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === t.id
                  ? 'bg-emerald-500 text-slate-950 font-bold'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
            <div
              key={active}
              className={`h-full bg-gradient-to-r ${tab.color} rounded-full`}
              style={{
                animation: 'progress 4s linear forwards',
              }}
            />
          </div>
        </div>

        {/* Content card */}
        <div className="max-w-3xl mx-auto">
          <div
            key={active}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
            style={{ animation: 'fadeInUp 0.4s ease forwards' }}
          >
            <h3 className="text-3xl font-black tracking-tighter text-white mb-4">
              {tab.headline}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              {tab.description}
            </p>
            <ul className="space-y-3">
              {tab.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0% }
          to   { width: 100% }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px) }
          to   { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTA({ onContactClick }) {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative rounded-3xl border border-white/10 overflow-hidden text-center py-20 px-6"
          style={{
            background:
              'linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(59,130,246,0.08) 100%)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 0%, rgba(16,185,129,0.15) 0%, transparent 60%)',
            }}
          />
          <div className="relative">
            <p className="text-emerald-500 text-sm font-semibold tracking-widest uppercase mb-4">
              ¿Listo para escalar?
            </p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
              Hablemos de tu
              <br />
              próximo proyecto
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto mb-10">
              Agendá una llamada gratuita de 30 minutos y descubrí cómo podemos
              transformar tu idea en realidad.
            </p>
            <button
              onClick={onContactClick}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-4 rounded-xl transition-all duration-200"
              style={{ boxShadow: '0 0 40px rgba(16,185,129,0.3)' }}
            >
              Agendar llamada gratuita
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-white font-black tracking-tighter">
          CLOPS<span className="text-emerald-500">TECH</span>
        </span>
        <p className="text-slate-500 text-sm">
          © 2025 ClopsTech. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          {['Privacidad', 'Términos', 'Contacto'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Modal de Contacto ────────────────────────────────────────────────────────
function ContactModal({ isOpen, onClose }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: 'fadeIn 0.2s ease forwards' }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl"
        style={{ animation: 'zoomIn 0.25s ease forwards' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-white font-black text-2xl tracking-tighter mb-2">
              ¡Mensaje enviado!
            </h3>
            <p className="text-slate-400 text-sm">
              Te contactamos en las próximas 24hs.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-white font-black text-2xl tracking-tighter mb-1">
              Contactanos
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              Contanos tu proyecto y te respondemos rápido.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  required
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  required
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                <textarea
                  required
                  rows={4}
                  placeholder="Contanos tu proyecto..."
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-emerald-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 rounded-xl transition-colors duration-200"
                style={{ boxShadow: '0 0 20px rgba(16,185,129,0.3)' }}
              >
                Enviar mensaje
              </button>
            </form>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0 }
          to   { opacity: 1 }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95) }
          to   { opacity: 1; transform: scale(1) }
        }
      `}</style>
    </div>
  )
}

// ─── App Root ─────────────────────────────────────────────────────────────────
export default function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      <Navbar onContactClick={() => setModalOpen(true)} />
      <Hero onContactClick={() => setModalOpen(true)} />
      <Features />
      <Showcase />
      <CTA onContactClick={() => setModalOpen(true)} />
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  )
}
