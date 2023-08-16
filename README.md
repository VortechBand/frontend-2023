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

## Notes to self

> Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.
> https://nextjs.org/docs/getting-started/installation#creating-directories

app/something/page.tsx
-> Browsing to http://localhost:3000/something will show the component
