# 🍽️ Go Eat

**Go Eat** is a modern and dynamic food web app where users can explore on dishes and restaurants.  
Built with **Next.js**, **TypeScript**, **Tailwind CSS**, **MUI**, and **GraphQL**, it focuses on smooth user experience, aesthetic design, and fast performance.

---

## 🚀 Live Demo

👉 [View Live App on Vercel](https://go-eat-it.vercel.app/)
---

## ✨ Features

- ⚡ **Next.js 15 + React 18** — Modern and performant web framework.
- 🎨 **Tailwind CSS + MUI** — For responsive design and elegant UI components.
- 🧠 **Zod + React Hook Form** — For schema-based form validation.
- 🧩 **GraphQL + GraphQL Request** — Efficient API communication.
- 🧪 **Testing Ready** — Jest + Testing Library configured.
- 🌙 **Dark Theme** — Managed with `next-themes`.
- 🧭 **SEO Friendly** — Optimized with Next.js built-in features.
- 📱 **Fully Responsive** — Works great on mobile and desktop.
- 🧠 **CMS** - data flows using HyGraph.

---

## 🧰 Tech Stack

| Category               | Technology                     |
| ---------------------- | ------------------------------ |
| **Framework**          | Next.js 15                     |
| **Language**           | TypeScript                     |
| **UI / Styling**       | Tailwind CSS, MUI, Emotion     |
| **Forms & Validation** | React Hook Form, Zod           |
| **API / Data**         | GraphQL, GraphQL Request       |
| **CMS**                | HyGraph                        |
| **Testing**            | Jest, React Testing Library    |
| **Utilities**          | Moment, Date-Fns, Sonner, clsx |
| **Animations**         | Tailwind Animate CSS           |
| **Deployment**         | Vercel                         |

---

## ⚙️ CI/CD & Automation

This project includes a full GitHub Actions workflow for continuous integration, testing, and deployment:

- **Continuous Integration (CI)**
  - Runs on `push` or `pull_request` events to `master`.
  - Lints code with **ESLint**.
  - Builds the project.
  - Runs **unit and integration tests** using **Jest**.

- **Continuous Deployment (CD)**
  - Automatic deployment to **Vercel** after CI succeeds.
  - Manual approval required for production deployment.
  - Discord notifications for successful production deployments.
  - [CI/CD Discord channel here!](https://discord.com/channels/1433886988158763124/1433886988980719819)

- **Performance & Quality Checks**
  - Weekly **Lighthouse audits** scheduled with GitHub Actions.
  - Dependabot keeps **npm dependencies** and **GitHub Actions** up-to-date weekly.

- **Reusable Workflows**
  - CI tasks are modularized in a **reusable workflow** for maintainability and consistency.
