"use client";

import { useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { USER } from "@/features/portfolio/data/user";

import { ChanhDaiMark, StardiveLogo } from "./chanhdai-mark";

const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};

function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    // <StardiveLogo
    //   data-visible={visible}
    //   className="translate-y-2 opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
    // />
    <div
      className="mx-0.5 my-[3px] translate-y-2 opacity-0 transition-[opacity,translate] duration-300 data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"
      data-visible={visible}
    >
      <img
        className="size-8 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none sm:size-8"
        alt={`${USER.displayName}'s avatar`}
        src={USER.avatar}
        fetchPriority="high"
      />
    </div>
  );
}

export function SiteHeaderMark() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);
  return isHome ? <ChanhDaiMarkMotion /> : <StardiveLogo />;
}
