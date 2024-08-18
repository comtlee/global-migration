import { createInstance, FlatNamespace, KeyPrefix } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { getOptions } from './settings';
import { FallbackNs } from 'react-i18next';

/**
 * Initializes an i18next instance with given language and namespaces.
 *
 * @param lng - The language to use.
 * @param ns - The namespaces to load.
 * @returns A promise that resolves to an initialized i18next instance.
 */
const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
    .init(getOptions(lng, ns));
  return i18nInstance;
};

/**
 * Custom hook to use translation with i18next.
 *
 * @param lng - The language to use.
 * @param ns - The namespaces to load.
 * @param options - Additional options for the translation.
 * @returns An object containing the translation function and the i18next instance.
 */
export async function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(lng: string, ns?: Ns, options: { KeyPrefix?: KPrefix } = {}) {
  const namespaces = Array.isArray(ns) ? (ns as string[]) : (ns as string);

  const i18nextInstance = await initI18next(lng, namespaces);

  return {
    t: i18nextInstance.getFixedT(lng, ns, options.KeyPrefix),
    i18n: i18nextInstance,
  };
}
