import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function GET() {
  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
        'Origin': 'https://leetcode.com',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
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
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`LeetCode API error: ${response.status}`);
    }

    const data = await response.json();

    const matchedUser = data?.data?.matchedUser;
    if (!matchedUser) {
      console.error("LeetCode returned null user — likely blocked:", JSON.stringify(data));
      return NextResponse.json({ error: 'LeetCode blocked the request' }, { status: 503 });
    }

    const totalSolved = matchedUser.submitStats.acSubmissionNum.find(
      (item: any) => item.difficulty === "All"
    )?.count;

    if (totalSolved === undefined) {
      return NextResponse.json({ error: 'Could not parse solved count' }, { status: 500 });
    }

    return NextResponse.json({ totalSolved });

  } catch (error) {
    console.error("Server-side LeetCode fetch error:", error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
