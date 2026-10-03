"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const headline = "W E L C O M E   I T Z F I Z Z";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ScrollHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          normalMotion: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const conditions = context.conditions as { reduceMotion?: boolean; normalMotion?: boolean } | undefined;
          const reduceMotion = conditions?.reduceMotion;
          const normalMotion = conditions?.normalMotion;

          const carWrapper =
            heroRef.current?.querySelector<HTMLElement>(".car-wrapper");

          const carImage =
            heroRef.current?.querySelector<HTMLImageElement>(".car-image");

          if (!carWrapper || !carImage) return;

          if (reduceMotion) {
            gsap.set(
              [
                ".hero__eyebrow",
                ".hero__letter",
                ".hero__description",
                ".stat",
                ".scroll-indicator",
              ],
              { clearProps: "all" },
            );

            gsap.set(carWrapper, { x: 0 });

            return;
          }

          if (normalMotion) {
            const intro = gsap.timeline({
              defaults: {
                ease: "power3.out",
              },
            });

            intro.from(".hero__eyebrow", {
              y: 20,
              opacity: 0,
              duration: 0.7,
            });

            intro.from(
              ".hero__letter",
              {
                y: 45,
                opacity: 0,
                duration: 0.8,
                stagger: 0.025,
              },
              "-=0.35",
            );

            intro.from(
              ".hero__description",
              {
                y: 18,
                opacity: 0,
                duration: 0.7,
              },
              "-=0.45",
            );

            intro.from(
              ".stat",
              {
                y: 25,
                opacity: 0,
                duration: 0.65,
                stagger: 0.1,
              },
              "-=0.25",
            );

            intro.from(
              ".scroll-indicator",
              {
                opacity: 0,
                duration: 0.6,
              },
              "-=0.25",
            );

            const getCarEndX = () => {
              const imageWidth = carImage.getBoundingClientRect().width;

              return window.innerWidth / 2 + imageWidth / 2 + 40;
            };

            gsap.fromTo(
              carWrapper,
              {
                x: 0,
              },
              {
                x: getCarEndX,
                ease: "none",
                scrollTrigger: {
                  trigger: heroRef.current,
                  start: "top top",
                  end: "+=150%",
                  pin: true,
                  scrub: 1,
                  invalidateOnRefresh: true,
                  anticipatePin: 1,
                },
              },
            );
          }
        },
      );

      return () => {
        mm.revert();
      };
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__header">
        <span className="brand">ITZFIZZ</span>

        <span className="studio-label">
          DIGITAL EXPERIENCE STUDIO
        </span>
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">CREATIVE TECHNOLOGY</p>

        <h1 className="hero__title" aria-label={headline}>
          {headline.split("").map((character, index) => (
            <span
              key={`${character}-${index}`}
              className="hero__letter"
              aria-hidden="true"
            >
              {character === " " ? "\u00A0" : character}
            </span>
          ))}
        </h1>

        <p className="hero__description">
          Digital experiences engineered with technology, creativity, and
          motion.
        </p>
      </div>

      <div className="car-area">
        <div className="car-wrapper">
          <img
            className="car-image"
            src={`${basePath}/images/car.webp`}
            alt="Top-view car"
            width={1400}
            height={528}
            draggable={false}
          />
        </div>
      </div>

      <div className="hero__bottom">
        <div className="stats">
          <article className="stat">
            <strong>58%</strong>
            <span>Faster load times</span>
          </article>

          <article className="stat">
            <strong>23%</strong>
            <span>Fewer support calls</span>
          </article>

          <article className="stat">
            <strong>27%</strong>
            <span>Higher engagement</span>
          </article>

          <article className="stat">
            <strong>40%</strong>
            <span>Better conversion</span>
          </article>
        </div>

        <div className="scroll-indicator">
          <span />
          <p>SCROLL TO EXPLORE</p>
        </div>
      </div>
    </section>
  );
}