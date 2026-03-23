# AchtsamSprechen – HTML Export
## Basierend auf dem Lovable React-Projekt (mindful-speak-coach)

---

## Dateien

| Datei            | Seite              |
|------------------|--------------------|
| index.html       | Startseite         |
| ueber-mich.html  | Über mich          |
| programme.html   | Programme          |
| methode.html     | Die Methode        |
| seminare.html    | Seminare           |
| blog.html        | Impulse / Blog     |
| kontakt.html     | Kontakt            |
| styles.css       | Alle Styles        |
| main.js          | Interaktivität     |

---

## Bilder (aus Lovable-Projekt übernehmen)

Folgende Bilder müssen im selben Ordner liegen:

- `hero-home.jpg`      → Startseite Hero
- `about-hero.jpg`     → Über-mich Hero
- `method-image.jpg`   → Methoden-Seite
- `seminars-hero.jpg`  → Seminare Hero

→ Diese findest du im Lovable-Projekt unter `src/assets/`

---

## WordPress-Integration

### Option A – Static Pages (empfohlen für Anfänger)
1. Im WP-Backend: **Seiten → Neu hinzufügen**
2. Wechsle zum "Code-Editor" (Block-Editor)
3. Füge den HTML-Inhalt zwischen `<nav>` und `</footer>` ein
4. Styles und JS in `functions.php` einbinden:

```php
function achtsamsprechen_assets() {
    wp_enqueue_style(  'as-styles', get_template_directory_uri() . '/assets/styles.css' );
    wp_enqueue_script( 'as-main',   get_template_directory_uri() . '/assets/main.js', [], null, true );
}
add_action( 'wp_enqueue_scripts', 'achtsamsprechen_assets' );
```

### Option B – Page Builder (Elementor / Bricks)
- Erstelle eine neue Seite mit **Canvas-Template** (kein Header/Footer)
- Füge ein **HTML-Widget** ein
- Paste den vollständigen HTML-Code

### Option C – Custom Child Theme
1. Erstelle ein Child-Theme basierend auf Twenty Twenty-Four
2. Kopiere `styles.css` und `main.js` in den Theme-Ordner
3. Erstelle `page-templates/` mit je einem Template pro Seite
4. Nutze `get_header()` / `get_footer()` für Navigation und Footer

---

## Kontaktformular

Das Formular ist aktuell ein Demo-Formular. Für echte E-Mail-Funktionalität:

**Option 1 – WP Plugin:** Contact Form 7 oder Gravity Forms  
**Option 2 – Formspree:** `<form action="https://formspree.io/f/YOURKEY" method="POST">`  
**Option 3 – Netlify Forms:** `<form name="kontakt" netlify>` (nur bei Netlify-Hosting)

---

## Anpassungen

### Farben ändern
In `styles.css` unter `:root`:
```css
--primary: hsl(145, 25%, 32%);  /* Salbeigrün */
--warm:    hsl(35, 60%, 55%);   /* Warm-Amber */
```

### Kontaktdaten
Suche und ersetze in allen HTML-Dateien:
- `info@achtsamSprechen.de` → deine E-Mail
- `+49 (0) 123 456 789` → deine Telefonnummer

---

Erstellt mit Claude (Anthropic) · Design basierend auf Lovable-Projekt mindful-speak-coach
