import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Education Landing Page",
    description: "A front-end for an educational platform displaying courses, lessons, and quizzes with a user-friendly layout",
    image: "/projects/project1.png",
    tags: ["Html", "Css", "Js"],
    demoUrl: "https://eduection.vercel.app/",
    githubUrl: "https://github.com/AhmedNaeem1000/Eduection",
  },
  {
    id: 2,
    title: "SmartReads",
    description:
      "A digital library interface for browsing and previewing books with a clean, responsive design.",
    image: "/projects/2.jpeg",
    tags: ["Html", "Css", "Js"],
    demoUrl: "https://eduection-5k1x-lf2apnb2p-ahmednaeem1000s-projects.vercel.app/",
    githubUrl: "https://github.com/AhmedNaeem1000/SmartReads",
  },
  {
    id: 3,
    title: "Portfolio Template",
    description:
      "A personal portfolio interface showcasing a developer's intro, skills, projects, and contact details in a clean, responsive layout.",
    image: "/projects/project3.png",
    tags: ["Html", "Css", "Js"],
    demoUrl: "https://portfolio-cyan-phi-fg6ak1kgk2.vercel.app/",
    githubUrl: "https://github.com/AhmedNaeem1000/portfolio",
  },
  {
    id: 4,
    title: "Trivus – Learning Platform",
    description: "An educational platform for learning programming through interactive paths, quizzes, and a smart personalized experience.",
    image: "/projects/4.jpeg",
    tags: ["Js", "React.js", "Tailwind CSS" , "Chart.js"],
    demoUrl: "https://trivus-gray.vercel.app/",
    githubUrl: "https://github.com/AhmedNaeem1000/Trivus",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    // eslint-disable-next-line react/jsx-key
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
