# Bitchenfag Converter

A simple static web application that provides two main functions:

1.  **Encrypt:** Converts a 7-digit number into a 7-character string using the BITCHENFAG cipher:
    *   0=B, 1=I, 2=T, 3=C, 4=H, 5=E, 6=N, 7=F, 8=A, 9=G
2.  **Decrypt:** Converts a 7-character BITCHENFAG string back into its original 7-digit number.

The application features:
*   Input validation for both fields.
*   Copy-to-clipboard functionality for the results.
*   Toast notifications for copy actions.
*   A dark blue theme with white text.
*   Progressive Web App (PWA) capabilities, allowing installation on mobile devices.

## Deployment

This is designed as a static site, perfect for deployment on services like GitHub Pages, Netlify, Vercel, etc.

### GitHub Pages

1.  Ensure your repository has the code in the main/master branch or a specific `gh-pages` branch.
2.  Go to your repository's **Settings** tab.
3.  Navigate to the **Pages** section in the sidebar.
4.  Under **Build and deployment**, select **Deploy from a branch**.
5.  Choose the branch you want to deploy from (e.g., `main`).
6.  Select the `/ (root)` folder.
7.  Click **Save**.
8.  Your site will be available at `https://<your-username>.github.io/<your-repo-name>/`.

## PWA Notes

The `manifest.json` and basic service worker registration (`index.html`) are included. For full offline functionality, a `service-worker.js` file would need to be created to cache assets. Basic icons referenced in `manifest.json` would also need to be added to an `icons/` directory. 