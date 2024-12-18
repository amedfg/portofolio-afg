import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";

import { Button } from "@/components/ui/button";
import { FileIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <Navbar />
      <section id="home">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hello{" "}
                <span className="bg-gradient-to-r from-red-400 to-primary bg-clip-text text-transparent">
                  !!!
                </span>
                , I'm{" "}
                <span className="block text-3xl font-bold text-foreground mt-1 lg:text-5xl">
                  Achmad Fauzi G.
                </span>
              </h1>
              <h2 className="font-medium text-md mt-2">
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                  Backend Developer |{" "}
                  <span className="font-bold">Fullstack Developer</span> |
                  Frontend Developer
                </span>
              </h2>
              <Button asChild className="rounded-xl mt-4">
                <Link href="#">
                  <FileIcon />
                  Resume
                </Link>
              </Button>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-9 lg:right-0">
                <Image
                  src={"/img/home.png"}
                  width={517}
                  height={483}
                  alt="Achmad Fauzi"
                  priority
                  className="mx-auto max-w-full"
                />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                  <svg
                    width={517}
                    height={483}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#2563EB"
                      d="M52.5,-17C60.5,7.4,54.1,36.5,33.5,53.1C13,69.6,-21.8,73.7,-42.5,58.6C-63.2,43.5,-69.9,9.3,-60.5,-17.1C-51.1,-43.5,-25.5,-62.1,-1.6,-61.6C22.3,-61.1,44.6,-41.4,52.5,-17Z"
                      transform="translate(100 100)"
                      scale={1.1}
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-10">
              <p className="font-bold uppercase text-3xl mb-3">
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                  Who am I?
                </span>
              </p>
              <p className="font-medium text-justify">
                My name is Achmad Fauzi Guritno, but you can call me Amed. I am
                a recent graduate in Informatics from Diponegoro University with
                a strong interest in web development, particularly as a Backend,
                Fullstack, or Frontend Developer. I am skilled at working both
                independently and collaboratively and am passionate about
                creating efficient and dynamic web solutions. I’m eager to
                contribute my expertise to innovative projects that push the
                boundaries of technology.
              </p>
            </div>
            <div className="w-full px-4">
              <p className="font-semibold text-3xl mb-4">
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                  Lets Connect!
                </span>
              </p>
              <p className="font-medium text-base text-slate-500 mb-6">
                We can be friends with these social media platforms:
              </p>
              <div className="flex items-center">
                {/* Linkedin */}
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="shadow-sm ml-0 mr-1 hover:text-primary"
                >
                  <Link
                    href="https://www.linkedin.com/in/achmadfg/"
                    target="_blank"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </Button>
                {/* Instagram */}
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="shadow-sm mx-1 hover:text-primary"
                >
                  <Link
                    href="https://www.instagram.com/amedfag/"
                    target="_blank"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Instagram</title>
                      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                    </svg>
                  </Link>
                </Button>
                {/* Facebook */}
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="shadow-sm mx-1 hover:text-primary"
                >
                  <Link
                    href="https://www.instagram.com/amedfag/"
                    target="_blank"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experiences" className="pt-20 pb-32">
        <div className="container">
          <div className="flex flex-col px-4">
            <div className="w-full">
              <p className="font-bold uppercase text-3xl mb-3">
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
                  Experiences
                </span>
              </p>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="flex w-full justify-between">
                <div className="flex">
                  <p className="font-bold text-sm lg:text-lg">
                    Aidohealth{" "}
                    <span className="font-medium text-slate-500">
                      - Jakarta ( On-site )
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-sm lg:text-lg ">
                    Jan 2024 - Apr 2024
                  </span>
                </div>
              </div>
              <p className="font-medium text-sm md:text-base text-slate-500 mb-1">
                Web Developer Intern
              </p>
              <p className="text-justify text-sm md:text-base">
                Developed web-based internal training applications as a{" "}
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent font-bold">
                  Full-Stack Engineer
                </span>{" "}
                using PHP with the Laravel framework, designing and implementing
                database structures with PostgreSQL. Integrated a photo upload
                feature with image storage on AWS S3 and managed code
                repositories using Bitbucket, performing regular updates and
                resolving git conflicts efficiently.
              </p>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="flex w-full justify-between">
                <div className="flex">
                  <p className="font-bold text-sm lg:text-lg">
                    PT United Tractors Tbk{" "}
                    <span className="font-medium text-slate-500">
                      - Jakarta ( On-site )
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-sm lg:text-lg ">
                    Aug 2022 - Dec 2022
                  </span>
                </div>
              </div>
              <p className="font-medium text-sm md:text-base text-slate-500 mb-1">
                IT Developer Intern
              </p>
              <p className="text-justify text-sm md:text-base">
                Created a web-based asset inventory management system with 5
                core features{" "}
                <span className="text-slate-500">
                  ( inventory, request, borrowing, loss, scrap, and assets
                  reporting )
                </span>{" "}
                as a{" "}
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent font-bold">
                  Backend Engineer
                </span>{" "}
                using PHP with the CodeIgniter 4 framework, leveraging
                PHPMyAdmin for database management. Built a large-scale web
                service application serving company users across Indonesia and
                managed code repositories using GitLab to ensure efficient
                version control and collaboration.
              </p>
            </div>
            <div className="flex flex-wrap mb-3">
              <div className="flex w-full justify-between">
                <div className="flex">
                  <p className="font-bold text-sm lg:text-lg">
                    UDDP PMI{" "}
                    <span className="font-medium text-slate-500">
                      - Jakarta ( On-site )
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-sm lg:text-lg ">
                    Jan 2022 - Apr 2022
                  </span>
                </div>
              </div>
              <p className="font-medium text-sm md:text-basee text-slate-500 mb-1">
                Web Developer Intern
              </p>
              <p className="text-justify text-sm md:text-base">
                Created a web-based soft skill training registration system as a{" "}
                <span className="bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent font-bold">
                  Full-stack Engineer
                </span>{" "}
                , designing the application using Figma. Developed the backend
                with PHP and the CodeIgniter 4 framework, while employing
                Bootstrap 4 for the frontend. Managed the database with
                PHPMyAdmin and utilized GitLab for version control and
                collaboration with supervisors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
