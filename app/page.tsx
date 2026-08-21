'use client';

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [noteText, setNoteText] = useState('');
  const [savedNotes, setSavedNotes] = useState<string[]>([]);

  useEffect(() => {
    const localData = localStorage.getItem('caregiver_notes');
    if (localData) {
      setSavedNotes(JSON.parse(localData));
    }
  }, []);

  const handleSaveNote = () => {
    if (!noteText.trim()) return;
    const updatedNotes = [noteText, ...savedNotes];
    setSavedNotes(updatedNotes);
    localStorage.setItem('caregiver_notes', JSON.stringify(updatedNotes));
    setNoteText('');
    alert('Note saved successfully!');
  };

  const activeStyle = "bg-amber-600 text-white shadow-sm px-4 py-2 rounded-lg transition font-bold";
  const inactiveStyle = "text-zinc-400 hover:text-white px-4 py-2 rounded-lg transition";

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col">
      {/* Navigation Header */}
      <header className="bg-zinc-900 border-b border-zinc-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-amber-600 text-zinc-950 font-bold p-2.5 rounded-2xl text-xl shadow-md">
              🧠
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              Memory<span className="text-amber-500"> Guard</span>
            </span>
          </div>

          <nav className="flex items-center gap-1.5 bg-zinc-800/80 p-1.5 rounded-xl text-sm font-semibold border border-zinc-700/50 flex-wrap">
            <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? activeStyle : inactiveStyle}>Home</button>
            <button onClick={() => setActiveTab('amenities')} className={activeTab === 'amenities' ? activeStyle : inactiveStyle}>Services & Amenities</button>
            <button onClick={() => setActiveTab('routines')} className={activeTab === 'routines' ? activeStyle : inactiveStyle}>Daily Routines</button>
            <button onClick={() => setActiveTab('reminders')} className={activeTab === 'reminders' ? activeStyle : inactiveStyle}>Reminders</button>
            <button onClick={() => setActiveTab('caregivers')} className={activeTab === 'caregivers' ? activeStyle : inactiveStyle}>Caregiver Support</button>
            <button onClick={() => setActiveTab('contact')} className={activeTab === 'contact' ? activeStyle : inactiveStyle}>Contact</button>
          </nav>
        </div>
      </header>

      {/* Main Page Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6 space-y-12">
        {/* HOME SECTION */}
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Banner Section with Background Image */}
            <section className="relative overflow-hidden border border-zinc-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl bg-zinc-900">
              {/* Background Image & Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80" 
                  alt="Memory Guard Support Facility" 
                  className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent"></div>
              </div>

              {/* Banner Content */}
              <div className="relative z-10 max-w-2xl space-y-4"><span className="bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-amber-500/30">
                  Memory Care Portal
                </span>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-zinc-50">
                  Welcome to Memory Guard Support Portal
                </h1>
                <p className="text-zinc-300 text-base md:text-lg">
                  Providing calm, structured spaces for memory care routines, daily schedules, family updates, and dedicated caregiver tools.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button onClick={() => setActiveTab('amenities')} className="bg-amber-600 text-zinc-950 font-bold px-5 py-3 rounded-xl shadow hover:bg-amber-500 transition">Explore Amenities</button>
                  <button onClick={() => setActiveTab('caregivers')} className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold px-5 py-3 rounded-xl border border-zinc-700 transition">Caregiver Access</button>
                </div>
              </div>
            </section>

            {/* IMAGE GALLERY CARDS */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-lg hover:border-amber-500/50 transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" 
                    alt="Outdoor Courtyard" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-zinc-100">Outdoor Courtyard</h3>
                  <p className="text-xs text-zinc-400">Secure walking paths and relaxing garden spaces for resident recreation.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-lg hover:border-amber-500/50 transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?auto=format&fit=crop&w=800&q=80" 
                    alt="Specialized Activity Programs" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-amber-500">Specialized Activity Programs</h3>
                  <p className="text-xs text-zinc-400">Daily cognitive exercises, art therapy, and music stimulation with compassionate care.</p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-lg hover:border-amber-500/50 transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                    alt="Nurse Care & Medication" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-zinc-100">Nurse Care & Medication</h3>
                  <p className="text-xs text-zinc-400">24/7 dedicated nursing staff managing healthcare needs and daily adherence.</p>
                </div>
              </div>
            </section>
          </div>
        )}{/* SERVICES & AMENITIES SECTION */}
        {activeTab === 'amenities' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-zinc-100">Services & Facility Amenities</h2>
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
              </div>
            </div>
          </div>
        )}

        {/* REMINDERS SECTION */}
        {activeTab === 'reminders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-100">Active Reminders</h2>
            <div className="bg-amber-950/40 border border-amber-800/60 p-6 rounded-2xl space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Priority Alert</span>
              <h3 className="font-bold text-amber-200 text-lg">Afternoon Medication</h3>
              <p className="text-xs text-amber-300/80">Scheduled for 2:00 PM. Take with full glass of water.</p>
            </div>
          </div>
        )}

        {/* CAREGIVERS SECTION */}
        {activeTab === 'caregivers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-100">Caregiver Support Hub</h2>
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm space-y-4">
              <h3 className="font-bold text-zinc-200">Caregiver Notes and Shift Logs</h3>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}className="w-full p-4 bg-zinc-950 border border-zinc-800 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none text-zinc-100 placeholder-zinc-500"
                rows={4}
                placeholder="Type daily caregiver observation notes here..."
              ></textarea>
              <button 
                onClick={handleSaveNote}
                className="bg-amber-600 text-zinc-950 font-bold px-4 py-2 rounded-xl text-sm hover:bg-amber-500 transition"
              >
                Save Daily Log
              </button>

              {savedNotes.length > 0 && (
                <div className="pt-6 border-t border-zinc-800 space-y-3">
                  <h4 className="font-bold text-sm text-amber-500">Saved Shift Logs ({savedNotes.length})</h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {savedNotes.map((note, index) => (
                      <div key={index} className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-zinc-300">
                        {note}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-100">Contact & Support Center</h2>
            <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 shadow-sm space-y-4 max-w-xl">
              <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-1">
                <div className="font-bold text-sm text-amber-500">📍 Location</div>
                <div className="text-base font-semibold text-zinc-100">Kolfe Keraniyo</div>
                <div className="text-xs text-zinc-400">Addis Ababa, Ethiopia</div>
              </div>
              <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-1">
                <div className="font-bold text-sm text-amber-500">📞 Phone Number</div>
                <div className="text-base font-bold text-zinc-100">0993929602</div>
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