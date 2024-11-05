import { about_title, links } from "./constants"
import type { Props } from "./layouts/Layout.astro"

export const getJsonMeta = (props: Props, url: URL) => {
  let type = ""
  let meta = {}

  switch (props.type) {
    case "article":
      type = "BlogPosting"
      meta = {
        dateModified: props.dateModified,
        datePublished: props.dateModified,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": url
        }
      }
      break;
    case "website":
      type = "WebSite"
      meta = {
        name: about_title,
        sameAs: links
      }
      break;
    default:
      break;
  }




  return {
    "@context": "https://schema.org/",
    "@type": type,
    author: { "@type": "Person", name: "Anton Zalialdinov" },
    description: props.description,
    headline: props.title,
    url: url,
    ...meta
  }
}