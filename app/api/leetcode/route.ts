import { NextResponse } from 'next/server';

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
      // This tells Vercel/Next.js to NEVER cache this data
      next: { revalidate: 0 } 
    });

    const data = await response.json();
    const totalSolved = data.data.matchedUser.submitStats.acSubmissionNum.find(
      (item: any) => item.difficulty === "All"
    ).count;

    return NextResponse.json({ totalSolved });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
