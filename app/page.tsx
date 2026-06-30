import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect('/dashboard')

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-lg">JEVIS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <Link href="#features" className="hover:text-accent transition">Features</Link>
            <Link href="#capabilities" className="hover:text-accent transition">Capabilities</Link>
            <Link href="#pricing" className="hover:text-accent transition">Pricing</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/sign-up">
              <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-accent text-sm font-semibold">Introducing JEVIS</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-balance">
                Your AI Command Center
              </h1>
              <p className="text-xl text-muted-foreground">
                Meet JEVIS, an advanced AI assistant inspired by JARVIS. Designed for productivity, powered by intelligence, and built for the future.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/sign-up">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Launch JEVIS
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-border hover:bg-secondary/50">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl border border-border/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-primary rounded-full blur-3xl opacity-30"></div>
            </div>
            <div className="absolute top-10 right-10 w-20 h-20 bg-accent rounded-lg blur-2xl opacity-20"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 bg-primary rounded-full blur-2xl opacity-20"></div>
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="space-y-4 z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <p className="text-sm text-muted-foreground">Advanced AI Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Capabilities</h2>
            <p className="text-lg text-muted-foreground">Experience the future of AI assistance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Conversation",
                description: "Chat naturally with an AI that understands context and nuance",
                icon: "💬"
              },
              {
                title: "Voice Interaction",
                description: "Speak to JEVIS with crystal-clear voice recognition and synthesis",
                icon: "🎤"
              },
              {
                title: "Productivity Tools",
                description: "Manage tasks, schedules, and workflows with AI-powered assistance",
                icon: "✓"
              },
              {
                title: "Real-time Analysis",
                description: "Get instant insights and analysis on any topic or data",
                icon: "📊"
              },
              {
                title: "Smart Memory",
                description: "JEVIS learns your preferences and adapts over time",
                icon: "🧠"
              },
              {
                title: "Enterprise Ready",
                description: "Secure, scalable, and built for teams and organizations",
                icon: "🔒"
              }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 transition">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ready to Experience JEVIS?</h2>
            <p className="text-lg text-muted-foreground">Join thousands of users experiencing the future of AI assistance</p>
          </div>
          <Link href="/sign-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>&copy; 2024 JEVIS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
