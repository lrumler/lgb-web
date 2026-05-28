# App screenshots

The homepage ("See it in action" section in `app/page.tsx`) expects two app
screenshots in this folder. Drop the image files in with these **exact**
filenames:

| Filename            | Screenshot                                                        |
| ------------------- | ----------------------------------------------------------------- |
| `birdex-grid.png`   | The Birdex collection grid ("0 species unlocked" / Bird of the Day) |
| `woodcock.png`      | The American Woodcock species detail page                          |

Notes:
- Phone screenshots (portrait, ~9:19.5) look best. PNG or JPG both work — if you
  use JPG, update the `src` extensions in `app/page.tsx` to match.
- Crop out the status bar / notifications if you want a cleaner look (optional).
- To add more screenshots later, add another entry to the array in
  `app/page.tsx` and place the file here.
