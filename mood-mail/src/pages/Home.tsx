import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput';
import { useState } from 'react'

const Home = () => {

  const [mood, setMood] = useState("");
  const [subject, setSubject] = useState("");
  const [footer, setFooter] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase();

    if (lowerMood.includes("happy")) {
      setSubject("Feeling Great Today!");
      setFooter("Stay Awesome");
    } else if (lowerMood.includes("sad")) {
      setSubject("Just Another Tough Day...")
      setFooter("Sending Hugs")
    } else if (lowerMood.includes("angry")) {
      setSubject("Need to Cool of...")
      setFooter("Deep Breaths")
    } else {
      setSubject("Mood Updated")
      setFooter("Catch You Later")
    }

    setGenerated(true)
  }

  const handleReset = () => {
    setMood("");
    setSubject("");
    setFooter("");
    setGenerated(false);
  }

  return (
    <>
      <div className='max-w-2xl mx-auto p-4 rounded-lg bg-white shadow-md space-y-6 mt-20'>
        <h2 className='text-2xl font-bold text-gray-800'>MoodMail Generator</h2>
        {!generated ? (
          <MoodInput mood={mood} setMood={setMood} onGenerate={handleGenerate} disabled={generated} />
        ) : (
          <MoodOutput subject={subject} footer={footer} onReset={handleReset} />
        )}
      </div>
    </>
  )
}

export default Home