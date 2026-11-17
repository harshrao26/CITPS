// Every page sets its own canonical URL. metadataBase in the root layout makes these absolute.
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}
