# Migration Notes

## Old Structure Summary

Source site: `maveryn/xashru.github.io`

The previous site used an Academic Pages / Minimal Mistakes structure with collections such as:

- `_pages`
- `_publications`
- `_portfolio`
- `_posts`
- `_talks`
- `_teaching`
- `files`
- `images`

The old repository is preserved in this repo under `archive/old-site-snapshot/`.

## New Structure Summary

The migrated site is a fresh `al-folio` build centered around:

- [About](/home/jovyan/work/maveryn.github.io/_pages/about.md)
- [Publications](/home/jovyan/work/maveryn.github.io/_pages/publications.md)
- [Repos](/home/jovyan/work/maveryn.github.io/_pages/repositories.md)
- [CV](/home/jovyan/work/maveryn.github.io/_pages/cv.md)
- [papers.bib](/home/jovyan/work/maveryn.github.io/_bibliography/papers.bib) for publications
- [_projects](/home/jovyan/work/maveryn.github.io/_projects) for lightweight repo/project hubs

## Major Content Mappings

- Old `about.md` content was rewritten into the new landing page in [about.md](/home/jovyan/work/maveryn.github.io/_pages/about.md).
- Old publication markdown entries were normalized into BibTeX in [papers.bib](/home/jovyan/work/maveryn.github.io/_bibliography/papers.bib).
- The old CV PDF was moved to [CV_Md_Tanvirul_Alam.pdf](/home/jovyan/work/maveryn.github.io/assets/pdf/CV_Md_Tanvirul_Alam.pdf).
- Old portfolio, talks, teaching, and blog demo content was intentionally removed rather than ported because it was template filler.
- The old site archive remains in [archive/old-site-snapshot](/home/jovyan/work/maveryn.github.io/archive/old-site-snapshot).

## Deployment Notes

This site is configured as a GitHub Pages **user site**:

- `url: https://maveryn.github.io`
- `baseurl: ""`

To deploy:

1. Create or rename the target GitHub repository to `maveryn.github.io`.
2. Push the `main` branch.
3. In GitHub, enable Actions and give workflows read/write permissions.
4. Wait for the bundled `Deploy site` workflow to publish the `gh-pages` branch.
5. In `Settings -> Pages`, set the source to the `gh-pages` branch.

## Adding Future Content

- Add publications to [papers.bib](/home/jovyan/work/maveryn.github.io/_bibliography/papers.bib).
- Add or reorder featured repo/project cards in [_projects](/home/jovyan/work/maveryn.github.io/_projects).
- Update profile links in [socials.yml](/home/jovyan/work/maveryn.github.io/_data/socials.yml).
- Update global site metadata and deployment settings in [_config.yml](/home/jovyan/work/maveryn.github.io/_config.yml).
