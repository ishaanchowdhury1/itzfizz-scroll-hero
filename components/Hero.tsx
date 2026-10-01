"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const firstLine = "WELCOME";
const secondLine = "ITZFIZZ";

const metricData = [
  {
    value: "98%",
    label: "Performance score",
  },
  {
    value: "120%",
    label: "Growth focused",
  },
  {
    value: "85%",
    label: "Client retention",
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const motionMedia = gsap.matchMedia();

      motionMedia.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const intro = gsap.timeline({
            defaults: {
              ease: "power3.out",
            },
          });

          /*
           * The selectors are automatically scoped to heroRef
           * because this useGSAP call has a scope.
           */
          intro
            .fromTo(
              ".hero-letter",
              {
                y: 40,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                stagger: 0.045,
              },
            )
            .fromTo(
              ".hero-copy",
              {
                y: 15,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.7,
              },
              "-=0.45",
            )
            .fromTo(
              ".hero-visual",
              {
                y: 30,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.9,
              },
              "-=0.4",
            )
            .fromTo(
              ".hero-stat",
              {
                y: 25,
                autoAlpha: 0,
              },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.65,
                stagger: 0.12,
              },
              "-=0.35",
            );
        },
      );

      return () => {
        motionMedia.revert();
      };
    },
    {
      scope: heroRef,
    },
  );

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-svh overflow-hidden bg-[#f3f1ec] text-[#111111]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[45vw] w-[45vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />

        <div className="absolute left-1/2 top-1/2 h-[30vw] w-[30vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/5" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-black/5" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-14">
        <div className="text-sm font-bold tracking-[0.25em]">
          ITZFIZZ
        </div>

        <div className="text-right text-[10px] font-medium uppercase tracking-[0.3em] text-black/50 sm:text-xs">
          Digital Experience Studio
        </div>
      </header>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-[1600px] flex-col px-6 pb-8 sm:px-10 lg:px-14">
        {/* Headline */}
        <div className="flex flex-1 items-center justify-center pt-8 sm:pt-0">
          <div className="text-center">
            <p className="hero-copy mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-black/40 sm:text-xs">
              Creative technology
            </p>

            {/*
             * One semantic H1.
             *
             * The aria-label gives assistive technology the
             * complete phrase instead of reading individual
             * decorative letters separately.
             */}
            <h1
              aria-label="Welcome Itzfizz"
              className="text-[clamp(2rem,6vw,7rem)] font-medium leading-none tracking-[0.16em]"
            >
              <span className="block whitespace-nowrap">
                {Array.from(firstLine).map((letter, index) => (
                  <span
                    key={`welcome-${index}`}
                    className="hero-letter inline-block"
                    aria-hidden="true"
                  >
                    {letter}
                  </span>
                ))}
              </span>

              <span className="mt-2 block whitespace-nowrap">
                {Array.from(secondLine).map((letter, index) => (
                  <span
                    key={`itzfizz-${index}`}
                    className="hero-letter inline-block"
                    aria-hidden="true"
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h1>

            <p className="hero-copy mx-auto mt-7 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
              Digital experiences engineered with technology,
              creativity, and motion.
            </p>
          </div>
        </div>

        {/* Visual area */}
        <div className="relative flex h-[30vh] min-h-[190px] items-center justify-center sm:h-[34vh]">
          <div className="absolute bottom-12 left-0 h-px w-full bg-black/10" />

          {/*
           * This wrapper is intentionally separate from the inner
           * visual. Step 5 will animate the wrapper with ScrollTrigger
           * while the inner visual handles the intro animation.
           */}
          <div className="hero-visual-scroll relative z-10">
            <div
              className="hero-visual w-[260px] sm:w-[360px] lg:w-[480px]"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 600 260"
                className="h-auto w-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shadow */}
                <ellipse
                  cx="300"
                  cy="224"
                  rx="210"
                  ry="16"
                  fill="black"
                  fillOpacity="0.12"
                />

                {/* Main body */}
                <path
                  d="M92 178C101 151 119 130 151 118L201 98L244 49C255 37 270 31 287 31H367C390 31 408 42 423 61L458 106L508 120C535 127 552 148 559 178H92Z"
                  fill="#111111"
                />

                {/* Upper body */}
                <path
                  d="M213 97L250 55C258 46 270 41 284 41H363C380 41 394 49 405 63L431 98H213Z"
                  fill="#f3f1ec"
                />

                {/* Window divider */}
                <path
                  d="M323 43V98"
                  stroke="#111111"
                  strokeWidth="5"
                />

                {/* Front windshield */}
                <path
                  d="M328 45H362C378 45 388 52 399 66L421 97H328V45Z"
                  fill="#111111"
                  fillOpacity="0.88"
                />

                {/* Rear windshield */}
                <path
                  d="M251 58C259 47 270 43 284 43H318V97H218L251 58Z"
                  fill="#111111"
                  fillOpacity="0.88"
                />

                {/* Side detail */}
                <path
                  d="M122 153H519"
                  stroke="#f3f1ec"
                  strokeOpacity="0.18"
                  strokeWidth="3"
                />

                {/* Front light */}
                <path
                  d="M512 134L541 141L550 158H517L512 134Z"
                  fill="#f3f1ec"
                />

                {/* Rear light */}
                <path
                  d="M103 141L127 135L124 158H96L103 141Z"
                  fill="#f3f1ec"
                />

                {/* Wheels */}
                <circle
                  cx="174"
                  cy="181"
                  r="42"
                  fill="#111111"
                  stroke="#f3f1ec"
                  strokeWidth="8"
                />

                <circle
                  cx="174"
                  cy="181"
                  r="15"
                  fill="#f3f1ec"
                />

                <circle
                  cx="470"
                  cy="181"
                  r="42"
                  fill="#111111"
                  stroke="#f3f1ec"
                  strokeWidth="8"
                />

                <circle
                  cx="470"
                  cy="181"
                  r="15"
                  fill="#f3f1ec"
                />

                {/* Front bumper */}
                <path
                  d="M532 177H563C567 177 570 181 570 185V190H532V177Z"
                  fill="#111111"
                />

                {/* Rear bumper */}
                <path
                  d="M88 177H112V190H81V185C81 181 84 177 88 177Z"
                  fill="#111111"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom information */}
        <div className="relative z-10 flex flex-col gap-8 border-t border-black/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="grid grid-cols-3 gap-8 sm:gap-12">
            {metricData.map((metric) => (
              <div
                key={metric.value}
                className="hero-stat"
              >
                <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {metric.value}
                </p>

                <p className="mt-1 max-w-[110px] text-[9px] uppercase leading-4 tracking-[0.12em] text-black/45 sm:text-[10px]">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="hero-copy flex items-center gap-3 self-end text-[9px] font-medium uppercase tracking-[0.3em] text-black/40">
            <span className="h-8 w-px bg-black/20" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}