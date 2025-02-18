import Image from "next/image";

export default function LinkIcons({
    img,
    alt,
    href,
    text,
    showArrow = true, 
}: {
    img: string;
    alt: string;
    href: string;
    text: string;
    showArrow?: boolean; 
}) {
    return (
        <a 
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <Image aria-hidden src={img} alt={alt} width={20} height={20} />
            {text} {showArrow && "→"}
        </a>
    );   
}
