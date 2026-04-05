import { NextResponse } from 'next/server';

// These lines force Next.js to NEVER cache this API route locally or on Vercel
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function GET() {
  try {
    // We bypass 3rd-party wrappers entirely and hit LeetCode directly via GraphQL
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query userProblemsSolved($username: String!) {
            matchedUser(username: $username) {
              submitStats {
                acSubmissionNum {
                  difficulty
                  count
                }
              }
            }
          }
        `,
        variables: { username: "samp123" },
      }),
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`LeetCode API error: ${response.status}`);
    }

    const data = await response.json();

    // Parse the official GraphQL response to get the total solved count
    const totalSolved = data?.data?.matchedUser?.submitStats?.acSubmissionNum?.find(
      (item: any) => item.difficulty === "All"
    )?.count;

    if (totalSolved === undefined) {
      console.error("Unexpected response shape:", data);
      return NextResponse.json({ error: 'Could not parse count' }, { status: 500 });
    }

    return NextResponse.json({ totalSolved });

  } catch (error) {
    console.error("Server-side LeetCode fetch error:", error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
