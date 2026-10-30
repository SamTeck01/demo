# Editing a client's site

Everything about a client lives in `src/clients/<route>.json`. Change the file, save, and the dev server updates.

## The main fields

| Field | What it controls |
| --- | --- |
| `name`, `short`, `mark` | Full name, the wordmark in the nav, the giant word in the footer |
| `email`, `phone`, `address`, `hours` | Contact card and where forms send |
| `currency`, `locale` | How prices show (`USD` + `en-US`, `BHD` + `en-BH`, `QAR`, `KWD`, `SAR`) |
| `fonts` | Google Fonts URL and the display and text faces |
| `tokens` | Colours and shape: `bg`, `ink`, `accent`, `field-1`, `btn-radius`, and so on |
| `hero.v` | Hero layout: `film`, `sky`, `split`, `poster`, `editorial` or `arch` |
| `sections` | The sections in order. Each has a `kind`: `statement`, `listings`, `areas`, `tool`, `about`, `process`, `visit` |
| `listings` | The homes: title, area, type, price, beds, baths, size, photos, description, status, `rent: true` for monthly prices |
| `areas` | The neighbourhood picker: name, photo, text and four facts |

## Calculators (`kind: "tool"`)

- `mortgage`: US agencies. Uses `data.taxRate` and `data.insure` from the client file.
- `plan`: deposit plus monthly instalments (Bahrain off-plan).
- `yield`: gross and net rental yield (Qatar, Kuwait).
- `sell`: seller's take-home after commission.

## Photos

All photos are Unsplash URLs. To use a client's own photos, put them in `public/<route>/` and change the URL in the JSON to `/<route>/photo.jpg`.

## Forms

There is no backend. Every form opens the visitor's email app addressed to the client's `email`, with the fields filled in. To collect enquiries yourself, connect a form service such as Formspree in `EnquiryForm` in `src/Site.jsx`.
