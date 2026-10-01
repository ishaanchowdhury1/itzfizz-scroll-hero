"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#f3f1ec] text-[#111111]"
    >
      {/* Decorative background elements */}
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

        <div className="text-[10px] font-medium uppercase tracking-[0.3em] text-black/50 sm:text-xs">
          Digital Experience Studio
        </div>
      </header>

      {/* Main hero content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-[1600px] flex-col px-6 pb-8 sm:px-10 lg:px-14">
        {/* Headline */}
        <div className="flex flex-1 items-center justify-center pt-8 sm:pt-0">
          <div className="text-center">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.4em] text-black/40 sm:text-xs">
              Creative technology
            </p>

            <h1
              className="whitespace-nowrap text-[clamp(2rem,6vw,7rem)] font-medium leading-none tracking-[0.16em]"
            >
              W E L C O M E
            </h1>

            <h1
              className="mt-2 whitespace-nowrap text-[clamp(2rem,6vw,7rem)] font-medium leading-none tracking-[0.16em]"
            >
              I T Z F I Z Z
            </h1>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-black/55 sm:text-base">
              Digital experiences engineered with technology,
              creativity, and motion.
            </p>
          </div>
        </div>

        {/* Visual area */}
        <div className="relative flex h-[30vh] min-h-[190px] items-center justify-center sm:h-[34vh]">
          {/* Ground line */}
          <div className="absolute bottom-12 left-0 h-px w-full bg-black/10" />

          {/* Temporary car visual */}
          <div
            className="relative z-10 w-[260px] sm:w-[360px] lg:w-[480px]"
            aria-label="Stylized car"
          >
            <svg
              viewBox="0 0 600 260"
              className="h-auto w-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
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

        {/* Bottom information */}
        <div className="relative z-10 flex flex-col gap-8 border-t border-black/10 pt-5 sm:flex-row sm:items-end sm:justify-between">
          {/* Metrics */}
          <div className="grid grid-cols-3 gap-8 sm:gap-12">
            <div>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                98%
              </p>
              <p className="mt-1 max-w-[100px] text-[9px] uppercase leading-4 tracking-[0.12em] text-black/45 sm:text-[10px]">
                Performance
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                24/7
              </p>
              <p className="mt-1 max-w-[100px] text-[9px] uppercase leading-4 tracking-[0.12em] text-black/45 sm:text-[10px]">
                Digital support
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                3.2×
              </p>
              <p className="mt-1 max-w-[100px] text-[9px] uppercase leading-4 tracking-[0.12em] text-black/45 sm:text-[10px]">
                Growth focused
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-3 self-end text-[9px] font-medium uppercase tracking-[0.3em] text-black/40">
            <span className="h-8 w-px bg-black/20" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
}