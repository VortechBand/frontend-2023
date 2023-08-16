# Vortech frontend 2023

The static React frontend for 2023. 

This will be used in the GitHub page at https://vortechband.github.io

## Setup

1. `npm install`
2. `npm start`
3. Open http://localhost:3000 in a browser

## Deploy

1. Run `npm run build`
2. Copy the contents of `dist/` to the server or to the Github Pages project

You can also run `npm run deploy` to do those if adding to the GitHub Pages project.
It assumes the local project is in the parent dir and has the dir name **VortechBand.github.io**

## Test

Run `npm test`

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
