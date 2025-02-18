import { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
    const [vercelStatus, setVercelStatus] = useState("Checking...");
    const [statusColor, setStatusColor] = useState("gray");

    useEffect(() => {
        async function fetchVercelStatus() {
            try {
                const response = await fetch("https://www.vercel-status.com/api/v2/status.json");
                if (!response.ok) throw new Error ("Failed to fetch status");

                const data = await response.json();

                setVercelStatus(data.status.description);

                const colorMap: { [key: string]: string } = {
                    none: "green",
                    minor: "orange",
                    major: "red",
                    critical: "red",
                };

                setStatusColor(colorMap[data.status.indicator] || "gray");
            } catch (error) {
                console.error("Error fetching Vercel status: ", error);
                setVercelStatus("Error fetching status");
                setStatusColor("gray");
            }
        }

        fetchVercelStatus();
    }, []);

    return (
        <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Daniel Smith
                    </span>

                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li><Link href="/" className="hover:underline me-4 md:me-6">Home</Link></li>
                        <li><Link href="/#about" className="hover:underline me-4 md:me-6">About</Link></li>
                        <li><Link href="/#cv" className="hover:underline me-4 md:me-6">CV</Link></li>
                        <li><Link href="/#portfolio" className="hover:underline me-4 md:me-6">Portfolio</Link></li>
                        <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
                    </ul>

                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-center text-center">
                    <span className="block text-sm text-gray-500 dark:text-gray-400 sm:w-full sm:text-center">
                        Copyright &copy; {new Date().getFullYear()} Daniel Smith. All Rights Reserved.
                    </span>

                    <span className="block text-sm font-medium mt-2 sm:mt-0 sm:absolute sm:right-0"
                        style={{ color: statusColor }}
                    >Vercel Status: {vercelStatus}
                    </span>
                </div>
            </div>
        </footer>
    );
}
