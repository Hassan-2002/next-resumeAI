import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import homeCard from "@/components/homeCard";
export default function Home() {
  
  
  
  const landingPage = (
    <div className="flex flex-row h-4/5 justify-center items-center ">
      <section className="flex flex-col items-center justify-center gap-6 md:gap-8 py-8">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Create&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful &nbsp;</span>
          <br />
          <span className={title()}>
            resumes regardless of your work experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
          Powered by&nbsp; <Image
            className="inline-block pb-4"
            src="/Google_Gemini_Logo.svg.png"
            height={12}
            alt="Google Gemini Logo"
            width={100}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
          
              color: "secondary",
              radius: "full",
              variant: "ghost",
              size: "lg",
            
              
            })}
            href={siteConfig.links.docs}
          >
            Get Started!
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full",size: "lg" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
  
      </section>
      <section>
        <Image
          alt="Hero Image"
          width={500}
          height={500}
          src="/resume_img.webp"
          />

      </section>
      </div>
  
  )
  const scrolled = (
    <div className="mt-20 text-center">
     {homeCard()}
    
       
         <h1  className="text-3xl font-bold text-center mt-10" >
          Get your Resume Score <Link className="text-3xl font-bold text-center mt-10" href="/dashboard"><p>now!</p> </Link>
         </h1>
      
  

    </div>
  )
  const further = (
    <div className="mt-20 text-center">
      <h1  className="text-3xl font-bold text-center mt-10" >
        More features coming soon!
      </h1>
    </div>
    
  )
      
  
  
  
  
  return (
    <section className="flex flex-col items-center justify-center gap-4  md:py-10">
      {landingPage }
      {scrolled}
      {further}
    </section>
  );
}
