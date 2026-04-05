import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function GET() {
  try {
    // Uses a public LeetCode API wrapper that bypasses the block
    const response = await fetch(
      'https://alfa-leetcode-api.onrender.com/samp123/solved',
      { cache: 'no-store' }
    );

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    // This API returns { solvedProblem, easySolved, mediumSolved, hardSolved }
    const totalSolved = data?.solvedProblem;

    if (totalSolved === undefined) {
      console.error("Unexpected response shape:", data);
      return NextResponse.json({ error: 'Could not parse count' }, { status: 500 });
    }

    return NextResponse.json({ totalSolved });

  } catch (error) {
    console.error("LeetCode fetch error:", error);
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
