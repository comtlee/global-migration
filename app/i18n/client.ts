'use client';
import i18next, { FlatNamespace, KeyPrefix } from 'i18next';
import {
  FallbackNs,
  initReactI18next,
  UseTranslationOptions,
  UseTranslationResponse,
  useTranslation as useTranslationOrg,
} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { cookieName, getOptions, languages } from './settings';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const runsOnServerSide = typeof window === 'undefined';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init({
    ...getOptions(),
    lng: 'en',
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: runsOnServerSide ? languages : [],
  });

export function useTranslation<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined,
>(
  lng: string,
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const [cookies, setCookies] = useCookies([cookieName]);
  const { i18n, ...rest } = useTranslationOrg(ns, options);
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
      i18n.changeLanguage(lng);
    } else {
      if (activeLng !== i18n.resolvedLanguage) {
        setActiveLng(i18n.resolvedLanguage);
      }
      if (lng && i18n.resolvedLanguage !== lng) {
        i18n.changeLanguage(lng);
      }
      if (cookies[cookieName] !== lng) {
        setCookies(cookieName, lng, { path: '/home' });
      }
    }
  }, [lng, i18n, activeLng, cookies, setCookies]);
  return { i18n, ...rest };
}
