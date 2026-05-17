# TrueFeedBack

TrueFeedBack is an anonymous feedback platform where users can create an account, share a public profile link, and receive anonymous messages. It includes email verification, secure authentication, message management, and AI-generated prompt suggestions to help visitors start conversations.

## Features

- User registration with email verification (OTP)
- Secure sign-in with NextAuth credentials provider
- Public user profile links for receiving anonymous messages
- Dashboard to:
  - View received messages
  - Delete messages
  - Toggle accepting/not accepting messages
- AI-powered suggested message prompts (Google Gemini)
- Responsive UI built with Tailwind CSS and shadcn/ui components

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Authentication:** NextAuth.js (JWT session strategy)
- **Validation:** Zod + React Hook Form
- **Email:** Resend + React Email
- **AI Integration:** Google Generative AI SDK
- **Styling:** Tailwind CSS

## Project Structure

```text
src/
  app/
    (auth)/             # Sign-up, sign-in, verify pages
    (app)/              # Home and dashboard pages
    u/[username]/       # Public anonymous message page
    api/                # Route handlers
  components/           # UI and feature components
  context/              # Auth provider
  helpers/              # Utility helpers (email sending)
  hooks/                # Custom hooks
  lib/                  # DB, resend client, shared utilities
  model/                # Mongoose models
  schemas/              # Zod validation schemas
  types/                # Type definitions
emails/                 # Email templates
```

## API Routes

- `POST /api/sign-up` - Register a new user and send verification code
- `GET /api/check-username-unique` - Check username availability
- `POST /api/verify-code` - Verify user account with code
- `POST /api/auth/[...nextauth]` - Authentication endpoints (managed by NextAuth)
- `POST /api/send-message` - Send anonymous message to a user
- `POST /api/suggest-messages` - Generate AI message suggestions
- `GET /api/get-messages` - Fetch authenticated user's messages
- `GET /api/accept-messages` - Get message acceptance status
- `POST /api/accept-messages` - Update message acceptance status
- `DELETE /api/delete-message/[messageid]` - Delete a specific message

## Prerequisites

- Node.js 18+ (recommended LTS)
- npm
- MongoDB database
- Resend account/API key
- Google AI API key

## Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
RESEND_API_KEY=your_resend_api_key
GOOGLE_API_KEY=your_google_ai_api_key
```

> For local NextAuth usage, you can also set `NEXTAUTH_URL=http://localhost:3000`.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add your environment variables in `.env.local`.

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Deployment

You can deploy this app on any Node.js-compatible hosting platform (for example Vercel). Ensure all required environment variables are configured in your deployment environment.

## License

This project is currently unlicensed. Add a `LICENSE` file if you want to define usage terms.
