"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { opacity, slideUp } from "@/components/Animations/TextAnims";
import { twMerge } from "tailwind-merge";

export default function Home() {
	const titleTop = useRef<HTMLHeadingElement>(null);
	const titleMid = useRef<HTMLHeadingElement>(null);
	const titleBot = useRef<HTMLHeadingElement>(null);
	const container = useRef<HTMLDivElement>(null);
	const descriptionRef = useRef<HTMLParagraphElement>(null);
	const description = "Dream Nails is a locally owned nail salon that emphasizes creativity and is renowned for bringing the nails you dream of to life.";
	const isInView = useInView(descriptionRef);
	const [hasBeenInView, setHasBeenInView] = useState(false);
	const windowWidth = typeof window !== "undefined" ? window.innerWidth : 1000;

	useEffect(() => {
		if (isInView) {
			setHasBeenInView(true);
		}
	}, [isInView]);

	useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(titleTop.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
				ease: "sine.inOut",
                top: "2rem",
				left: windowWidth < 1000 ? "42vw" : "12vw",
				fontSize: "3rem"
            });

			gsap.to(titleMid.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
				ease: "sine.inOut",
                top: "2rem",
				left: windowWidth < 1000 ? "42vw" : "12vw",
				fontSize: "3rem"
            });

			gsap.to(titleBot.current, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                },
				ease: "sine.inOut",
                top: "2rem",
				left: windowWidth < 1000 ? "42vw" : "12vw",
				fontSize: "3rem"
            });
        });
        return () => ctx.revert(); // <- cleanup!
    }, []);

	return (
		<main className="min-h-screen w-full h-fit relative">
			<div ref={container} className="h-screen relative uppercase">
				<h1 ref={titleTop} className="fixed top-1/4 left-1/2 text-5xl md:text-8xl font-bold text-black whitespace-nowrap z-10" style={{ transform: "translate(-50%, -50%)"}}>Dream Nails</h1>
				<h1 ref={titleMid} className="fixed top-1/2 left-1/2 text-5xl md:text-8xl font-bold text-red whitespace-nowrap z-20" style={{ transform: "translate(-50%, -50%)"}}>Dream Nails</h1>
				<h1 ref={titleBot} className="fixed top-3/4 left-1/2 text-5xl md:text-8xl font-bold text-black whitespace-nowrap " style={{ transform: "translate(-50%, -50%)"}}>Dream Nails</h1>
			</div>
			<div className="h-screen w-full flex justify-center items-center relative">
				<p ref={descriptionRef} className="text-2xl md:text-6xl font-bold text-center max-w-[60%] text-black" style={{ lineHeight: 1.2 }}>
					{description.split(" ").map((word, idx) => {
						return (
							<span key={idx} className={twMerge(`relative inline-flex overflow-hidden mr-5`, (word==="emphasizes"||word==="renowned")&&"text-red")}>
								<motion.span viewport={{ once: true }} key={idx} 
								variants={slideUp} initial="initial" custom={idx} 
								animate={isInView||hasBeenInView ? "open" : "close"}>{word}</motion.span>
							</span>
						);
						})
					}
				</p>
				<motion.p initial="initial" variants={opacity} animate={isInView||hasBeenInView ? "inView" : "outView"} custom={3} className="absolute left-[10%] top-[10%] max-w-[260px] text-xl">“Amazing!!! I love it here”. - Megan M</motion.p>
				<motion.p initial="initial" variants={opacity} animate={isInView||hasBeenInView ? "inView" : "outView"} custom={5} className="absolute left-[45%] md:left-[70%] top-[18%] md:top-[15%] max-w-[300px] text-xl hidden md:block">“Best nail place in the metro!” - Justine G</motion.p>
				<motion.p initial="initial" variants={opacity} animate={isInView||hasBeenInView ? "inView" : "outView"} custom={4} className="absolute left-[6%] md:left-[6%] top-[75%] max-w-[300px] text-xl hidden md:block">“Kim and Yang are amazing!” - Ruth G</motion.p>
				<motion.p initial="initial" variants={opacity} animate={isInView||hasBeenInView ? "inView" : "outView"} custom={7} className="absolute left-[30%] md:left-[60%] top-[80%] md:top-[85%] text-xl">“No one can compare” - Tearesa D</motion.p>
			</div>
			<div className="h-screen w-full flex justify-center items-center p-4 md:p-14">
				<div className="h-full w-full flex justify-center items-center rounded-3xl bg-black">
					<Link href="tel:952-469-3799" className="text-4xl md:text-9xl font-semibold text-red">952-469-3799</Link>
				</div>
			</div>
		</main>
	);
}
