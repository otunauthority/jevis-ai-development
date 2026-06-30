'use client'

import { createAuthClient } from 'better-auth/react'

// The auth client needs to call the API at the same origin
// This works in production and in the v0 preview iframe
export const authClient = createAuthClient()

export const { signIn, signUp, signOut, useSession } = authClient
