# D.Johansson Byggservice AB

Denna Nuxt-applikation driver webbplatsen för D.Johansson Byggservice AB – en byggfirma i Varberg som erbjuder allt från altanbyggen till fasadbyten. Projektet baseras på Nuxt UI men har anpassats med svensk copy, projektcase och kontaktinformation.

## Struktur
- `app/` – komponenter, layouts och siddefinitioner.
- `content/` – allt kundinnehåll i Nuxt Content-format (`index.yml`, `kontakt.yml`, `projekt/`).
- `public/images/` – bilder som används på webbplatsen.

## Utveckling
Installera beroenden och starta utvecklingsservern:

```bash
pnpm install
pnpm dev
```

Bygg och förhandsgranska produktionen:

```bash
pnpm build
pnpm preview
```

## Innehållsredigering
Text, bilder och metadata hanteras i filerna under `content/`. Projektsektionen hämtar markdown-filer från `content/projekt/` och kontaktuppgifter kommer från `content/kontakt.yml` och `app/app.config.ts`.

