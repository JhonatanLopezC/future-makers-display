import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ImageIcon, VideoIcon, MessageSquare, FileText, Languages, Home } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

const projects = [
  {
    id: 1,
    title: "Editor de Imágenes con IA",
    description: "Aplicación avanzada de edición de imágenes potenciada con inteligencia artificial para transformaciones automáticas y mejoras profesionales.",
    icon: ImageIcon,
    tags: ["IA", "Imágenes", "Editor"],
    color: "text-blue-500",
    link: "https://leyderleon70-del.github.io/Editor-imagen/Index.html",
  },
  {
    id: 2,
    title: "Editor de Videos con IA",
    description: "Herramienta de edición de videos con características de IA para cortes automáticos, efectos y optimización de contenido multimedia.",
    icon: VideoIcon,
    tags: ["IA", "Videos", "Multimedia"],
    color: "text-purple-500",
    link: "https://ena0405101111-sketch.github.io/Editor-video/",
  },
  {
    id: 3,
    title: "ChatBoot Amigurumis",
    description: "Asistente virtual inteligente para la venta de amigurumis, con recomendaciones personalizadas y atención al cliente automatizada.",
    icon: MessageSquare,
    tags: ["ChatBot", "Ventas", "E-commerce"],
    color: "text-pink-500",
    link: "https://bot-kappa-jet.vercel.app/",
  },
  {
    id: 4,
    title: "Generador DBA Educativo",
    description: "Sistema generador de contenidos DBA (Derechos Básicos de Aprendizaje) diseñado específicamente para instituciones educativas.",
    icon: FileText,
    tags: ["Educación", "DBA", "Generador"],
    color: "text-green-500",
  },
  {
    id: 5,
    title: "App para Aprender Inglés",
    description: "Plataforma interactiva de aprendizaje de inglés con ejercicios adaptativos, seguimiento de progreso y práctica conversacional.",
    icon: Languages,
    tags: ["Educación", "Idiomas", "Aprendizaje"],
    color: "text-orange-500",
  },
  {
    id: 6,
    title: "Creador de Planos 2D/3D",
    description: "Aplicación para diseño de planos de construcción en 2D y 3D, integrada con chatbot de IA para asistencia en el diseño arquitectónico.",
    icon: Home,
    tags: ["IA", "Arquitectura", "3D"],
    color: "text-cyan-500",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="container mx-auto px-4 py-12">
        <header className="mb-12 text-center relative z-10">
          <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-lg">
            Proyectos de Estudiantes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
            Descubre las innovadoras aplicaciones desarrolladas por nuestros talentosos estudiantes,
            combinando creatividad y tecnología de vanguardia.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            const CardWrapper = project.link ? 'a' : 'div';
            const cardProps = project.link ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' } : {};
            
            return (
              <CardWrapper key={project.id} {...cardProps}>
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer bg-slate-800/90 border-slate-600/40 shadow-xl text-white"
                >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-white/20 ${project.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30">{project.id}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2 text-white font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-200">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} className="text-xs bg-white/10 text-white border-white/30 hover:bg-white/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;
