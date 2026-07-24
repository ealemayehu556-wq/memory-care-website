import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 bg-slate-50 text-slate-800">
      {/* Header Section */}
      <header className="w-full max-w-5xl border-b pb-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-blue-600">
          Memory Care Hub
        </h1>
        <p className="mt-2 text-lg text-slate-600">
          A calm, structured space for daily routines and reminders.
        </p>
      </header>

      {/* Main Content Area */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        
        {/* Box 1: Daily Routine */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold text-slate-700">📅 Daily Routine</h2>
          <p className="text-sm text-blue-500 font-medium mb-4">Monday, June 17</p>
          
          <ul className="space-y-3">
            <li className="flex items-center gap-2">✅ Morning Medication — 8:00 AM</li>
            <li className="flex items-center gap-2">🚶 Morning Walk — 9:30 AM</li>
            <li className="flex items-center gap-2">🥗 Healthy Lunch — 12:30 PM</li>
          </ul>
        </div>

        {/* Box 2: Quick Memory Aids */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 text-slate-700">💡 Today's Reminders</h2>
          <p className="text-slate-600">
            Today is <strong>Monday</strong>. The weather is pleasant. 
            Your family portal is updated with new photos!
          </p>
        </div>

      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center text-sm text-slate-400 pt-6 border-t">
        Caregiver Support App
      </footer>
    </main>
  );
}