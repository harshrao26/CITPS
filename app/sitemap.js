import { courses } from "@/data/courses";
import { site } from "@/data/site";

const pages = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/courses", priority: 0.9 },
  { path: "/admissions", priority: 0.9 },
  { path: "/placements", priority: 0.9 },
  { path: "/facilities", priority: 0.8 },
  { path: "/gallery", priority: 0.6 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap() {
  const courseEntries = courses.map((course) => ({
    url: `${site.url}/courses/${course.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      changeFrequency: "monthly",
      priority: page.priority,
    })),
    ...courseEntries,
  ];
}
