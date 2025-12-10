Place a hero background MP4 here so the hero section can use the local fallback.

File path expected by the app:

  public/videos/hero.mp4

Options to add the file:

1) Auto-download (Windows PowerShell)

   From the repository root run:

   powershell -ExecutionPolicy Bypass -File .\scripts\download-hero-video.ps1

   This downloads a small sample MP4 (~1.5MB) into `public/videos/hero.mp4`.

2) Manual download

   Download any HD MP4 you own or have rights to and place it at `public/videos/hero.mp4`.

Notes
- The video fallback is optional. If `public/videos/hero.mp4` exists the hero will attempt to autoplay it muted and looped.
- Browser autoplay policies require the video to be muted to autoplay. The component sets `muted` and `playsInline`.
- If you prefer a different file name, update the `<source>` path in `components/hero.tsx`.
