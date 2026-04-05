import { NextResponse } from 'next/server';

export async function POST() {
  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Referer': 'https://leetcode.com/samp123/'
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
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`LeetCode API block: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
       console.error("GraphQL Error:", data.errors);
       throw new Error("GraphQL returned an error");
    }

    const totalSolved = data?.data?.matchedUser?.submitStats?.acSubmissionNum?.find(
      (item: any) => item.difficulty === "All"
    )?.count;

    return NextResponse.json({ totalSolved });

  } catch (error) {
    console.error("Server-side LeetCode fetch error:", error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
