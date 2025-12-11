import { Logo } from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header with Logo */}
      <header className="border-b border-gray-700 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Logo size="md" />
        </div>
      </header>

      {/* Main Content - Logo Showcase */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-white mb-4">ORYNTEL Logo Usage Examples</h1>
          <p className="text-gray-400">
            Ready-to-use logo component in various sizes and contexts
          </p>
        </div>

        {/* Size Variations */}
        <section className="mb-16">
          <h2 className="text-white mb-8 text-center">Size Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800/50 rounded-lg p-8 flex flex-col items-center justify-center border border-gray-700">
              <Logo size="sm" />
              <p className="text-gray-400 mt-4">Small (32px)</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 flex flex-col items-center justify-center border border-gray-700">
              <Logo size="md" />
              <p className="text-gray-400 mt-4">Medium (48px)</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 flex flex-col items-center justify-center border border-gray-700">
              <Logo size="lg" />
              <p className="text-gray-400 mt-4">Large (64px)</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-8 flex flex-col items-center justify-center border border-gray-700">
              <Logo size="xl" />
              <p className="text-gray-400 mt-4">Extra Large (96px)</p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-16">
          <h2 className="text-white mb-8 text-center">Common Usage Scenarios</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Navigation Bar */}
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
              <div className="bg-black px-6 py-4 flex items-center justify-between border-b border-gray-700">
                <Logo size="sm" />
                <nav className="flex gap-6">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Products
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </nav>
              </div>
              <div className="p-6">
                <p className="text-gray-400">Navigation Bar Example</p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
              <div className="p-6">
                <p className="text-gray-400 mb-4">Footer Example</p>
              </div>
              <div className="bg-black px-6 py-8 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <Logo size="sm" />
                  <p className="text-gray-500">© 2025 ORYNTEL. All rights reserved.</p>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-12 flex flex-col items-center text-center lg:col-span-2">
              <Logo size="xl" className="mb-6" />
              <h3 className="text-white mb-2">Welcome to ORYNTEL</h3>
              <p className="text-gray-400 max-w-md">
                Intelligent solutions powered by advanced neural networks and AI technology
              </p>
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section>
          <h2 className="text-white mb-8 text-center">How to Use</h2>
          <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-6">
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 mb-2">Import the component:</p>
                <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
                  <code>{`import { Logo } from "./components/Logo";`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Use in your JSX:</p>
                <pre className="bg-black p-4 rounded text-green-400 overflow-x-auto">
                  <code>{`<Logo size="md" />
<Logo size="lg" className="my-custom-class" />`}</code>
                </pre>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Available props:</p>
                <ul className="bg-black p-4 rounded text-gray-300 space-y-1">
                  <li>• <span className="text-blue-400">size</span>: "sm" | "md" | "lg" | "xl" (default: "md")</li>
                  <li>• <span className="text-blue-400">className</span>: string (optional additional classes)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
