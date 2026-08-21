'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const activeStyle = "bg-amber-600 text-white shadow-sm px-4 py-2 rounded-lg transition font-bold";
  const inactiveStyle = "text-zinc-400 hover:text-white px-4 py-2 rounded-lg transition";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col">
      {/* Navigation Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('home')}>
            {/* Memory Guard Logo Icon */}
            <div className="bg-amber-600 text-zinc-950 font-bold p-2.5 rounded-2xl text-xl shadow-md">
              🧠
            </div>
            {/* Memory Guard Logo Name */}
            <span className="text-2xl font-black tracking-tight text-white">
              Memory<span className="text-amber-500"> Guard</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-1.5 bg-zinc-800/80 p-1.5 rounded-xl text-sm font-semibold border border-zinc-700/50 flex-wrap">
            <button
              onClick={() => setActiveTab('home')}
              className={activeTab === 'home' ? activeStyle : inactiveStyle}
            >
              Home
            </button>
            <button
              onClick={() => setActiveTab('amenities')}
              className={activeTab === 'amenities' ? activeStyle : inactiveStyle}
            >
              Services & Amenities
            </button>
            <button
              onClick={() => setActiveTab('routines')}
              className={activeTab === 'routines' ? activeStyle : inactiveStyle}
            >
              Daily Routines
            </button>
            <button
              onClick={() => setActiveTab('reminders')}
              className={activeTab === 'reminders' ? activeStyle : inactiveStyle}
            >
              Reminders
            </button>
            <button
              onClick={() => setActiveTab('caregivers')}
              className={activeTab === 'caregivers' ? activeStyle : inactiveStyle}
            >
              Caregiver Support
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={activeTab === 'contact' ? activeStyle : inactiveStyle}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>

      {/* Main Page Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        {/* HOME SECTION */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            <section className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-stone-900 border border-zinc-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="max-w-2xl space-y-4">
                <span className="bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-500/30">
                  Memory Care Portal
                </span>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-zinc-50">
                  Welcome to Memory Guard Support Portal
                </h1>
                <p className="text-zinc-300 text-base md:text-lg">
                  Providing calm, structured spaces for memory care routines, daily schedules, family updates, and dedicated caregiver tools.
                </p>
                <div className="pt-2 flex flex-wrap gap-3"><button onClick={() => setActiveTab('amenities')} className="bg-amber-600 text-zinc-950 font-bold px-5 py-3 rounded-xl shadow hover:bg-amber-500 transition">
                    Explore Amenities
                  </button>
                  <button onClick={() => setActiveTab('caregivers')} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-5 py-3 rounded-xl border border-zinc-700 transition">
                    Caregiver Access
                  </button>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm space-y-3">
                <div className="text-3xl">📅</div>
                <h3 className="text-lg font-bold text-zinc-100">Structured Routines</h3>
                <p className="text-sm text-zinc-400">Keep daily activities predictably organized for peace of mind.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm space-y-3">
                <div className="text-3xl">🔔</div>
                <h3 className="text-lg font-bold text-zinc-100">Smart Reminders</h3>
                <p className="text-sm text-zinc-400">Timely notifications for medications, meals, and family visits.</p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm space-y-3">
                <div className="text-3xl">🤝</div>
                <h3 className="text-lg font-bold text-zinc-100">Caregiver Portal</h3>
                <p className="text-sm text-zinc-400">Direct notes and logs for family members and health aides.</p>
              </div>
            </section>
          </div>
        )}

        {/* SERVICES & AMENITIES SECTION */}
        {activeTab === 'amenities' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-zinc-100">Services & Facility Amenities</h2>
              <p className="text-sm text-zinc-400">Comprehensive care services tailored for memory support, comfort, and safety.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-3">
                <div className="text-3xl">🏥</div>
                <h3 className="text-xl font-bold text-amber-500">24/7 Professional Supervision</h3>
                <p className="text-sm text-zinc-400">Round-the-clock trained caregivers and emergency response staff on-site continuously.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-3">
                <div className="text-3xl">💊</div>
                <h3 className="text-xl font-bold text-amber-500">Medication Management</h3>
                <p className="text-sm text-zinc-400">Timely dosage tracking, prescription renewals, and strict adherence logs.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-3">
                <div className="text-3xl">🥗</div>
                <h3 className="text-xl font-bold text-amber-500">Nutritional Dining</h3>
                <p className="text-sm text-zinc-400">Chef-prepared healthy meals and custom dietary plans tailored for cognitive health.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-3">
                <div className="text-3xl">🧩</div>
                <h3 className="text-xl font-bold text-amber-500">Memory Engagement Therapy</h3>
                <p className="text-sm text-zinc-400">Daily cognitive exercises, art therapy, and music stimulation programs.</p>
              </div><div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-3">
                <div className="text-3xl">🌿</div>
                <h3 className="text-xl font-bold text-amber-500">Secure Courtyard & Garden</h3>
                <p className="text-sm text-zinc-400">Safe, enclosed outdoor walking paths and serene garden spaces.</p>
              </div>

              <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 space-y-3">
                <div className="text-3xl">🚗</div>
                <h3 className="text-xl font-bold text-amber-500">Transportation & Outings</h3>
                <p className="text-sm text-zinc-400">Scheduled local transport for medical appointments and community excursions.</p>
              </div>
            </div>
          </div>
        )}

        {/* DAILY ROUTINES SECTION */}
        {activeTab === 'routines' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-100">Daily Routines and Activities</h2>
            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="font-bold text-lg text-zinc-100">Morning Schedule</span>
                <span className="text-xs bg-amber-950 text-amber-400 font-bold px-2.5 py-1 rounded-full border border-amber-800">Completed</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-xl border border-zinc-800/50">
                  <span className="text-zinc-200">💊 Morning Medication and Water</span>
                  <span className="text-xs font-semibold text-zinc-400">8:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-xl border border-zinc-800/50">
                  <span className="text-zinc-200">🥣 Breakfast and Herbal Tea</span>
                  <span className="text-xs font-semibold text-zinc-400">8:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-zinc-950 rounded-xl border border-zinc-800/50">
                  <span className="text-zinc-200">🌱 Garden Walk and Light Exercise</span>
                  <span className="text-xs font-semibold text-zinc-400">10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REMINDERS SECTION */}
        {activeTab === 'reminders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-100">Active Reminders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-950/40 border border-amber-800/60 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Priority Alert</span>
                <h3 className="font-bold text-amber-200 text-lg">Afternoon Medication</h3>
                <p className="text-xs text-amber-300/80">Scheduled for 2:00 PM. Take with full glass of water.</p>
              </div>
              <div className="bg-emerald-950/40 border border-emerald-800/60 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Family Notification</span>
                <h3 className="font-bold text-emerald-200 text-lg">Video Call with Family</h3>
                <p className="text-xs text-emerald-300/80">Scheduled for 4:30 PM via Family Portal.</p>
              </div>
            </div>
          </div>
        )}

        {/* CAREGIVERS SECTION */}
        {activeTab === 'caregivers' && (<div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-100">Caregiver Support Hub</h2>
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm space-y-4">
              <h3 className="font-bold text-zinc-200">Caregiver Notes and Shift Logs</h3>
              <textarea
                className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none text-zinc-100 placeholder-zinc-500"
                rows={4}
                placeholder="Type daily caregiver observation notes here..."
              ></textarea>
              <button className="bg-amber-600 text-zinc-950 font-bold px-4 py-2 rounded-xl text-sm hover:bg-amber-500 transition">
                Save Daily Log
              </button>
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-100">Contact & Support Center</h2>
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm space-y-6 max-w-xl">
              <p className="text-sm text-zinc-400">Reach out to our local team for caregiver support and details.</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-1">
                  <div className="font-bold text-sm text-amber-500">📍 Location</div>
                  <div className="text-base font-semibold text-zinc-100">Kolfe Keraniyo</div>
                  <div className="text-xs text-zinc-400">Addis Ababa, Ethiopia</div>
                </div>

                <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-1">
                  <div className="font-bold text-sm text-amber-500">📞 Phone Number</div>
                  <div className="text-base font-bold text-zinc-100">0993929602</div>
                </div>

                <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-1">
                  <div className="font-bold text-sm text-amber-500">✉️ Email Support</div>
                  <div className="text-base font-bold text-zinc-100">contact@memoryguard.et</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 py-6 text-center text-xs text-zinc-500">
        © Memory Guard. All rights reserved.
      </footer>
    </div>
  );
}