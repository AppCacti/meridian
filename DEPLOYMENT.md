# Meridian Deployment Checklist

## Fastest Public Launch

Use one of these:

- Cloudflare Pages
- Netlify
- Vercel

This is a static site. There is no build step.

## Files To Deploy

Deploy only:

```text
meridian-deal-partners-site/public
```

Do not deploy the full launch-kit folder. The root folder contains private operating docs, sales scripts, legal notes, and internal positioning.

Public files included:

- `public/index.html`
- `public/styles.css`
- `public/script.js`
- `public/assets/`
- `public/vercel.json`
- `public/netlify.toml`
- `public/_headers`

## Before Deploy

1. Buy domain.
2. Set up inbox.
3. Replace all instances of:

```text
partners@meridiandealpartner.com
```

4. Confirm the legal disclaimer is acceptable after counsel review.

## Vercel

1. New Project.
2. Import/upload the `public` folder.
3. Framework preset: Other.
4. Build command: leave empty.
5. Output directory: `.`
6. Deploy.
7. Add custom domain.

## Netlify

1. Add new site.
2. Deploy manually or connect repo.
3. Publish directory: `.`
4. Build command: leave empty.
5. Add custom domain.

## Cloudflare Pages

1. Create Pages project.
2. Upload the `public` folder or connect repo with `public` as output.
3. Framework preset: None.
4. Build command: leave empty.
5. Build output directory: `/`
6. Add custom domain.

## Smoke Test

After deploy, test:

- Homepage loads.
- Hero image loads.
- Favicon appears.
- Inquiry buttons open the right email.
- Mobile view works.
- No old Hegemonic branding appears on the public page.
