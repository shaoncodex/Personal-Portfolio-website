import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ExternalLink, Github, Eye, Search, Filter } from "lucide-react";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import { PortfolioModal } from "./PortfolioModal";
import { PortfolioPagination } from "./PortfolioPagination";

export const Portfolio = () => {
  const {
    projects,
    categories,
    searchQuery,
    selectedCategory,
    currentPage,
    totalPages,
    totalProjects,
    handleCategoryChange,
    handleSearchChange,
    setCurrentPage
  } = usePortfolioData();

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 animate-slide-up">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8 animate-scale-in" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              A collection of {totalProjects.toLocaleString()}+ projects that showcase my skills and creativity
            </p>
          </div>

          {/* Search and Filter Controls */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="pl-10 bg-gradient-card backdrop-blur-glass border border-border/20 focus:border-primary transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 w-full justify-center">
                <Filter className="h-4 w-4" />
                <span>Filter by category:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 text-sm transition-all duration-300 hover:scale-105 ${
                    selectedCategory === category 
                      ? 'bg-gradient-primary shadow-glow animate-pulse' 
                      : 'hover:shadow-card'
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Summary */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Showing {projects.length} of {totalProjects} projects
              {searchQuery && ` for "${searchQuery}"`}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="group overflow-hidden bg-gradient-card backdrop-blur-glass border border-border/20 shadow-card hover:shadow-glow transition-all duration-500 transform hover:-translate-y-2 animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openModal(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-primary transition-opacity duration-300 flex items-center justify-center ${
                    hoveredProject === project.id ? 'opacity-90' : 'opacity-0'
                  }`}>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="hover:scale-110 transition-transform duration-200 bg-background/80 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project);
                        }}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="hover:scale-110 transition-transform duration-200 bg-background/80 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank');
                        }}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="hover:scale-110 transition-transform duration-200 bg-background/80 backdrop-blur-sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demoUrl, '_blank');
                        }}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground animate-pulse">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {project.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-primary mb-1 group-hover:text-accent transition-colors duration-300 line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-xs leading-relaxed mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="text-xs border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs border-primary/20">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <PortfolioPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        project={selectedProject}
        open={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};