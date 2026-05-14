# Secret-crush-web

## Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions whenever changes are pushed to the `main` branch.

### Custom Domain

The project is configured to use the custom domain `secretcrush.io`.

#### Namecheap Configuration

To make this work, ensure your Namecheap DNS settings are configured as follows:

1.  **A Records**: Point to GitHub Pages IP addresses:
    - 185.199.108.153
    - 185.199.109.153
    - 185.199.110.153
    - 185.199.111.153
2.  **CNAME Record**: Host `www` pointing to `DankoKr.github.io`.

### Local Development

```bash
$ npm install

$ npm run dev

$ npm run build
$ npm run preview

# generate static project
$ npm run generate
```
