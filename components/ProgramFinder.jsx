"use client";

import { useState } from "react";
import { LuCompass, LuClock, LuGraduationCap, LuCheck, LuArrowRight } from "react-icons/lu";
import { programCategories } from "@/data/bmsitData";

export default function ProgramFinder() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const currentCategory = programCategories.find((cat) => cat.id === selectedCategory) || programCategories[0];
  const [selectedCourseId, setSelectedCourseId] = useState(currentCategory.courses[0].id);

  const activeCourse =
    currentCategory.courses.find((c) => c.id === selectedCourseId) || currentCategory.courses[0];

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const newCat = programCategories.find((c) => c.id === catId);
    if (newCat && newCat.courses.length > 0) {
      setSelectedCourseId(newCat.courses[0].id);
    }
  };

  return (
    <section id="program-finder" className="relative z-10 -mb-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Exact BMSIT .home-interest-box */}
        <div className="bms-glass-card p-6 sm:p-10 bg-white/95">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[#ececec]">
            <div className="flex items-center gap-2">
              <LuCompass className="size-6 text-[#3A74B8]" />
              <h3 className="text-2xl sm:text-3xl font-normal text-[#231F20]">
                Find <strong>Your Interest!</strong>
              </h3>
            </div>

            {/* Choose Programs Category Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-[#888] uppercase mr-2 hidden md:inline">
                Choose Programs:
              </span>
              {programCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold uppercase transition ${
                    selectedCategory === cat.id
                      ? "bg-[#3A74B8] text-white shadow-xs"
                      : "bg-[#f5f5f5] text-[#231F20] hover:bg-[#e8e8e8]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Courses Grid Selector & Preview */}
          <div className="grid gap-8 lg:grid-cols-12 pt-6 items-start">
            {/* Choose Courses pills */}
            <div className="lg:col-span-5 flex flex-col gap-2 max-h-[380px] overflow-y-auto pr-2">
              <span className="text-xs font-bold text-[#888] uppercase mb-1">
                Choose Courses:
              </span>
              {currentCategory.courses.map((course) => {
                const isSelected = course.id === activeCourse.id;
                return (
                  <button
                    key={course.id}
                    type="button"
                    onClick={() => setSelectedCourseId(course.id)}
                    className={`flex items-center justify-between text-left p-3.5 rounded-xl border text-sm font-semibold transition ${
                      isSelected
                        ? "border-[#3A74B8] bg-[#3A74B8]/10 text-[#3A74B8]"
                        : "border-[#ececec] bg-white text-[#231F20] hover:bg-[#f9f9f9]"
                    }`}
                  >
                    <span>{course.title}</span>
                    {isSelected ? <LuCheck size={16} className="text-[#3A74B8] shrink-0" /> : null}
                  </button>
                );
              })}
            </div>

            {/* Course Summary Box */}
            <div className="lg:col-span-7 rounded-2xl bg-[#FCFAEB] p-6 sm:p-8 border border-[#e8e4c9]">
              <span className="inline-block rounded bg-[#3A74B8] px-2.5 py-1 text-[11px] font-bold text-white uppercase tracking-wide">
                {activeCourse.level}
              </span>

              <h4 className="mt-3 text-2xl sm:text-3xl font-bold text-[#231F20]">
                {activeCourse.title}
              </h4>

              <p className="mt-2 text-sm leading-relaxed !text-[#333333] font-medium">
                {activeCourse.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6 py-4 border-y border-[#e2dec0]">
                <div className="flex items-center gap-2.5">
                  <LuClock size={20} className="text-[#3A74B8]" />
                  <div>
                    <span className="block text-[10px] text-[#777] uppercase font-bold">Duration</span>
                    <span className="text-xs font-bold text-[#231F20]">{activeCourse.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <LuGraduationCap size={20} className="text-[#3A74B8]" />
                  <div>
                    <span className="block text-[10px] text-[#777] uppercase font-bold">Intake</span>
                    <span className="text-xs font-bold text-[#231F20]">{activeCourse.intake}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <LuCheck size={20} className="text-[#3A74B8]" />
                  <div>
                    <span className="block text-[10px] text-[#777] uppercase font-bold">Status</span>
                    <span className="text-xs font-bold text-[#231F20]">Council Recognized</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1 mb-6">
                <span className="text-[11px] font-bold text-[#231F20] uppercase">
                  Eligibility Criteria:
                </span>
                <span className="text-xs !text-[#333333] font-medium">{activeCourse.eligibility}</span>
              </div>

              <div className="flex items-center gap-4">
                <a href="#admissions" className="btn-one-full">
                  <span>APPLY FOR THIS PROGRAM</span>
                  <LuArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
