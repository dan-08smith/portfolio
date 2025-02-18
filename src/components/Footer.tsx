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
                        <li><Link href="/#skills" className="hover:underline me-4 md:me-6">Skills</Link></li>
                        <li><Link href="/#portfolio" className="hover:underline me-4 md:me-6">Portfolio</Link></li>
                        <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
                    </ul>

                </div>

                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between text-left">
                    <div className="w-full sm:w-auto">
                        <span className="block text-sm text-gray-500 dark:text-gray-400">
                            Copyright &copy; {new Date().getFullYear()} Daniel Smith. All Rights Reserved.
                        </span>
                    </div>

                    <p className="relative w-full sm:w-auto mt-2 sm:mt-0 text-left"
                        onMouseEnter={() => {
                            const popover = document.getElementById('popover-description');
                            if (popover) popover.classList.remove('invisible', 'opacity-0');
                        }}
                        onMouseLeave={() => {
                            const popover = document.getElementById('popover-description');
                            if (popover) popover.classList.add('invisible', 'opacity-0');
                        }}
                    >
                        <span className="block text-sm font-medium" style={{ color: statusColor }}>
                            Vercel Status: {vercelStatus}
                        </span>

                        <div id="popover-description" role="tooltip"
                            className="absolute z-10 invisible inline-block text-sm text-gray-500 transition-opacity duration-300 
                                bg-white border border-gray-200 rounded-lg shadow-xs opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 
                                dark:text-gray-400"
                            style={{
                                bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '8px'
                            }}>
                            <div className="p-3 space-y-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Vercel Status</h3>
                                <p className="font-semibold">
                                    This website is hosted using Vercel.
                                </p>
                                <p>
                                    The status string you&apos;re currently hovering over shows the current status of 
                                    Vercel&apos;s Servers. If you wish, click the link below to view their whole status page 
                                    (the source of the status below).
                                </p>
                                <a href="https://www.vercel-status.com" target="_blank" rel="noopener noreferrer"
                                    className="flex justify-center items-center font-medium text-blue-600 dark:text-blue-500 
                                        dark:hover:text-blue-600 hover:text-blue-700 hover:underline">
                                    Status Page
                                    <svg className="w-2 h-2 ms-1.5 rtl:rotate-180" aria-hidden="true" 
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                                    </svg>
                                </a>
                            </div>
                            <div data-popper-arrow></div>
                        </div>
                    </p>
                </div>




            </div>
        </footer>
    );
}
