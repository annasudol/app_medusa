import Medusa from "@medusajs/js-sdk"

// Defaults to Medusa Cloud backend
const MEDUSA_BACKEND_URL = process.env.MEDUSA_BACKEND_URL || "https://juicy-arrival-forbid.medusajs.app"
const PUBLISHABLE_API_KEY = process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY || "pk_bdb4160756dd10668e99490832900ce04febbbe2e1b82f48c330a907419cd82a"

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  debug: process.env.NODE_ENV === "development",
  publishableKey: PUBLISHABLE_API_KEY,
})
