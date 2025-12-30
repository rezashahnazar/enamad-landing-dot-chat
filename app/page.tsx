import { Card } from "@/components/ui/card"
import { MessageCircle, Sparkles, Zap, Palette } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="space-y-12 text-center">
          {/* Logo */}
          <div className="relative inline-flex mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-700 to-indigo-700 blur-2xl opacity-30 animate-pulse rounded-full" />
            <div className="relative bg-gray-950/50 backdrop-blur-xl border border-gray-800 rounded-full p-6 shadow-2xl">
              <MessageCircle size={40} className="text-violet-400" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400 drop-shadow-lg">
              Landing.Chat
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              به‌زودی می‌توانید لندینگ‌های خود را با کمک هوش مصنوعی بسازید
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Palette, title: "طراحی خودکار" },
              { icon: Sparkles, title: "ایده‌پردازی هوشمند" },
              { icon: Zap, title: "ساخت سریع" }
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gray-900/40 backdrop-blur-xl border-gray-800 hover:border-violet-500/50 transition-all duration-300 rounded-3xl shadow-xl hover:shadow-violet-500/20 group">
                <div className="space-y-3 text-center">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-violet-600 blur-md opacity-20 rounded-full group-hover:opacity-30 transition-opacity duration-300" />
                    <feature.icon className="w-10 h-10 mx-auto text-violet-400 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-300 group-hover:text-violet-300 transition-colors duration-300">{feature.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Footer with Enamad and additional text */}
      <footer className="w-full py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
          <div className="w-[120px] h-[120px] bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-2 flex items-center justify-center hover:border-violet-500/50 transition-all duration-300 shadow-xl hover:shadow-violet-500/20">
            <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=567125&Code=rykQqrC625bllzUtpShdgYpNrXhmLIrF'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=567125&Code=rykQqrC625bllzUtpShdgYpNrXhmLIrF' alt='' style={{cursor:'pointer'}} code='rykQqrC625bllzUtpShdgYpNrXhmLIrF' /></a>
          </div>
          <div className="text-center text-gray-500 text-xs">
            <p>Powered by LeelE</p>
            <p>Produced by Reza Shahnazar</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

