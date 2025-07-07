# Development task ✨

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
