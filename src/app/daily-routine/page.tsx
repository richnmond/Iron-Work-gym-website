import DailyRoutine from '@/components/DailyRoutine'

export const metadata = {
  title: 'Daily Routine - IronWorks',
  description: 'Simple daily routine to improve consistency: morning, workout, nutrition and recovery.',
}

export default function Page() {
  return (
    <main>
      <DailyRoutine />
    </main>
  )
}
