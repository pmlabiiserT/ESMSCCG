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
