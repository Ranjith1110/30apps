import React, { useState } from 'react'
import axios from 'axios'

const Home = () => {

    const [idea, setIdea] = useState("");
    const [category, setCategory] = useState("AI SaaS");
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false);

    const handleGenerate = async () => {
        setLoading(true);
        setResult("");

        const response = await axios.post(
            "https://openrouter.ai/api/v1/chat/completions",
            {
                model: "openai/gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `Write a clean and responsive HTML landing page for a ${category} product called "${idea}",
                        The page should includes:
                        - A bold heading
                        - A short subheading
                        - Three feature cards
                        - A call-to-active button
                        Use plain HTML and Tailwind CSS. Return only vaild HTML.`,

                    }
                ],
            },
            {
                headers: {
                    Authorization: `Bearer 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`,
                    "Content-Type": "application/json",
                    "HTTP-Referer": "http://localhost:5173"
                }
            }
        )

        setResult(response.data.choices[0].message.content);
        setLoading(false);

    }

    const copyCode = () => {
        navigator.clipboard.writeText(result);
        alert("Code Copied!")
    }

    return (
        <>
            <div className='min-h-screen bg-[#f6f5ff] px-4 py-10 font-sans'>
                <div className='max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8'>
                    <h1 className='text-3xl font-bold text-center text-purple-700 mb-6'>AI Landing Page Generator</h1>
                    <input type="text" name="" id="" placeholder='Enter your product idea (eg. Travel, Shopping)' className='w-full border p-3 border-gray-300 rounded-lg mb-4'
                        value={idea}
                        onChange={(e) => setIdea(e.target.value)} />
                    <select name="" id="" className='w-full p-3 border border-gray-300 rounded-lg mb-4'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option value="AI SaaS">AI SaaS</option>
                        <option value="Productivity Tool">Productivity Tool</option>
                        <option value="Startup">Startup</option>
                    </select>
                    <button className='w-full bg-purple-700 text-white font-bold py-3 rounded-lg hover:bg-purple-800'
                        onClick={handleGenerate}>
                        {loading ? "Generating..." : "Generate Landing Page"}
                    </button>

                    {result && (
                        <div className='mt-10'>
                            <h2 className='text-xl font-bold mb-3'>Live Preview</h2>
                            <div className='border p-5 rounded-lg mb-2' dangerouslySetInnerHTML={{
                                __html: result
                            }} />

                            <div className='mt-6'>
                                <h3 className='text-lg font-semibold mb-2'>HTML Code:</h3>

                                <button className='bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-800 px-4 py-2'
                                    onClick={copyCode}>
                                    Copy Code
                                </button>
                                <pre className='bg-black text-white p-4 text-sm rounded-lg overflow-x-auto mt-6'>
                                    {result}
                                </pre>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Home