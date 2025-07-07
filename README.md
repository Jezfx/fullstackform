# Task 1) Full Stack Contact Form ✨

### [Video walk through ](https://www.loom.com/share/93591ed6526948af9088d98c8938b92c?sid=4e450983-7a63-48fb-91c9-56b4813b7785)


<img width="1512" alt="Screenshot 2025-07-07 at 15 53 42" src="https://github.com/user-attachments/assets/069b24b5-9250-49c8-a874-c247dd0b3712" />

## Links

- Contact: https://fullstackform-web-git-main-jezs-projects-26358988.vercel.app/contact
- Messages: https://fullstackform-web-git-main-jezs-projects-26358988.vercel.app/messages
- Storybook: https://fullstackform-docs.vercel.app/

## Tech Stack

- [Turborepo](https://turbo.build/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Storybook](https://storybook.js.org/)
- [Zod](https://zod.dev/)
- [Supabase](https://supabase.com/)

## Monorepo Structure

```
└── monorepo (turborepo)/
    ├── apps/
    │   ├── docs (storybook)
    │   └── web (nextjs)/
    │       ├── contact
    │       └── messages
    └── packages/
        └── ui (chakra-ui)
```

## Architecture

<img width="1087" alt="Screenshot 2025-07-07 at 15 54 41" src="https://github.com/user-attachments/assets/7a169c50-8a2a-449f-a253-6b24946ce05f" />

## To Run Locally

### Database

1. Create table

```
CREATE TABLE public.messages (
  id bigint GENERATED ALWAYS AS IDENTITY NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  email text,
  firstName text,
  lastName text,
  message text,
  CONSTRAINT messages_pkey PRIMARY KEY (id)
);
```

2. Add .env.local vars

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Turborepo

Run turbo

```
pnpm i
pnpm run dev
```

### Methodologies

- UI is separate from the apps
- Dumb components to make them easier to test and document
- Keep utils, types, stories close to where they're used
- Apps cant includes files from eachother
- 

### What I used AI for

- Util functions (page-contact.utils.ts)

### Outstanding

If I had more time

- Global: Testing (mainly unit and integration with jest and cypress)
- Glocal: Error handling (boundries, rather than  individual files)
- Form: scroll up on state.error like you do storyblok.com/fs/demo
- Form: remove the error message when you start typing into an error input
- Form: maybe do some zod validation on the client side too
- Messages Page: style and use Suspense to pull in db entries.

# Task 2) Brochure Stack

### Assumptions

- marketing site, mostly static content + some forms (contact, newsletter, maybe light CMS).
- **Small team or solo dev**, potentially designers involved.
- **Non-technical stakeholders**, so maintainability and preview ability matter.
- Needs to be fast, SEO-friendly, accessible, and easy to update.

### Architecture
<img width="1033" alt="Screenshot 2025-07-07 at 19 45 54" src="https://github.com/user-attachments/assets/1434e6b2-06e2-46a9-9f79-152dc27de856" />

### Frontend

Priorities for the frontend is around speed(NextJS, Vercel, Debugbear), both in terms of performance but also how quickly ideas and content can be published to the site. A key to this is keeping the designs(Figma) close to the component library(Chakra) and having good documentation(Storybook). The goal is to remove friction and resonces needed to make changes and all be referencing the same source of truth. 

### Headless Content

I’d like non-technical people to be comfortable making changes so a CMS that has a good editor and easy to use is key (Storyblok 🙃). For other content such as heavy media, I’d actually priorities the developer experience(cloudinary and MUX). 

### Monitoring And Testing

A requirement for monitoring is that it’s easy to manage. I’ve had a good experience with Rudderstack. It has a many-to-one relationship to many analytics platforms which means you’re just adding tracking once making it easy to manage and also good for performance. 

Testing is critical for marketing pages, a solution that also offers server side testing is ideal. PostHog does both well and also has good developer experience. 

### Marketing

Tracking and imperative to defining success for marketing pages, even if they’re not marketing metrics like conversion things like bouncerate, engagement and funnel drop offs are important to measure too. I prefer to use GTM to pull them the tracking services into the web app. This becomes a good source of truth and also something marketers can manage. 

To improve performance something like party town is a good way to use a web working for third party scripts to keep the site performant.
