import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-indigo-400">
              GRAVLOC
            </Link>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-indigo-400 transition">Explore Catalogue</Link>
              <Link href="#" className="hover:text-indigo-400 transition">Suppliers</Link>
              <Link href="/login" className="hover:text-indigo-400 transition">Log In</Link>
              <Link href="/signup" className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg transition">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Source space-grade components <br className="md:hidden" />
            <span className="text-indigo-400">with confidence</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Discover, compare, and verify mission-critical hardware from 
            trusted global suppliers. The procurement engine for the next frontier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join" className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-lg text-lg font-semibold transition">
              Join as Buyer
            </Link>
            <Link href="/supplier" className="border border-slate-600 hover:border-indigo-400 px-8 py-3 rounded-lg text-lg font-semibold transition">
              Join as Supplier
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400">128</div>
            <div className="text-slate-400 mt-2">Active RFQs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400">340</div>
            <div className="text-slate-400 mt-2">Verified Vendors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400">94%</div>
            <div className="text-slate-400 mt-2">Avg. Match</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Built for Mission Criticality</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Space-Native Search', desc: 'Search by part number, radiation tolerance (TID), or heritage mission history' },
            { title: 'Mission Context Filters', desc: 'Filter by Orbit Type (LEO, GEO), Mass Range, and SWaP-C constraints' },
            { title: 'Side-by-Side Comparison', desc: 'Analyze technical specifications across multiple vendors in a unified view' },
            { title: 'Verified Supplier Profiles', desc: 'Access AS9100 certified vendors with vetted flight heritage and ITAR status' },
            { title: 'Secure Document Vault', desc: 'Centralized access to data sheets, CAD models, and compliance certificates' },
            { title: 'Structured RFQ Workflow', desc: 'Standardized requests ensure faster quotes and accurate technical compliance' },
          ].map((feature, i) => (
            <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-indigo-500/50 transition">
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 py-20 bg-slate-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by industry leaders</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <div className="flex text-yellow-400 mb-4">
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <p className="text-lg italic mb-4 text-slate-300">
              "The evidence across 100+ interviews shows a clear, quantified problem: 
              current matching is inefficient, visibility is fragmented, and existing 
              tools fail to deliver."
            </p>
            <div>
              <strong className="text-white">Lars K.</strong> - Polaris / ASTRAIT
            </div>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
            <div className="flex text-yellow-400 mb-4">
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
            <p className="text-lg italic mb-4 text-slate-300">
              "Comparison between suppliers is difficult because buyers need to look 
              at multiple factors: pricing, certificates, MOQ, trust, reviews, and 
              delivery speed. A tool like this would be very helpful."
            </p>
            <div>
              <strong className="text-white">Marco W.</strong> - TUM WARR
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-indigo-400 mb-4">GRAVLOC</h3>
              <p className="text-slate-400">Precision procurement for mission-critical systems.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400">Supplier Program</a></li>
                <li><a href="#" className="hover:text-indigo-400">Catalogue</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400">Contact</a></li>
                <li><a href="#" className="hover:text-indigo-400">Feedback</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© 2026 GRAVLOC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}