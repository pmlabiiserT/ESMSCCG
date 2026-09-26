# ESMSCCG Website Repository

Website for the **PMLab / ESMSCCG** research group, built using **Next.js**. 

This document serves as the primary hand-over guide. If you are taking over the repository or making updates to the website, please read these instructions carefully before making any changes.

---

## 1. Credentials & Repository Details

* **GitHub Username:** `pmlabiiserT`
* **Repository Name:** `ESMSCCG`
* **Repository URL:** [https://github.com/pmlabiiserT/ESMSCCG](https://github.com/pmlabiiserT/ESMSCCG)

> ⚠️ **Security Warning:** If this GitHub repository is public, remove the password line above and store it securely within the lab.

---

## 2. 🔴 CRITICAL — ALWAYS TAKE A BACKUP FIRST

**BEFORE editing ANYTHING in the repository or pushing changes:**

1. **Download the complete repository as a ZIP file** to your local machine.
2. Store this ZIP file as a timestamped local backup.
3. Only then begin making edits to the codebase.

If an edit breaks the layout or logic, you can easily restore the website using your local ZIP backup.

---

## 3. 📱 Mobile Responsiveness

🔵 ***There is no separate file for mobile styling. All mobile-specific styles and responsive media queries are located at the very end (last lines) of `app/globals.css`.***

---

## 4. Complete Project Directory Tree

```text
ESMSCCG/
│
├── app/
│   ├── page.tsx                             # Home page
│   ├── components/
│   │   └── InteractiveScienceBackground.tsx # Home page background animation
│   ├── about/
│   │   ├── page.tsx                         # About Team Leader page
│   │   └── components/
│   │       └── QuantumFieldBackground.tsx   # About page background animation
│   ├── research/
│   │   ├── page.tsx                         # Research topics page
│   │   └── components/
│   │       └── MultiScaleField.tsx          # Research page background animation
│   ├── publications/
│   │   └── page.tsx                         # Publications page
│   ├── facilities/
│   │   └── page.tsx                         # Research facilities page
│   ├── team/
│   │   └── page.tsx                         # Group members page
│   ├── news/
│   │   └── page.tsx                         # News & gallery page
│   ├── contact/
│   │   └── page.tsx                         # Opportunities & contact page
│   └── globals.css                          # Global styles & mobile CSS (at the end)
│
└── public/
    └── photos/
        ├── home_pic/                        # Home page images & logo variants
        ├── about_pi_pic/                    # Team leader photos
        ├── research/                        # Research topic images
        ├── publications/                    # Publications background images
        ├── facilities/                      # Facility photos
        ├── team/                            # Active member photos
        │   └── alumni/                      # Former lab member photos
        └── news/                            # News and gallery event photos



---

## 5. `app/` Directory Breakdown & Page Editing Guide

The website contains **8 main page folders** and the main homepage. Each page is edited within its respective `page.tsx` file:

* **Home Page (`app/page.tsx`)**
  * **Main file:** `app/page.tsx`
  * **Background animation:** `Components/InteractiveScienceBackground.tsx`

* **About / Team Leader (`app/about/page.tsx`)**
  * **Main file:** `app/about/page.tsx`
  * **Background animation:** `components/QuantumFieldBackground.tsx`

* **Research Topics (`app/research/page.tsx`)**
  * **Main file:** `app/research/page.tsx`
  * **Background animation:** `components/MultiScaleField.tsx`
  * 📌 *Rule:* Always hyperlink all external software links mentioned on this page.

* **Publications (`app/publications/page.tsx`)**
  * **Main file:** `app/publications/page.tsx`
  * 📌 *Rule:* Always add hyperlinked citations/DOIs for any new publication entries.

* **Facilities (`app/facilities/page.tsx`)**
  * **Main file:** `app/facilities/page.tsx`
  * 📌 *Rule:* Always hyperlink all external software links mentioned on this page.

* **Team / Group Members (`app/team/page.tsx`)**
  * **Main file:** `app/team/page.tsx`
  * 📌 *Rules:*
    * All member email addresses must be hyperlinked (`mailto:`).
    * Football team references must be hyperlinked.
    * All profile photos MUST be cropped to **square aspect ratio** before uploading.

* **News & Gallery (`app/news/page.tsx`)**
  * **Main file:** `app/news/page.tsx`
  * 📌 *Rules:*
    * Hyperlink DOIs for new publication news.
    * Keep the gallery ordered **reverse-chronologically** (the latest event/photo goes at the top).

* **Contact & Opportunities (`app/contact/page.tsx`)**
  * **Main file:** `app/contact/page.tsx`

* 💡 *Future Addition Note:* You can add a dedicated **GitHub Page / Softwares Page** inside `app/` in future updates.

---

## 6. `public/photos/` Directory Guide

All photos rendered across the website are stored under `public/photos/`. Some subfolders contain unused photos or alternate file versions.

* `public/photos/home_pic/` — Homepage hero pictures and logo variants.
* `public/photos/about_pi_pic/` — Photos of the Principal Investigator / Team Leader.
* `public/photos/research/` — Research topic visual assets and diagrams.
* `public/photos/publications/` — Background visuals for the publications section.
* `public/photos/facilities/` — High-resolution photos of lab facilities and equipment.
* `public/photos/team/` — Active team member photos (must be square).
  * `public/photos/team/alumni/` — Alumni member photos.
* `public/photos/news/` — Event photos and gallery media.
  * 📌 *Rule:* Try to create a new subfolder inside `news/` for each distinct event (e.g., `news/2026_conference/`).

---

## 7. Developer Quick Start

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Running Locally

First, install dependencies and start the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
