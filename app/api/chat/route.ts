import { streamText } from 'ai'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'

export async function POST(req: Request) {
  console.log('[v0] Chat API called')
  const { messages } = await req.json()
  console.log('[v0] Messages received:', messages.length)

  try {
    const result = streamText({
      model: 'openai/gpt-4o',
      system: `You are JEVIS, an advanced AI assistant inspired by JARVIS from Iron Man. 
You are highly intelligent, professional, and focused on helping the user with productivity, analysis, and problem-solving.
You maintain a sophisticated tone while being helpful and approachable.
Always provide clear, well-structured responses.`,
      messages,
    })

    console.log('[v0] Streaming response')
    return result.toDataStreamResponse()
  } catch (error) {
    console.error('[v0] Chat API error:', error)
    return new Response(`Error: ${error}`, { status: 500 })
  }
}
