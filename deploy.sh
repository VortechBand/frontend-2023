#!/usr/bin/env bash
cd out/
cp -r . ../../VortechBand.github.io/
cd ../../VortechBand.github.io/
git add -A
git commit -m "Latest site"
git push
cd ../frontend-2023/