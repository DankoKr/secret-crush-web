import type { AvailableSlugs, Locale } from "~/types/common.types";

export const useLocalizedLink = () => {
  const globalLocale = useState<Locale>("global-locale");
  
  /**
   * Resolves a link that could be either a localized object or a plain string
   * @param link Either a localization object or direct string path
   * @returns The localized path string
   */
  const resolveLink = (link: AvailableSlugs | string): string => {
    if (typeof link === "object" && link !== null) {
      return link[globalLocale.value];
    }

    return link;
  };

  return {
    resolveLink
  };
};