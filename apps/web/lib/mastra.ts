import { MastraClient } from "@mastra/client-js";

export const mastraClient = new MastraClient({
  baseUrl: "https://test-turbo-monorepo-api.vercel.app/"
  // baseUrl: process.env.NEXT_PUBLIC_MASTRA_API_URL || "http://localhost:4111/"
});
