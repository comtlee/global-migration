import { cookieName, fallbackLng, languages } from '@/app/i18n/settings';
import acceptLanguage from 'accept-language';
import { NextResponse, NextRequest } from 'next/server';

acceptLanguage.languages(languages); // 지원하는 언너 목록 초기화

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};

const getLanguageFromRequest = (req: NextRequest): string | undefined => {
  const cookie = req.cookies.get(cookieName);
  if (cookie) {
    return acceptLanguage.get(cookie.value) || undefined;
  }

  const acceptLanguageHeader = req.headers.get('accept-language');
  return acceptLanguage.get(acceptLanguageHeader ?? undefined) || undefined;
};

export function middleware(req: NextRequest) {
  let lng: string | undefined = getLanguageFromRequest(req);

  if (!lng) {
    lng = fallbackLng;
  }

  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer') as string);
    const lngInReferer = languages.find(l =>
      refererUrl.pathname.startsWith(`/${l}`)
    );
    const response = NextResponse.next();
    if (lngInReferer) {
      response.cookies.set(cookieName, lngInReferer);
      return response;
    }
  }
  return NextResponse.next();
}
