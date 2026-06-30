import { streamText } from 'ai'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export async function POST(req: Request) {
  // Check authentication
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { messages } = await req.json()

  const result = streamText({
    model: 'openai/gpt-4o',
    system: `You are JEVIS, an advanced AI assistant inspired by JARVIS from Iron Man. 
You are highly intelligent, professional, and focused on helping the user with productivity, analysis, and problem-solving.
You maintain a sophisticated tone while being helpful and approachable.
Always provide clear, well-structured responses.`,
    messages,
  })

  return result.toDataStreamResponse()
}
