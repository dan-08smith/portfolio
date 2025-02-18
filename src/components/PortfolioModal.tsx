import Image from "next/image";

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
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl flex flex-col md:flex-row relative">
                
                <button 
                    onClick={onClose} 
                    className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white text-xl"
                >
                    ✕
                </button>

                <div className="md:w-1/2">
                    <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={500} 
                        height={300} 
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                <div className="md:w-1/2 md:pl-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                        {project.title}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-3">{project.description}</p>

                    {project.website1 && (
                        <a 
                            href={project.website1} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            {project.website1name}
                        </a>
                    )}

                    {project.website2 && (
                        <a 
                            href={project.website2} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="mt-4 text-blue-500 hover:underline"
                        >
                            {project.website2name}
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
    );
}