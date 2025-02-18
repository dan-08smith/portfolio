import Image from "next/image";

interface PortfolioCardProps {
    halfTitle: string;
    halfDescription: string;
    image: string;
    onClick: () => void;
}

export default function PortfolioCard({ halfTitle, halfDescription, image, onClick }: PortfolioCardProps) {
    return (
        <div 
            className="group cursor-pointer border rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-800 hover:shadow-xl transition"
            onClick={onClick}
        >
            <Image 
                src={image} 
                alt={halfTitle} 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{halfTitle}</h3>
                <p className="text-gray-500 dark:text-gray-400">{halfDescription}</p>
            </div>
        </div>
    );
}