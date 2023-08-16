# Vortech frontend 2023

The static React frontend for 2023.

This will be used in the GitHub page at https://vortechband.github.io

## Stack

- React
- Next.js
- Testing-library

## Setup

- Run `npm run dev` to view in browser
- Run `npm run deploy` to generate a release locally

## Test

- Run `npm test`

## Things to note

This will not connect to any API or database (yet). So for the meantime the
updates to "database-y" things will be done kinda funnily via commits to the
static JSON files in this project. These are updated somewhat infrequently:

- public/news.json
- public/releases.json

## Future things

- [ ] Database, of course
- [ ] Guestbook
- [ ] User interaction (comments, upvotes, etc)

## Notes to self

- When serving in Github Pages, the host repo needs to have an empty file
  called `.nojekyll` in the root, in order to serve Next's `_next` dir files.
- Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files. https://nextjs.org/docs/getting-started/installation#creating-directories
  - Eg. `app/something/page.tsx` -> Browsing to http://localhost:3000/something will show the component
