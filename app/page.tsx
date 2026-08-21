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
  const inactiveStyle = "text-zinc-600 hover:text-amber-700 px-4 py-2 rounded-lg transition";

  return (
    <div className="min-h-screen bg-stone-100 text-zinc-900 font-sans flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white border-b border-zinc-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-amber-500 text-white font-bold p-2.5 rounded-2xl text-xl shadow-md">
              🧠
            </div>
            <span className="text-2xl font-black tracking-tight text-zinc-900">
              Memory<span className="text-amber-600"> Guard</span>
            </span>
          </div>

          <nav className="flex items-center gap-1.5 bg-zinc-100 p-1.5 rounded-xl text-sm font-semibold border border-zinc-200 flex-wrap">
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
            {/* Banner Section with Bright Background Image */}
            <section className="relative overflow-hidden border border-amber-200/80 rounded-3xl p-8 md:p-12 shadow-xl bg-amber-900 text-white">
              {/* Background Image & Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1600&q=80" 
                  alt="Memory Guard Support Facility" 
                  className="w-full h-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-950/90 via-amber-900/80 to-transparent"></div>
              </div>

              {/* Banner Content */}
              <div className="relative z-10 max-w-2xl space-y-4"><span className="bg-amber-400 text-amber-950 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Memory Care Portal
                </span>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Welcome to Memory Guard Support Portal
                </h1>
                <p className="text-amber-100 text-base md:text-lg font-medium">
                  Providing calm, structured spaces for memory care routines, daily schedules, family updates, and dedicated caregiver tools.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button onClick={() => setActiveTab('amenities')} className="bg-amber-500 text-white font-bold px-5 py-3 rounded-xl shadow-md hover:bg-amber-600 transition">Explore Amenities</button>
                  <button onClick={() => setActiveTab('caregivers')} className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-xl border border-white/30 backdrop-blur-sm transition">Caregiver Access</button>
                </div>
              </div>
            </section>

            {/* IMAGE GALLERY CARDS */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Outdoor Courtyard */}
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-400 transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80" 
                    alt="Outdoor Courtyard" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-zinc-900">Outdoor Courtyard</h3>
                  <p className="text-xs text-zinc-600">Secure walking paths and relaxing garden spaces for resident recreation.</p>
                </div>
              </div>

              {/* Card 2: Specialized Activity Programs */}
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-400 transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80" 
                    alt="Specialized Activity Programs" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-amber-600">Specialized Activity Programs</h3>
                  <p className="text-xs text-zinc-600">Daily cognitive exercises, art therapy, and music stimulation with compassionate care.</p>
                </div>
              </div>

              {/* Card 3: Nurse Care & Medication */}
              <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md hover:border-amber-400 transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80" 
                    alt="Nurse Care & Medication" 
                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-zinc-900">Nurse Care & Medication</h3><p className="text-xs text-zinc-600">24/7 dedicated nursing staff managing healthcare needs and daily adherence.</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* SERVICES & AMENITIES SECTION */}
        {activeTab === 'amenities' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-zinc-900">Services & Facility Amenities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
                <div className="text-3xl">🏥</div>
                <h3 className="text-xl font-bold text-amber-600">24/7 Professional Supervision</h3>
                <p className="text-sm text-zinc-600">Round-the-clock trained caregivers and emergency response staff on-site continuously.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
                <div className="text-3xl">💊</div>
                <h3 className="text-xl font-bold text-amber-600">Medication Management</h3>
                <p className="text-sm text-zinc-600">Timely dosage tracking, prescription renewals, and strict adherence logs.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-3">
                <div className="text-3xl">🥗</div>
                <h3 className="text-xl font-bold text-amber-600">Nutritional Dining</h3>
                <p className="text-sm text-zinc-600">Chef-prepared healthy meals and custom dietary plans tailored for cognitive health.</p>
              </div>
            </div>
          </div>
        )}

        {/* DAILY ROUTINES SECTION */}
        {activeTab === 'routines' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Daily Routines and Activities</h2>
            <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200">
                <span className="font-bold text-lg text-zinc-900">Morning Schedule</span>
                <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-300">Completed</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
                  <span className="text-zinc-800 font-medium">💊 Morning Medication and Water</span>
                  <span className="text-xs font-semibold text-zinc-500">8:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REMINDERS SECTION */}
        {activeTab === 'reminders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Active Reminders</h2>
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl space-y-2 shadow-sm">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Priority Alert</span>
              <h3 className="font-bold text-amber-900 text-lg">Afternoon Medication</h3>
              <p className="text-xs text-amber-800">Scheduled for 2:00 PM. Take with full glass of water.</p>
            </div>
          </div>
        )}

        {/* CAREGIVERS SECTION */}
        {activeTab === 'caregivers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-zinc-900">Caregiver Support Hub</h2>
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4"><h3 className="font-bold text-zinc-800">Caregiver Notes and Shift Logs</h3>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none text-zinc-900 placeholder-zinc-400"
                rows={4}
                placeholder="Type daily caregiver observation notes here..."
              ></textarea>
              <button 
                onClick={handleSaveNote}
                className="bg-amber-600 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:bg-amber-500 transition shadow-sm"
              >
                Save Daily Log
              </button>

              {savedNotes.length > 0 && (
                <div className="pt-6 border-t border-zinc-200 space-y-3">
                  <h4 className="font-bold text-sm text-amber-600">Saved Shift Logs ({savedNotes.length})</h4>
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {savedNotes.map((note, index) => (
                      <div key={index} className="p-3 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-700">
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
            <h2 className="text-2xl font-bold text-zinc-900">Contact & Support Center</h2>
            <div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm space-y-4 max-w-xl">
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
                <div className="font-bold text-sm text-amber-600">📍 Location</div>
                <div className="text-base font-semibold text-zinc-900">Kolfe Keraniyo</div>
                <div className="text-xs text-zinc-500">Addis Ababa, Ethiopia</div>
              </div>
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
                <div className="font-bold text-sm text-amber-600">📞 Phone Number</div>
                <div className="text-base font-bold text-zinc-900">0993929602</div>
              </div>
              <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-xl space-y-1">
                <div className="font-bold text-sm text-amber-600">✉️ Email Address</div>
                <div className="text-base font-bold text-zinc-900">memoryguardcare@gmail.com</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-zinc-200 py-6 text-center text-xs text-zinc-500">
        © Memory Guard. All rights reserved.
      </footer>
    </div>
  );
}