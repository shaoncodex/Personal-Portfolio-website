import { useState, useMemo } from "react";

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  images: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  year?: string;
  client?: string;
  duration?: string;
  role?: string;
}

// Mock data for demonstration - in real app, this would come from an API or CMS
const generateMockProjects = (count: number): PortfolioItem[] => {
  const categories = ["Web Development", "UI/UX Design", "Mobile Development", "Data Visualization", "E-commerce", "SaaS"];
  const techs = ["React", "Node.js", "TypeScript", "Python", "Vue.js", "Angular", "Figma", "Adobe XD", "MongoDB", "PostgreSQL", "AWS", "Docker"];
  const projectTypes = [
    "E-Commerce Platform", "Mobile Banking App", "Analytics Dashboard", "Portfolio Website", 
    "Social Media Tool", "Fitness App", "Learning Management System", "Restaurant App",
    "Travel Booking Platform", "Real Estate Portal", "Healthcare Dashboard", "CRM System"
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `${projectTypes[i % projectTypes.length]} ${Math.floor(i / projectTypes.length) + 1}`,
    category: categories[i % categories.length],
    description: `A comprehensive ${projectTypes[i % projectTypes.length].toLowerCase()} with modern features and user-friendly interface. Built with cutting-edge technologies for optimal performance.`,
    longDescription: `This ${projectTypes[i % projectTypes.length].toLowerCase()} represents a complete solution designed to meet modern user expectations. The project incorporates responsive design principles, accessibility standards, and performance optimizations. Through careful planning and iterative development, we created an intuitive user experience that drives engagement and conversion.`,
    technologies: techs.slice(0, 3 + (i % 4)).sort(),
    images: [
      `https://images.unsplash.com/photo-${1500000000000 + i}?w=800&h=600&fit=crop&q=80`,
      `https://images.unsplash.com/photo-${1500000000000 + i + 1000}?w=800&h=600&fit=crop&q=80`,
      `https://images.unsplash.com/photo-${1500000000000 + i + 2000}?w=800&h=600&fit=crop&q=80`
    ],
    demoUrl: "#",
    githubUrl: "#",
    featured: i < 6,
    year: (2020 + (i % 5)).toString(),
    client: i % 3 === 0 ? `Client ${String.fromCharCode(65 + (i % 26))}` : undefined,
    duration: `${2 + (i % 6)} months`,
    role: ["Lead Developer", "UI/UX Designer", "Full Stack Developer", "Frontend Developer"][i % 4]
  }));
};

export const usePortfolioData = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);

  // Generate mock projects (1000+ as requested)
  const allProjects = useMemo(() => generateMockProjects(1200), []);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(allProjects.map(p => p.category))];
    return ["All", ...uniqueCategories];
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      
      return matchesCategory && matchesSearch;
    });
  }, [allProjects, selectedCategory, searchQuery]);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredProjects.slice(startIndex, endIndex);
  }, [filteredProjects, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);

  // Reset page when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return {
    projects: paginatedProjects,
    allProjects: filteredProjects,
    categories,
    searchQuery,
    selectedCategory,
    currentPage,
    totalPages,
    totalProjects: filteredProjects.length,
    handleCategoryChange,
    handleSearchChange,
    setCurrentPage
  };
};