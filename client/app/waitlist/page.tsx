import Link from 'next/link'

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700">
          <h1 className="text-3xl font-bold text-center mb-2">Join the Waitlist</h1>
          <p className="text-slate-400 text-center mb-6">
            Be the first to access our space-grade procurement platform
          </p>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="affiliation" className="block text-sm font-medium text-slate-300 mb-1">
                Affiliation
              </label>
              <input
                type="text"
                id="affiliation"
                name="affiliation"
                placeholder="CubeSat team, University, or Startup name"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              Submit
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            By joining, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </main>
  )
}