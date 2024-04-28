import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-background">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            Be cooked
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            idk
          </p>
          <Button asChild className="mr-4">
            <Link href="#">
              Get started
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </Button>
          <Button asChild variant={"secondary"}>
            <Link href="#">Speak to Sales</Link>
          </Button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg overflow-hidden object-cover">
          <Image
            src="/assets/hero-banner.webp"
            alt="cooked man"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
