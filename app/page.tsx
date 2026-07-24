'use client';

import React, { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');

  const activeStyle = "bg-white text-blue-600 shadow-sm px-4 py-2 rounded-lg transition";
  const inactiveStyle = "text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg transition";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Navigation Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="bg-blue-600 text-white font-bold p-2 rounded-xl text-xl shadow-sm">
              💙
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">
              True Care <span className="text-blue-600">Hub</span>
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl text-sm font-semibold">
            <button
              onClick={() => setActiveTab('home')}
              className={activeTab === 'home' ? activeStyle : inactiveStyle}
            >
              Home
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
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-xl">
              <div className="max-w-2xl space-y-4">
                <span className="bg-blue-500/30 text-blue-100 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-blue-400/30">
                  Memory Care and Wellness
                </span>
                <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                  Welcome to True Care Support Portal
                </h1>
                <p className="text-blue-100 text-base md:text-lg">
                  Providing calm, structured spaces for memory care routines, daily schedules, family updates, and dedicated caregiver tools.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <button onClick={() => setActiveTab('routines')} className="bg-white text-blue-700 font-bold px-5 py-3 rounded-xl shadow hover:bg-blue-50 transition">
                    View Schedule
                  </button>
                  <button onClick={() => setActiveTab('caregivers')} className="bg-blue-800/60 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-xl border border-blue-400/30 transition">
                    Caregiver Access
                  </button>
                </div>
              </div>
            </section><section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-3xl">📅</div>
                <h3 className="text-lg font-bold text-slate-900">Structured Routines</h3>
                <p className="text-sm text-slate-600">Keep daily activities predictably organized for peace of mind.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-3xl">🔔</div>
                <h3 className="text-lg font-bold text-slate-900">Smart Reminders</h3>
                <p className="text-sm text-slate-600">Timely notifications for medications, meals, and family visits.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="text-3xl">🤝</div>
                <h3 className="text-lg font-bold text-slate-900">Caregiver Portal</h3>
                <p className="text-sm text-slate-600">Direct notes and logs for family members and health aides.</p>
              </div>
            </section>
          </div>
        )}

        {/* DAILY ROUTINES SECTION */}
        {activeTab === 'routines' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Daily Routines and Activities</h2>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-4 border-b">
                <span className="font-bold text-lg">Morning Schedule</span>
                <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2.5 py-1 rounded-full">Completed</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <span>💊 Morning Medication and Water</span>
                  <span className="text-xs font-semibold text-slate-500">8:00 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <span>🥣 Breakfast and Herbal Tea</span>
                  <span className="text-xs font-semibold text-slate-500">8:30 AM</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <span>🌱 Garden Walk and Light Exercise</span>
                  <span className="text-xs font-semibold text-slate-500">10:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REMINDERS SECTION */}
        {activeTab === 'reminders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Active Reminders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">Priority Alert</span>
                <h3 className="font-bold text-amber-900 text-lg">Afternoon Medication</h3>
                <p className="text-xs text-amber-700">Scheduled for 2:00 PM. Take with full glass of water.</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Family Notification</span>
                <h3 className="font-bold text-emerald-900 text-lg">Video Call with Sarah</h3>
                <p className="text-xs text-emerald-700">Scheduled for 4:30 PM via Family Portal.</p>
              </div>
            </div>
          </div>
        )}{/* CAREGIVERS SECTION */}
        {activeTab === 'caregivers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Caregiver Support Hub</h2>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-800">Caregiver Notes and Shift Logs</h3>
              <textarea
                className="w-full p-4 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                rows={4}
                placeholder="Type daily caregiver observation notes here..."
              ></textarea>
              <button className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-xl text-sm hover:bg-blue-700 transition">
                Save Daily Log
              </button>
            </div>
          </div>
        )}

        {/* CONTACT SECTION */}
        {activeTab === 'contact' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Contact and Emergency Support</h2>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 max-w-lg">
              <p className="text-sm text-slate-600">For emergency assistance or support team inquiries:</p>
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-900 space-y-1">
                <div className="font-bold text-sm">Emergency Care Hotline</div>
                <div className="text-lg font-black">1-800-TRUE-CARE</div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © 2026 True Care Hub. All rights reserved.
      </footer>
    </div>
  );
}