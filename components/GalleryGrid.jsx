"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { LuArrowLeft, LuArrowRight, LuX } from "react-icons/lu";
import { gallery } from "@/data/gallery";

const groups = ["All", ...new Set(gallery.map((item) => item.group))];

// Filter chips, a masonry-style grid and a native dialog lightbox with keyboard support.
export default function GalleryGrid() {
  const [group, setGroup] = useState("All");
  const [active, setActive] = useState(null);
  const dialog = useRef(null);
  const visible = group === "All" ? gallery : gallery.filter((item) => item.group === group);
  const current = active === null ? null : visible[active];

  const open = (index) => {
    setActive(index);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();
  const step = (direction) => setActive((index) => (index + direction + visible.length) % visible.length);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  };

  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
          {groups.map((item) => {
            const selected = group === item;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={selected}
                onClick={() => setGroup(item)}
                className={`h-11 rounded-full px-5 text-sm font-semibold transition active:scale-[0.98] ${
                  selected
                    ? "bg-teal-700 text-white shadow-xs"
                    : "bg-white text-teal-950 ring-1 ring-teal-950/20 hover:ring-teal-700"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <ul className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {visible.map((item, index) => (
            <li key={item.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => open(index)}
                aria-label={`Open photo: ${item.caption}`}
                className="group relative block w-full overflow-hidden rounded-[24px] bg-teal-100 text-left ring-1 ring-teal-950/10"
              >
                <span className={`relative block ${item.ratio === "tall" ? "aspect-[4/5]" : "aspect-[3/2]"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </span>
                <span className="absolute inset-x-0 bottom-0 bg-linear-to-t from-teal-950/85 to-transparent p-4 pt-12 text-sm font-semibold text-white">
                  {item.caption}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onKeyDown={onKeyDown}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
        aria-label="Photo viewer"
        className="m-auto w-[min(94vw,1100px)] max-w-none bg-transparent p-0 text-white backdrop:bg-teal-950/90 backdrop:backdrop-blur-sm"
      >
        {current ? (
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-base font-semibold">{current.caption}</p>
              <button
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="grid size-12 place-items-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <LuX size={20} />
              </button>
            </div>
            <Image
              src={current.src}
              alt={current.alt}
              width={1400}
              height={1000}
              sizes="94vw"
              className="mx-auto max-h-[72dvh] w-auto rounded-[24px] object-contain"
            />
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="grid size-12 place-items-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <LuArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="grid size-12 place-items-center rounded-full bg-white/15 transition hover:bg-white/25"
              >
                <LuArrowRight size={20} />
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}
