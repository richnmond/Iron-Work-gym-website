"use client"

import React from 'react'

export default function DailyRoutine() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">Daily Routine</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">A balanced daily plan to keep you energized and consistent — morning prep, workout, nutrition, and recovery.</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Routine cards */}
        <article className="p-6 rounded-xl shadow-md bg-white/80 dark:bg-black/60">
          <h2 className="text-2xl font-semibold">Morning Routine</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Wake up, hydrate, mobility and a light warm-up to set your energy for the day.</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Drink 300–500ml water</li>
            <li>5–10 minutes of mobility (neck, shoulders, hips)</li>
            <li>Short bodyweight warm-up (2–3 rounds)</li>
          </ul>
        </article>

        <article className="p-6 rounded-xl shadow-md bg-white/80 dark:bg-black/60">
          <h2 className="text-2xl font-semibold">Workout</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">A focused training session — strength, cardio or a hybrid depending on your goals.</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>10 min warm-up</li>
            <li>Main set: compound lifts or circuits (30–45 min)</li>
            <li>Cooldown & stretching (5–10 min)</li>
          </ul>
        </article>

        <article className="p-6 rounded-xl shadow-md bg-white/80 dark:bg-black/60">
          <h2 className="text-2xl font-semibold">Nutrition</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Fuel strategically to support performance and recovery throughout the day.</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Protein-focused breakfast</li>
            <li>Balanced lunch with vegetables and whole grains</li>
            <li>Post-workout snack: carbs + protein</li>
          </ul>
        </article>

        <article className="p-6 rounded-xl shadow-md bg-white/80 dark:bg-black/60">
          <h2 className="text-2xl font-semibold">Evening & Recovery</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Wind down and prioritize sleep quality to ensure long-term progress.</p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700 dark:text-gray-200">
            <li>Light stretching or mobility</li>
            <li>Disconnect screens 30–60 min before bed</li>
            <li>Sleep routine: consistent bedtime</li>
          </ul>
        </article>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700 dark:text-gray-200 mb-4">Want a printable or sharable routine? Use the button below to save or share your plan.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold">Save this Routine</button>
      </div>
    </section>
  )
}
