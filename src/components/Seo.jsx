import { useEffect } from "react";

const Seo = ({
  title,
  description,
  path = "/",
  keywords = "",
  image = "/logo.webp",
  type = "website",
  noindex = false,
}) => {
  useEffect(() => {
    const baseUrl = "https://realfranuzzi.site";
    const canonicalUrl = `${baseUrl}${path}`;

    document.title = title;

    const setMeta = (selector, attribute, value) => {
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");

        if (selector.includes('name="')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];

          if (name) {
            element.setAttribute("name", name);
          }
        }

        if (selector.includes('property="')) {
          const property = selector.match(/property="([^"]+)"/)?.[1];

          if (property) {
            element.setAttribute("property", property);
          }
        }

        document.head.appendChild(element);
      }

      element.setAttribute(attribute, value);
    };

    setMeta('meta[name="description"]', "content", description);

    setMeta(
      'meta[name="robots"]',
      "content",
      noindex ? "noindex, nofollow" : "index, follow",
    );

    if (keywords) {
      setMeta('meta[name="keywords"]', "content", keywords);
    }

    setMeta('meta[property="og:title"]', "content", title);

    setMeta('meta[property="og:description"]', "content", description);

    setMeta('meta[property="og:url"]', "content", canonicalUrl);

    setMeta('meta[property="og:type"]', "content", type);

    setMeta('meta[property="og:image"]', "content", `${baseUrl}${image}`);

    setMeta('meta[property="og:site_name"]', "content", "FC Real Franuzzi");

    setMeta('meta[property="og:locale"]', "content", "it_IT");

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);
  }, [title, description, path, keywords, image, type, noindex]);

  return null;
};

export default Seo;
