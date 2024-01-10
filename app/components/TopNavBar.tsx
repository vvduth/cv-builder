"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { cx } from "../lib/cx";
import Link from "next/link";
import Image from "next/image";

const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-1">
            <Image
              src={"heart.svg"}
              width={16}
              height={16}
              alt="Logo"
              className="h-8 w-full"
              priority
            />
            <h1 className="text-xl whitespace-nowrap text-primary">
              Resume Builder & Parser
            </h1>
          </div>
        </Link>
        <nav
          className="flex items-center gap-2 text-sm font-medium"
          aria-label="Site Nav Bar"
        >
          {[
            ["/resume-builder", "Builder"],
            ["/resume-parser", "Parser"],
          ].map(([href, text]) => (
            <Link
              key={text}
              className="rounded-md px-1.5 py-2 text-gray-400 
                    hover:bg-gray-100 focus-visible:bg-gray-100 lg:px-4"
              href={href}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default TopNavBar;
