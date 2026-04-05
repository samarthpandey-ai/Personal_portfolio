import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function GET() {
  try {
    // Attempt 1: Alfa API (Usually the fastest live updates)
    const res1 = await fetch('https://alfa-leetcode-api.onrender.com/samp123/solved', { 
      cache: 'no-store' 
    });
    
    if (res1.ok) {
      const data1 = await res1.json();
      if (data1.solvedProblem) {
        return NextResponse.json({ totalSolved: data1.solvedProblem });
      }
    }

    // Attempt 2: Heroku Proxy (Fallback if Alfa is rate-limiting us)
    const res2 = await fetch('https://leetcode-stats-api.herokuapp.com/samp123', { 
      cache: 'no-store' 
    });
    
    if (res2.ok) {
      const data2 = await res2.json();
      if (data2.totalSolved) {
        return NextResponse.json({ totalSolved: data2.totalSolved });
      }
    }

    // Attempt 3: The Fail-safe
    // If BOTH APIs are down or blocking us, return your current real number. 
    // This ensures a recruiter never sees a broken 0 or an error screen.
    return NextResponse.json({ totalSolved: 73 });
    
  } catch (error) {
    console.error("All LeetCode fetches failed:", error);
    return NextResponse.json({ totalSolved: 73 });
  }
}
