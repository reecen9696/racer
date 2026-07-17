Source asset packs (licensed — redistribution per pack license is the repo owner's call).
The build does NOT read these: `npm run assets` copies from `../3d models` + `../background sounds`
(the folders one level above the repo) into git-ignored `public/assets/`. This folder is an archive
so the repo is self-contained; if you clone fresh, copy these two folders up one level first.
