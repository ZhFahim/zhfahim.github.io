"use client";

import * as Popover from "@radix-ui/react-popover";
import Image from "next/image";
import { useRef, useState } from "react";
import type { BioSegment } from "../lib/content";

const HOVER_CLOSE_DELAY = 150;

function PopoverSegment({
  segment,
}: {
  segment: Extract<BioSegment, { type: "popover" }>;
}) {
  const [open, setOpen] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleClose = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(
      () => setOpen(false),
      HOVER_CLOSE_DELAY
    );
  };

  const cancelClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleTriggerEnter = () => {
    cancelClose();
    setOpen(true);
  };

  const handleTriggerLeave = () => scheduleClose();

  const handleContentEnter = () => {
    cancelClose();
    setOpen(true);
  };

  const handleContentLeave = () => scheduleClose();

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className={`inline border-0 bg-transparent p-0 font-inherit text-left text-inherit cursor-default border-b border-dashed pb-0.5 transition-colors duration-200 ${
            open
              ? "border-foreground/60 text-foreground"
              : "border-foreground/40 text-foreground/80 hover:border-foreground/55 hover:text-foreground/95"
          }`}
          aria-label={`${segment.title}: ${segment.description}`}
          onMouseEnter={handleTriggerEnter}
          onMouseLeave={handleTriggerLeave}
        >
          {segment.trigger}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={8}
          align="center"
          className="popover-content z-50 flex w-72 flex-col items-start rounded-xl border border-foreground/10 bg-white p-4 shadow-lg outline-none"
          aria-label={segment.title}
          onMouseEnter={handleContentEnter}
          onMouseLeave={handleContentLeave}
          onPointerDownOutside={(e) => e.preventDefault()}
        >
          <span
            className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-8 border-transparent border-t-white"
            aria-hidden
          />
          {segment.logo ? (
            <Image
              src={segment.logo}
              alt=""
              width={140}
              height={40}
              className="mb-2 h-10 w-auto object-contain"
            />
          ) : (
            <span className="mb-2 font-semibold text-foreground">
              {segment.title}
            </span>
          )}
          <span className="text-left text-sm text-foreground/80">
            {segment.description}
          </span>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export function Bio({ segments }: { segments: BioSegment[] }) {
  return (
    <p className="mt-6 max-w-xl text-foreground/85 leading-relaxed">
      {segments.map((segment) => {
        if (segment.type === "text") {
          return <span key={segment.value}>{segment.value}</span>;
        }
        return <PopoverSegment key={segment.trigger} segment={segment} />;
      })}
    </p>
  );
}
