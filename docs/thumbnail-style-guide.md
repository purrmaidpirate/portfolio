# Portfolio Thumbnail Style Guide

## Concept

Every project thumbnail is rendered as a **photorealistic Renaissance oil painting** using AI image generation. The source photo is the project in action (people using it, the object itself, process shots). The output looks like a 17th-century Dutch Golden Age or Baroque genre painting — rich chiaroscuro, warm amber light, impasto brushwork — with the project as the luminous subject.

This creates a unified visual identity across all work: each piece looks like it could hang in a museum, regardless of whether it's a game, an AR filter, or a 3D render.

---

## Tool: Nano Banana Pro

**Skill location:** `~/.claude/skills/nano-banana-pro/`
**API key:** stored in `~/.claude/skills/nano-banana-pro/.env` and exported via `~/.zshrc` as `GEMINI_API_KEY`
**Model:** Gemini 3.1 Flash Image (image-to-image editing)

---

## Process for Each New Project

### 1. Choose a source image
Pick a photo where:
- The project/object is clearly visible and central
- There are people interacting with it (preferred — more painterly)
- The composition has some depth (not flat lay only)

Good candidates: action shots, demo moments, playtesting, the finished object in use.

### 2. Copy images to portfolio
```bash
mkdir -p /Users/ranjaniramakrishnan/Documents/portfolio/public/projects/{project-slug}/
cp path/to/source-photos/*.jpg /Users/ranjaniramakrishnan/Documents/portfolio/public/projects/{project-slug}/
```

### 3. Generate the painting
```bash
GEMINI_API_KEY=AIzaSyAdINzgNX_3J5dKG_dezaDuSLSZODlo1Ao python3 ~/.claude/skills/nano-banana-pro/scripts/generate_image.py \
  --prompt "Transform this photograph into a photorealistic Renaissance oil painting. Render the scene as if painted by a Dutch Golden Age master — rich chiaroscuro lighting, warm amber and deep shadow tones, visible brushwork on the figures and objects, thick impasto texture. The [PROJECT SUBJECT] should be the luminous focal point of the composition, lit from a single warm light source. The figures should be rendered with the solemnity and presence of a Vermeer or Caravaggio portrait. Preserve all the compositional elements but translate every element into oil paint on canvas. The background should recede into warm shadow. Make it feel like a 17th-century genre painting." \
  --input-image "/Users/ranjaniramakrishnan/Documents/portfolio/public/projects/{project-slug}/{source-photo}.jpg" \
  --filename "/Users/ranjaniramakrishnan/Documents/portfolio/public/projects/{project-slug}/thumbnail-painting.png" \
  --resolution 2K
```

Replace `[PROJECT SUBJECT]` with what the painting should emphasize (e.g., "the chess board with its colorful numbered tokens", "the AR filter interface", "the laser-cut wooden board").

### 4. Review the output
```bash
# Open the generated file to review
open /Users/ranjaniramakrishnan/Documents/portfolio/public/projects/{project-slug}/thumbnail-painting.png
```

If it needs another attempt, re-run the command — each generation varies slightly. Try different source images if the composition isn't working.

### 5. Set as thumbnail in projects.ts
```ts
thumbnail: {
  url: "/projects/{project-slug}/thumbnail-painting.png",
  width: 1365,   // typical 2K output width
  height: 1820,  // typical 2K output height (portrait)
  alt: "{Project Name} — Renaissance oil painting",
},
```

### 6. Commit
```bash
cd /Users/ranjaniramakrishnan/Documents/portfolio
git add public/projects/{project-slug}/ src/data/projects.ts
git commit -m "feat: add {project-name} with oil painting thumbnail"
git push origin main
```

---

## Prompt Template

Copy and fill in the blanks:

```
Transform this photograph into a photorealistic Renaissance oil painting.
Render the scene as if painted by a Dutch Golden Age master — rich chiaroscuro
lighting, warm amber and deep shadow tones, visible brushwork on the figures
and objects, thick impasto texture. The [FOCAL SUBJECT] should be the luminous
focal point of the composition, lit from a single warm light source. The figures
should be rendered with the solemnity and presence of a Vermeer or Caravaggio
portrait. Preserve all the compositional elements — [LIST KEY ELEMENTS] — but
translate every element into oil paint on canvas. The background [DESCRIBE ENV]
should recede into warm shadow. Make it feel like a 17th-century genre painting
of [SCENE DESCRIPTION].
```

---

## Completed Projects

| Project | Source Image | Status |
|---------|-------------|--------|
| Rand()Master | `playtesting-2.jpg` (game in action, ITP shop) | ✅ Done |

---

## Notes

- **Resolution:** Always use `--resolution 2K` for thumbnails. The 2K output is auto-detected from the input image size when the source is 1080px+.
- **Format:** Output is always PNG. Vite serves these fine as static assets.
- **Re-generation:** Each run produces a different painting. Keep trying if the first result isn't right — 2–3 attempts usually yields a great one.
- **Portrait vs landscape:** Most project photos are portrait (1080×1440). The output painting will match the source aspect ratio roughly.
