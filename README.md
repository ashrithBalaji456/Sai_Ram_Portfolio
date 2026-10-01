<!-- ===================== ANIMATED HEADER ===================== -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=240&section=header&text=Moogala%20Sairam&fontSize=56&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Software%20Engineer%20%26%20Backend%20Developer&descAlignY=58&descSize=20" alt="Moogala Sairam – Portfolio header" width="100%"/>

<a href="https://github.com/ashrithBalaji456/Sai_Ram_Portfolio">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3200&pause=900&color=36BCF7&center=true&vCenter=true&width=700&lines=Welcome+to+my+portfolio+%F0%9F%9A%80;Java+%E2%80%A2+Python+%E2%80%A2+Spring+Boot;REST+APIs+%E2%80%A2+Relational+Databases;Built+with+React+%2B+TypeScript+%2B+GSAP+%2B+Three.js" alt="Animated typing intro" />
</a>

<br/>

[![Live Site](https://img.shields.io/badge/LIVE-sai--ram--portfolio.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://sai-ram-portfolio.vercel.app/)
[![Repo](https://img.shields.io/badge/GitHub-Sai__Ram__Portfolio-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ashrithBalaji456/Sai_Ram_Portfolio)

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=flat-square&logo=greensock&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-0.168-000000?style=flat-square&logo=threedotjs&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=flat-square&logo=webgl&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

![Last Commit](https://img.shields.io/github/last-commit/ashrithBalaji456/Sai_Ram_Portfolio?style=flat-square&color=36BCF7)
![Repo Size](https://img.shields.io/github/repo-size/ashrithBalaji456/Sai_Ram_Portfolio?style=flat-square&color=8A63D2)
![Top Language](https://img.shields.io/github/languages/top/ashrithBalaji456/Sai_Ram_Portfolio?style=flat-square&color=3178C6)
![Languages](https://img.shields.io/github/languages/count/ashrithBalaji456/Sai_Ram_Portfolio?style=flat-square&color=F7B93E)
![Commit Activity](https://img.shields.io/github/commit-activity/m/ashrithBalaji456/Sai_Ram_Portfolio?style=flat-square&color=2EA043)
![Open Issues](https://img.shields.io/github/issues/ashrithBalaji456/Sai_Ram_Portfolio?style=flat-square&color=E5534B)

</div>

---

## 📑 Table of Contents

- [✨ About](#-about)
- [🌐 Live Demo](#-live-demo)
- [🧰 Tech Stack](#-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🔄 Workflows](#-workflows)
- [📊 Data & Charts](#-data--charts)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [📜 Available Scripts](#-available-scripts)
- [🌍 Deployment](#-deployment)
- [🙏 Credits, License & Usage Notice](#-credits-license--usage-notice)
- [📬 Contact](#-contact)

---

## ✨ About

This repository contains the source code of the personal portfolio website of **Moogala Sairam** — a Software Engineer specializing in **Java, Python, Spring Boot, REST APIs, and Relational Databases**.

The site is a front-end showcase built with **React + TypeScript**, animated with **GSAP**, and rendered with **Three.js / React Three Fiber (WebGL)** for interactive 3D visuals. It is bundled by **Vite** and hosted on **Vercel**.

```mermaid
mindmap
  root((Moogala Sairam))
    Backend
      Java
      Python
      Spring Boot
      REST APIs
    Data
      Relational Databases
    This Portfolio
      React and TypeScript
      GSAP animation
      Three.js and WebGL
      Vite build
      Vercel hosting
```

---

## 🌐 Live Demo

| | |
|---|---|
| 🔗 **Live URL** | [https://sai-ram-portfolio.vercel.app/](https://sai-ram-portfolio.vercel.app/) |
| 📦 **Source** | [github.com/ashrithBalaji456/Sai_Ram_Portfolio](https://github.com/ashrithBalaji456/Sai_Ram_Portfolio) |
| 🌿 **Default branch** | `main` |

---

## 🧰 Tech Stack

> Versions below are the ranges declared in `package.json`.

| Layer | Technology | Declared version |
|---|---|---|
| UI framework | React, React DOM | `^18.3.1` |
| Language | TypeScript | `^5.5.3` |
| Build tool | Vite, `@vitejs/plugin-react` | `^5.4.1`, `^4.3.1` |
| Animation | GSAP, `@gsap/react` | `^3.15.0`, `^2.1.1` |
| 3D / WebGL | three, `@react-three/fiber`, `@react-three/drei`, `@react-three/postprocessing`, three-stdlib | `^0.168.0`, `^8.17.10`, `^9.120.4`, `^2.16.3`, `^2.33.0` |
| Physics | `@react-three/rapier`, `@react-three/cannon` | `^1.5.0`, `^6.6.0` |
| UI extras | react-icons, react-fast-marquee | `^5.3.0`, `^1.6.5` |
| Analytics | `@vercel/analytics` | `^1.4.1` |
| Linting | ESLint 9, typescript-eslint, react-hooks and react-refresh plugins | `^9.9.0` |
| Hosting | Vercel | — |

---

## 🏗️ Architecture

How the libraries in this project fit together at runtime:

```mermaid
flowchart TB
    subgraph CLIENT["🌐 Browser"]
        direction TB
        R["⚛️ React 18 + TypeScript"]

        subgraph UI["🎨 UI helpers"]
            I["react-icons"]
            M["react-fast-marquee"]
        end

        subgraph ANIM["🎞️ Animation"]
            G["GSAP + @gsap/react"]
        end

        subgraph THREED["🧊 3D / WebGL"]
            F["@react-three/fiber"] --> T["three.js"] --> W(("WebGL"))
            DR["drei helpers"] --> F
            PP["postprocessing effects"] --> F
            PH["rapier / cannon physics"] --> F
        end

        R --> UI
        R --> ANIM
        R --> THREED
    end

    CLIENT ==>|"static bundle served by"| V["▲ Vercel hosting"]
    CLIENT -.->|"page-view events"| AN["📈 @vercel/analytics"]
```

### Request lifecycle

```mermaid
sequenceDiagram
    autonumber
    actor V as Visitor
    participant B as Browser
    participant H as Vercel Hosting
    participant A as Vercel Analytics

    V->>B: Open sai-ram-portfolio.vercel.app
    B->>H: Request page
    H-->>B: index.html + JS / CSS bundle
    B->>B: React mounts, GSAP and Three.js initialise
    B-)A: Send page-view event
    B-->>V: Animated, interactive portfolio
```

---

## 🔄 Workflows

### 1. Development workflow

Each step maps to a script defined in `package.json`.

```mermaid
flowchart LR
    A([✍️ Write code]) --> B["▶️ npm run dev<br/>vite --host"]
    B --> C{Looks right<br/>in browser?}
    C -- No --> A
    C -- Yes --> D["🧹 npm run lint<br/>eslint ."]
    D --> E["🏗️ npm run build<br/>tsc -b && vite build"]
    E --> F["👀 npm run preview<br/>vite preview"]
    F --> G([🚀 Deploy to Vercel])

    style A fill:#1f6feb,stroke:#1f6feb,color:#fff
    style G fill:#2ea043,stroke:#2ea043,color:#fff
```

### 2. Build pipeline

```mermaid
flowchart LR
    S["📄 .ts / .tsx source"] --> TC["tsc -b<br/>type-check"]
    TC -->|"errors"| X(["❌ Build fails"])
    TC -->|"passes"| VB["vite build<br/>bundle + minify"]
    VB --> OUT["📦 Static production bundle"]
    OUT --> VC(["▲ Served on Vercel"])

    style X fill:#e5534b,stroke:#e5534b,color:#fff
    style VC fill:#2ea043,stroke:#2ea043,color:#fff
```

### 3. Suggested Git workflow

```mermaid
gitGraph
    commit id: "initial"
    branch feature/new-section
    checkout feature/new-section
    commit id: "build section"
    commit id: "polish animation"
    checkout main
    merge feature/new-section
    commit id: "release" tag: "live"
```

### 4. Release lifecycle

```mermaid
stateDiagram-v2
    [*] --> Local
    Local --> Linted: npm run lint
    Linted --> Built: npm run build
    Built --> Previewed: npm run preview
    Previewed --> Pushed: git push
    Pushed --> Live: Vercel deployment
    Live --> Local: next change
    Built --> Local: build error
    Linted --> Local: lint error
```

---

## 📊 Data & Charts

> All numbers in this section were counted directly from this repository's `package.json` (15 runtime dependencies + 12 dev dependencies = 27 packages). They will drift as dependencies change.

### Runtime dependencies by category (15)

```mermaid
pie showData title Runtime dependencies (15 packages)
    "3D / WebGL / Physics" : 8
    "UI & React core" : 4
    "Animation (GSAP)" : 2
    "Analytics" : 1
```

### Dev dependencies by category (12)

```mermaid
pie showData title Dev dependencies (12 packages)
    "Linting" : 6
    "Type definitions" : 3
    "Build & TypeScript" : 3
```

### All packages by category (27)

```mermaid
xychart-beta
    title "Packages by category"
    x-axis ["3D/WebGL", "Linting", "UI/React", "Types", "Build/TS", "Animation", "Analytics"]
    y-axis "Number of packages" 0 --> 9
    bar [8, 6, 4, 3, 3, 2, 1]
```

### Dependency split

| Group | Count | Share of total |
|---|---:|---:|
| Runtime (`dependencies`) | 15 | ≈ 56% |
| Development (`devDependencies`) | 12 | ≈ 44% |
| **Total** | **27** | **100%** |

### Live repository metrics

These widgets pull current data from GitHub each time the page loads.

<div align="center">

![Last Commit](https://img.shields.io/github/last-commit/ashrithBalaji456/Sai_Ram_Portfolio?style=for-the-badge&color=36BCF7)
![Commit Activity](https://img.shields.io/github/commit-activity/y/ashrithBalaji456/Sai_Ram_Portfolio?style=for-the-badge&color=2EA043)
![Repo Size](https://img.shields.io/github/repo-size/ashrithBalaji456/Sai_Ram_Portfolio?style=for-the-badge&color=8A63D2)
![Code Size](https://img.shields.io/github/languages/code-size/ashrithBalaji456/Sai_Ram_Portfolio?style=for-the-badge&color=F7B93E)

</div>

---

## 📁 Project Structure

Top-level layout of the repository:

```text
Sai_Ram_Portfolio/
├── .github/
│   └── workflows/          # GitHub Actions workflows
├── public/                 # Static assets served as-is
├── src/                    # Application source (React + TypeScript)
├── .gitignore
├── eslint.config.js        # ESLint flat config
├── index.html              # Vite entry HTML
├── LICENSE                 # Personal Portfolio License (PPL) v1.0
├── package.json            # Scripts and dependencies
├── package-lock.json
├── README.md
├── test.js
├── tsconfig.json           # TS project references
├── tsconfig.app.json       # TS config for app code
├── tsconfig.node.json      # TS config for tooling
└── vite.config.ts          # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** and **npm** (a current LTS release is recommended)
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ashrithBalaji456/Sai_Ram_Portfolio.git

# 2. Move into the project
cd Sai_Ram_Portfolio

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

The dev script runs `vite --host`, so the site is also reachable from other devices on your local network. Vite prints the exact local URL in the terminal.

---

## 📜 Available Scripts

| Command | What it runs | Purpose |
|---|---|---|
| `npm run dev` | `vite --host` | Start the dev server with hot reload |
| `npm run build` | `tsc -b && vite build` | Type-check, then create a production bundle |
| `npm run lint` | `eslint .` | Lint the whole project |
| `npm run preview` | `vite preview` | Serve the production build locally |

---

## 🌍 Deployment

The site is live at **[sai-ram-portfolio.vercel.app](https://sai-ram-portfolio.vercel.app/)** and hosted on **Vercel**. Page-view analytics use `@vercel/analytics`.

```mermaid
flowchart LR
    DEV["💻 Local code"] --> REPO["🐙 GitHub repo (main)"]
    REPO --> VERCEL["▲ Vercel build"]
    VERCEL --> LIVE(["🌐 sai-ram-portfolio.vercel.app"])

    style LIVE fill:#2ea043,stroke:#2ea043,color:#fff
```

---

## 🙏 Credits, License & Usage Notice

- **License:** This project is licensed under the **Personal Portfolio License (PPL) v1.0**. See the [`LICENSE`](./LICENSE) file for the full terms.
- **Original work:** The earlier version of this README credited **Moncy Yohannan** as the author of the open-source portfolio this project's code and design are based on. Credit and a link back to the original repository should be kept here: `ORIGINAL_REPO_URL_HERE`.
- **Usage notice (summary):** The original author shares this code for learning only. Cloning or replicating the full site/design, reposting it with minor content changes, using it for commercial or client work, or making tutorials from it is not permitted. If you reuse parts of the code, credit the original repository.
- **GSAP:** Some GSAP Club plugins were modified using trial versions, which cannot be used for production hosting. Official plugins: <https://gsap.com/docs/v3/Installation/>.
- **3D assets:** Some bundled 3D assets are free for learning use. The original author's custom 3D avatar is not open source and must not be extracted or reused.

---

## 📬 Contact

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-36BCF7?style=for-the-badge&logo=vercel&logoColor=white)](https://sai-ram-portfolio.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-ashrithBalaji456-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ashrithBalaji456)

**⭐ If you found this useful for learning, consider starring the repo!**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=140&section=footer&animation=fadeIn" alt="Footer wave" width="100%"/>

</div>
