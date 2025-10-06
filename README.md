# Sweet Time UF

![Logga](/images/sweettime-vit-loggo.png)
![Mockup Sweet Time UF](/images/mockup-sweettime-uf.jpg)

Sweet Time UF är en Next.js-applikation byggd för att visa och sälja premiumgodis i bulk. Projektet använder Next.js App Router, Tailwind CSS och TypeScript, och är strukturerat för enkel vidareutveckling och distribution.

## Innehåll

- Kort beskrivning
- Funktioner
- Teknisk stack
- Förutsättningar
- Snabbstart
- Projektstruktur
- Vanliga problem och felsökning
- Bidra
- Licens

## Beskrivning

Sweet Time UF erbjuder ett sortiment av kvalitetsgodis från Karamello AB. Webbplatsen innehåller produktpresentation, karuseller, offertförfrågan och kampanjsidor (t.ex. julprodukter). Koden följer Next.js App Router-konventioner och använder återanvändbara komponenter i `src/components`.

## Funktioner

- Next.js App Router (server- och client-komponenter)
- Responsiv design med Tailwind CSS
- Bildhantering med Next.js `Image`
- Metadata (Open Graph/Twitter/canonical) konfigurerat i `src/app/layout.tsx`
- Exempelkomponenter: hero, produktkort, bildkarusell

## Teknisk stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint

## Förutsättningar

- Node.js (rekommenderat 18+)
- npm eller annan package manager

## Snabbstart

1. Klona repot och gå till projektmappen

```powershell
git clone <repo-url>
cd c:\Users\Student\Documents\PORTFOLIO\PROJECT\sweettime
```

2. Installera beroenden

```powershell
npm install
```

3. Starta utvecklingsservern

```powershell
npm run dev
```

Öppna sedan http://localhost:3000 i din webbläsare.

4. Bygg och kör i produktion

```powershell
npm run build
npm run start
```

5. Kör linter

```powershell
npm run lint
```

## Skript (i package.json)

- `dev` — Starta Next.js i utvecklingsläge
- `build` — Bygg för produktion
- `start` — Starta den byggda applikationen
- `lint` — Kör ESLint

## Projektstruktur (viktiga mappar)

- `src/app/` — App Router-rutter och sidor
- `src/components/` — Återanvändbara komponenter
- `src/Data/` — Lokala datafiler (t.ex. produkter)
- `src/lib/` — Hjälpfunktioner
- `public/` — Statisk media (bilder, favicon)
- `tailwind.config.ts` — Tailwind-konfiguration
- `next.config.ts` — Next.js-konfiguration

## Vanliga problem och felsökning

- **Multiple lockfiles / workspace root**: Om Next.js visar varning om workspace root p.g.a flera lockfiles, ta bort onödig lockfile eller ange `turbopack.root` i `next.config.ts`.
- **Fonts**: Lägg inte externa Google Fonts i `head.tsx`; använd `next/font/google` i `layout.tsx` med App Router.
- **Metadata-varningar**: Flytta `viewport` och `themeColor` till separata exports (`export const viewport = { ... }`) om Next.js varnar för att de inte stöds i metadata-exporten.
- **Styled-jsx**: Om du använder `<style jsx>` och får fel, installera `styled-jsx` eller flytta CSS till global CSS/Tailwind.
- **Bilder visas inte**: Kontrollera sökvägar i `public/images` och att `Image`-komponenten använder rätt `src`.

## Bidra

1. Forka repot
2. Skapa feature-branch: `git checkout -b feature/namn`
3. Gör ändringar och testa lokalt
4. Skapa pull request

## Licens

Detta projekt är licensierat under Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0). Du får kopiera, dela och anpassa materialet, men inte använda det i kommersiellt syfte utan skriftligt tillstånd. Se filen `LICENSE` för detaljer.

## Kontakt

För frågor eller support:

- E-post: lg.sweets10@gmail.com

## Kod och Design

Kod och design av Josefine Eriksson https://kodochdesign.se
