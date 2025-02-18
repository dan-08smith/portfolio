export default function MainSection({
    id,
    title,
    subtitle,
    children,
}: {
    id: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <section id={id} className="py-16 text-center">
            <div className="container mx-auto px-4 mt-5">
                {subtitle && <h3 className="text-lg font-semibold text-gray-600">{subtitle}</h3>}
                <h1 className="text-3xl font-bold mt-2 mb-8">{title}</h1>
                <div>{children}</div>
            </div>
        </section>
    );
}