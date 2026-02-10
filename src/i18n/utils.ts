import { translations, type Lang } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'de';
}

export function t(lang: Lang) {
  return translations[lang];
}

/**
 * Maps a page path from one language to the other.
 * e.g. /ueber-mich -> /en/about, /en/about -> /ueber-mich
 */
const pathMap: Record<string, string> = {
  '/': '/en/',
  '/en/': '/',
  '/ueber-mich': '/en/about',
  '/en/about': '/ueber-mich',
  '/timeline': '/en/timeline',
  '/en/timeline': '/timeline',
  '/projekte': '/en/projects',
  '/en/projects': '/projekte',
  '/kontakt': '/en/contact',
  '/en/contact': '/kontakt',
};

export function getLocalePath(currentPath: string, targetLang: Lang): string {
  // Normalize trailing slashes for lookup (except root paths)
  const normalized = currentPath === '/' || currentPath === '/en/'
    ? currentPath
    : currentPath.replace(/\/$/, '');

  // Direct match
  if (pathMap[normalized]) {
    return pathMap[normalized];
  }

  // Handle experience detail pages: /erfahrung/slug <-> /en/experience/slug
  if (normalized.startsWith('/erfahrung/')) {
    const slug = normalized.replace('/erfahrung/', '');
    return `/en/experience/${slug}`;
  }
  if (normalized.startsWith('/en/experience/')) {
    const slug = normalized.replace('/en/experience/', '');
    return `/erfahrung/${slug}`;
  }

  // Fallback: go to home of target language
  return targetLang === 'en' ? '/en/' : '/';
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'de' ? 'en' : 'de';
}
