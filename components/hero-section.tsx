"use client";

import { Button, buttonVariants, Link } from "@heroui/react";

function BotanicalFrame() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 1200 760"
            className="pointer-events-none absolute inset-0 h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Top left stem */}
            <path
                d="M35 250C80 190 115 135 190 105C245 83 278 48 300 12"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity=".28"
            />

            {/* Top left leaves */}
            <path
                d="M104 169C76 137 43 145 38 177C67 188 89 185 104 169Z"
                fill="var(--accent)"
                opacity=".12"
            />

            <path
                d="M147 130C142 96 166 73 197 82C193 111 177 128 147 130Z"
                fill="var(--foreground)"
                opacity=".09"
            />

            {/* Top left flower */}
            <g transform="translate(285 55)">
                <path
                    d="M0 0C-31-43-82-26-72 10C-66 32-39 43 0 28C39 43 66 32 72 10C82-26 31-43 0 0Z"
                    fill="var(--warning)"
                    opacity=".22"
                />
                <path
                    d="M0 0C43-31 70 1 49 27C35 44 11 35 0 0C-11 35-35 44-49 27C-70 1-43-31 0 0Z"
                    fill="var(--warning)"
                    opacity=".16"
                />
                <circle
                    cx="0"
                    cy="5"
                    r="10"
                    fill="var(--accent)"
                    opacity=".18"
                />
            </g>

            {/* Top right stem */}
            <path
                d="M1165 270C1125 205 1090 158 1020 126C974 105 947 69 925 22"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity=".28"
            />

            {/* Top right leaves */}
            <path
                d="M1091 166C1122 136 1150 143 1159 172C1131 186 1109 183 1091 166Z"
                fill="var(--accent)"
                opacity=".12"
            />

            <path
                d="M1045 131C1049 97 1027 75 997 84C1000 111 1017 127 1045 131Z"
                fill="var(--foreground)"
                opacity=".09"
            />

            {/* Top right flower */}
            <g transform="translate(915 60) rotate(-12)">
                <path
                    d="M0 0C-30-42-78-26-69 9C-64 31-37 42 0 27C37 42 64 31 69 9C78-26 30-42 0 0Z"
                    fill="var(--warning)"
                    opacity=".22"
                />
                <path
                    d="M0 0C42-29 68 1 47 27C33 43 10 35 0 0C-10 35-33 43-47 27C-68 1-42-29 0 0Z"
                    fill="var(--warning)"
                    opacity=".16"
                />
                <circle
                    cx="0"
                    cy="5"
                    r="10"
                    fill="var(--accent)"
                    opacity=".18"
                />
            </g>

            {/* Bottom left stem */}
            <path
                d="M30 680C93 643 119 590 144 536C164 494 198 467 244 452"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity=".24"
            />

            {/* Bottom left leaves */}
            <path
                d="M98 627C64 620 43 638 50 666C75 664 92 650 98 627Z"
                fill="var(--foreground)"
                opacity=".08"
            />

            <path
                d="M139 557C107 540 82 552 83 580C109 585 130 577 139 557Z"
                fill="var(--accent)"
                opacity=".1"
            />

            {/* Bottom left flower */}
            <g transform="translate(247 451) rotate(-20)">
                <path
                    d="M0 0C-28-40-74-25-66 9C-61 29-35 39 0 26C35 39 61 29 66 9C74-25 28-40 0 0Z"
                    fill="var(--warning)"
                    opacity=".17"
                />
                <path
                    d="M0 0C38-27 62 1 43 25C30 40 9 33 0 0C-9 33-30 40-43 25C-62 1-38-27 0 0Z"
                    fill="var(--warning)"
                    opacity=".12"
                />
                <circle
                    cx="0"
                    cy="5"
                    r="9"
                    fill="var(--accent)"
                    opacity=".14"
                />
            </g>

            {/* Bottom right stem */}
            <path
                d="M1170 680C1107 643 1081 590 1056 536C1036 494 1002 467 956 452"
                stroke="var(--accent)"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity=".24"
            />

            {/* Bottom right leaves */}
            <path
                d="M1102 627C1136 620 1157 638 1150 666C1125 664 1108 650 1102 627Z"
                fill="var(--foreground)"
                opacity=".08"
            />

            <path
                d="M1061 557C1093 540 1118 552 1117 580C1091 585 1070 577 1061 557Z"
                fill="var(--accent)"
                opacity=".1"
            />

            {/* Bottom right flower */}
            <g transform="translate(953 451) rotate(20)">
                <path
                    d="M0 0C-28-40-74-25-66 9C-61 29-35 39 0 26C35 39 61 29 66 9C74-25 28-40 0 0Z"
                    fill="var(--warning)"
                    opacity=".17"
                />
                <path
                    d="M0 0C38-27 62 1 43 25C30 40 9 33 0 0C-9 33-30 40-43 25C-62 1-38-27 0 0Z"
                    fill="var(--warning)"
                    opacity=".12"
                />
                <circle
                    cx="0"
                    cy="5"
                    r="9"
                    fill="var(--accent)"
                    opacity=".14"
                />
            </g>

            {/* Small decorative flowers */}
            <g fill="var(--accent)" opacity=".16">
                <circle cx="365" cy="100" r="4" />
                <circle cx="377" cy="92" r="3" />
                <circle cx="390" cy="101" r="4" />

                <circle cx="835" cy="105" r="4" />
                <circle cx="848" cy="96" r="3" />
                <circle cx="860" cy="105" r="4" />
            </g>
        </svg>
    );
}

export default function HeroSection() {
    return (
        <section className="relative w-full  min-h-[680px] overflow-hidden bg-background text-foreground">
            {/* Full-width blush gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-background via-warning/20 to-background"
            />

            {/* Soft botanical green glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-[var(--background)] from-0% via-[var(--warning)]/20 via-50% to-[var(--background)] to-100%"
            />

<div className="mx-auto flex w-full items-center justify-center ">
                <div className="relative w-full max-w-5xl">
                    <BotanicalFrame />

                    <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-7 py-24 text-center sm:px-16 sm:py-28">
                        <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-accent sm:text-xs">
                            Custom Floral Design · Fresh Table Centerpieces
                        </p>

                        <h1 className="font-serif text-[clamp(3.2rem,11vw,7rem)] font-medium leading-[0.86] tracking-[-0.045em] text-foreground">
                            Fresh Vases,
                            <br />
                            <span className="italic">crafted</span>
                            <br />
                            Weekly.
                        </h1>

                        <p className="mt-8 max-w-xl text-sm leading-7 text-[color-mix(in_srgb,var(--foreground)_68%,transparent)] sm:text-base">
                            Thoughtful floral design for your tables, delivered freshly every week
                        </p>

                        <div className="mt-9 flex w-full flex-row gap-3 items-center justify-center">
                            <Link
                                href="/about"
                                className={buttonVariants({ variant: "primary" })}
                            >
                                Learn More
                            </Link>

                            <Link
                                href="/pricing"
                                className={buttonVariants({ variant: "outline" })}
                            >
                                View Plans
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}