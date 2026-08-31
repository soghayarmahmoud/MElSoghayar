# Full-Stack Dashboard Roadmap & GitHub Issues

This document breaks down the process of building your dynamic dashboard into beginner-friendly, actionable steps. You can copy-paste these into your GitHub repository as Issues.

---

## Roadmap Overview

1.  **Phase 1: Database Setup** (Issues 1-2)
2.  **Phase 2: Authentication** (Issue 3)
3.  **Phase 3: The Admin Dashboard UI** (Issues 4-5)
4.  **Phase 4: Dynamic Frontend (Connecting to DB)** (Issues 6-8)

---

## GitHub Issues to Create

### Issue #1: Initialize Prisma and Database Setup
**Title:** Setup Prisma ORM and PostgreSQL Database
**Labels:** `backend`, `setup`, `good first issue`

**Description:**
We need to connect our Next.js application to a database to store projects, messages, and reviews dynamically.

**Tasks:**
- [ ] Create a PostgreSQL database (e.g., using Vercel Postgres or Supabase).
- [ ] Install Prisma using `npm install prisma --save-dev` and `npm install @prisma/client`.
- [ ] Initialize Prisma using `npx prisma init`.
- [ ] Add the database URL to the `.env` file.
- [ ] Create the schema in `prisma/schema.prisma` with `Project`, `Message`, and `Review` models.
- [ ] Run `npx prisma db push` to sync the schema to the database.

**Resources:**
- [Prisma Quickstart for Next.js](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql)

---

### Issue #2: Create API Routes for Database Actions
**Title:** Create Server Actions or API Routes for Models
**Labels:** `backend`, `api`

**Description:**
We need a way for our frontend to talk to our database to fetch, create, update, and delete data.

**Tasks:**
- [ ] Create a new folder `app/actions` or use API routes `app/api`. Server Actions are recommended for Next.js App Router.
- [ ] Write a function to `getProjects()` from Prisma.
- [ ] Write a function to `createMessage(data)` that saves form submissions to the database.
- [ ] Write a function to `getPendingReviews()` and `updateReviewStatus(id, status)`.

**Resources:**
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)

---

### Issue #3: Setup NextAuth (Auth.js) for Admin Login
**Title:** Implement Authentication for the Dashboard
**Labels:** `security`, `frontend`

**Description:**
The dashboard must be secure so only authorized users (the admin) can access it.

**Tasks:**
- [ ] Install NextAuth using `npm install next-auth`.
- [ ] Configure `app/api/auth/[...nextauth]/route.js` (or Auth.js v5 `auth.ts`).
- [ ] Setup a provider (e.g., GitHub Provider).
- [ ] Add a middleware `middleware.js` to protect the `/dashboard` route.
- [ ] Ensure only YOUR specific email or GitHub ID is allowed to log in (to prevent others from becoming admins).

**Resources:**
- [NextAuth.js Documentation](https://next-auth.js.org/getting-started/example)

---

### Issue #4: Build the Admin Dashboard Layout
**Title:** Create Admin Dashboard Layout and Navigation
**Labels:** `frontend`, `ui`

**Description:**
We need a basic layout for the admin area, including a sidebar or navbar to switch between managing Projects, Messages, and Reviews.

**Tasks:**
- [ ] Create `app/(admin)/dashboard/layout.jsx`.
- [ ] Build a Sidebar component with links to: Overview, Projects, Messages, Reviews.
- [ ] Create a basic Overview page `app/(admin)/dashboard/page.jsx` showing simple text.

---

### Issue #5: Build Dashboard Management Pages
**Title:** Create Pages to Manage Projects, Messages, and Reviews
**Labels:** `frontend`, `ui`

**Description:**
The core functionality of the dashboard: viewing data and modifying it.

**Tasks:**
- [ ] **Projects Page (`/dashboard/projects`)**: Create a table listing all projects. Add a button that opens a form to add a new project.
- [ ] **Messages Page (`/dashboard/messages`)**: Create a list/table to view messages submitted via the contact form.
- [ ] **Reviews Page (`/dashboard/reviews`)**: Create a table showing pending reviews. Add "Accept" and "Decline" buttons next to each review that trigger the database update functions.

**Resources:**
- Use [Shadcn UI Tables](https://ui.shadcn.com/docs/components/data-table) for beautiful data display.

---

### Issue #6: Update Frontend Projects Section
**Title:** Fetch Projects from Database on the Home Page
**Labels:** `frontend`, `integration`

**Description:**
Instead of hardcoding projects in a JS file, fetch them dynamically from the new database.

**Tasks:**
- [ ] Open `app/components/ModernProjects.jsx`.
- [ ] Use the `getProjects()` Server Action to fetch the project list.
- [ ] Map over the database results to render the project cards.

---

### Issue #7: Update Contact Form to Save to Database
**Title:** Connect Contact Form to Database
**Labels:** `frontend`, `integration`

**Description:**
When a user submits the contact form, save it as a "Message" in the database (alongside sending an email if desired).

**Tasks:**
- [ ] Open `app/components/ModernContact.jsx` (or your form component).
- [ ] Update the submit handler to call the `createMessage()` Server Action.

---

### Issue #8: Create and Display Dynamic Testimonials
**Title:** Implement Dynamic Testimonials/Reviews System
**Labels:** `frontend`, `integration`

**Description:**
Allow users to submit reviews, and display accepted reviews on the website.

**Tasks:**
- [ ] Create a "Leave a Review" form component on the frontend. Submitting this should create a Review in the database with status `PENDING`.
- [ ] Update the Testimonials section to fetch only reviews from the database where `status === 'ACCEPTED'`.
