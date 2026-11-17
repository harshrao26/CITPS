import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} (${site.shortName})`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.shortName,
    title: `${site.name} (${site.shortName}) | Patna, Bihar`,
    description: site.description,
    locale: site.locale,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} (${site.shortName}) - Premier Paramedical Institute Patna`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} (${site.shortName})`,
    description: site.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/images/citps-logo.png`,
  image: `${site.url}/images/og-image.jpg`,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bailey Road, Near Saguna More, Danapur",
    addressLocality: "Patna",
    addressRegion: "Bihar",
    postalCode: "801503",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-612-299-8844",
    contactType: "admissions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-[#231F20] bg-white">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
