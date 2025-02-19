import LinkIcons from "@/components/LinkIcons";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-xl font-bold text-blue-600">Hi, I am</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
          Daniel Smith
        </h1>
        <p className="mt-6 text-lg text-gray-500 sm:text-xl">
          Welcome to my landing page, where would you like to go?
        </p>

        <div className="mt-10">
          <Link
            href="/"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            My Website
          </Link>
        </div>

        <div className="mt-10 flex items-center justify-center space-x-8">
          <LinkIcons img="/icons/linkedin.svg" alt="LinkedIn Icon" href="https://www.linkedin.com/in/dansmith08/" text="My LinkedIn" showArrow={true}/>
          <LinkIcons img="/icons/github.svg" alt="GitHub Icon" href="https://github.com/dan-08smith" text="My GitHub" showArrow={true}/>  
          <LinkIcons img="/icons/send.svg" alt="Send Icon" href="mailto:daniel@d-smith.co.uk" text="Email Me" showArrow={true}/>   
        </div>
      </div>
    </main>
  );
}
