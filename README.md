# Trinetra Enterprises — CCTV Installation Website

A lightweight, responsive static site for Trinetra Enterprises. It includes a hero, services, gallery (images and videos with lightbox), testimonials, and contact CTA.

## Local Preview
- Open `index.html` directly in a browser, or serve locally:
  
  ```bash
  # Option 1: Python
  python3 -m http.server 8000
  # Visit http://localhost:8000
  
  # Option 2: Node (if installed)
  npx serve -p 8000
  ```

## Add Images & Videos
- Place images in `assets/images/` and videos in `assets/videos/`.
- Update the gallery list in `script.js`:
  
  ```js
  const galleryItems = [
    { type: 'image', src: 'assets/images/entry-camera.jpg', caption: 'Entry camera' },
    { type: 'video', src: 'assets/videos/demo.mp4', caption: 'Demo footage' },
  ];
  ```

## Customize Text
- Update headings and paragraphs in `index.html`.
- Colors and layouts can be changed in `styles.css`.

## Deploy to GitHub Pages
1. Create a new GitHub repository (public).
2. Push this folder contents to the repo root.
3. In GitHub: Settings → Pages → Build and deployment → Branch: `main` (or `master`) → `/ (root)`.
4. Wait for a minute; your site will be available at the GitHub Pages URL shown there.

### Example Commands
```bash
# Initialize git and push
git init
git branch -m main
git add .
git commit -m "Initial site for Trinetra Enterprises"
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## SEO / Meta
- Update the `og:url` in `index.html` to your GitHub Pages URL.
- Optionally add a `CNAME` file if using a custom domain.

## License
You may use and modify this template for Trinetra Enterprises. 