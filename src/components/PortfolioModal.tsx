import Image from "next/image";
import { Link } from "lucide-react"

interface PortfolioModalProps {
    project: {
        title: string;
        description: string;
        image: string;
        website1: string;
        website1name: string;
        website2?: string;
        website2name?: string;
        technologies?: string[];
    } | null;
    onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl w-full relative">
        
                <button onClick={onClose} 
                    className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white text-xl"
                >✕</button>
                
                <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                    {project.title}
                </h2>
                
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                        <Image 
                            src={project.image} 
                            alt={project.title} 
                            width={500} 
                            height={400} 
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                    
                    <div className="md:w-1/2 flex flex-col justify-center">
                        <p className="text-gray-500 dark:text-gray-400">{project.description}</p>
                        
                        {project.website1 && (
                            <a 
                                href={project.website1} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="mt-4 flex items-center text-blue-500 hover:underline"
                            >
                                <Link className="w-5 h-5 mr-2" /> {project.website1name}
                            </a>
                        )}
                        
                        {project.website2 && (
                            <a 
                                href={project.website2} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="mt-2 flex items-center text-blue-500 hover:underline"
                            >
                                <Link className="w-5 h-5 mr-2" /> {project.website2name}
                            </a>
                        )}
                        
                        {project.technologies && (
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Technologies Used:</h4>
                                <ul className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map((tech, index) => (
                                        <li key={index} className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-md text-sm">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}