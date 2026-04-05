import { NextResponse } from 'next/server';

// ADD THESE TWO LINES: They force Next.js to NEVER cache this API route
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function GET() {
  try {
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
      cache: 'no-store' // Added here as well for safety
    });

    if (!response.ok) {
      throw new Error("LeetCode API responded with an error");
    }

    const data = await response.json();
    const totalSolved = data.data.matchedUser.submitStats.acSubmissionNum.find(
      (item: any) => item.difficulty === "All"
    ).count;

    return NextResponse.json({ totalSolved });
  } catch (error) {
    console.error("Server-side LeetCode fetch error:", error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
