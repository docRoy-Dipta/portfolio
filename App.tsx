import Logo from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-100">
      {/* Dynamic Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-cyan-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Logo size="md" />
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-cyan-600 transition-all duration-200 font-medium hover:scale-105">
                Features
              </a>
              <a href="#solutions" className="text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium hover:scale-105">
                Solutions
              </a>
              <a href="#faq" className="text-gray-700 hover:text-purple-600 transition-all duration-200 font-medium hover:scale-105">
                FAQ
              </a>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-medium">
                Get Started
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-5xl mx-auto">
            <div className="mb-8 transform hover:scale-110 transition-transform duration-500">
              <Logo size="xl" className="mx-auto mb-6" />
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              AI That Thinks Ahead
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              Revolutionary neural networks that transform your business with intelligent automation and real-time insights
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-blue-700">
                Start Free Trial
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 hover:shadow-lg">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-15 animate-ping"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience next-generation intelligence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Neural Networks",
                description: "Advanced deep learning that evolves with your data",
                gradient: "from-cyan-500 to-blue-500",
                icon: "🧠",
                delay: "0"
              },
              {
                title: "Lightning Processing", 
                description: "Real-time analysis at unprecedented speeds",
                gradient: "from-blue-500 to-purple-500",
                icon: "⚡",
                delay: "100"
              },
              {
                title: "Intelligent Automation",
                description: "Self-optimizing workflows that boost productivity",
                gradient: "from-purple-500 to-pink-500", 
                icon: "🚀",
                delay: "200"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 hover:border-cyan-200"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center text-3xl mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-gradient-to-br from-cyan-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Ready-to-Deploy Solutions
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Enterprise AI", desc: "Scale intelligently with enterprise-grade solutions", color: "cyan" },
                  { title: "Custom Models", desc: "Tailored neural networks for your unique needs", color: "blue" },
                  { title: "Cloud Integration", desc: "Seamless deployment across all platforms", color: "purple" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                    <div className={`w-10 h-10 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-full flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-10 shadow-2xl transform hover:rotate-2 transition-all duration-500 border border-cyan-100">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                    <Logo size="lg" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">Start Building Today</h3>
                  <p className="text-gray-600 mb-8 text-lg">Join 10,000+ companies using ORYNTEL</p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Get Free Trial
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Quick Answers
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "How quickly can I get started?",
                a: "Deploy in minutes with our one-click setup and pre-trained models."
              },
              {
                q: "Is my data secure?",
                a: "Enterprise-grade encryption and compliance with all major standards."
              },
              {
                q: "Can I customize the AI models?",
                a: "Fully customizable neural networks tailored to your specific needs."
              },
              {
                q: "What support do you offer?",
                a: "24/7 expert support with dedicated success managers for enterprise clients."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 border border-cyan-100">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Transform?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join the AI revolution and unlock your business potential today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full animate-bounce"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <Logo size="md" className="mb-4 md:mb-0" />
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-105 transform duration-200">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors hover:scale-105 transform duration-200">Terms</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors hover:scale-105 transform duration-200">Support</a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 ORYNTEL. Powering the future with intelligent AI solutions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
