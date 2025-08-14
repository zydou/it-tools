import { locales } from "./languages";

export function getStaticPaths() {
  return [
    { params: { lang: undefined },  },
    ...locales.map((lang) => ({params: { lang },})),
  ];
}