import { useState } from "react";

function Faqqustion() {
    const faqData = [
  {
    id: 1,
    question: "Is project me dynamic data kahan se aa raha hai?",
    answer: "Yeh component dynamic REST APIs aur local JSON array objects dono ke sath easily integrate karne ke liye banaya gaya hai."
  },
  {
    id: 2,
    question: "Kya components responsive hain?",
    answer: "Haan, sabhi cards aur layouts Tailwind CSS grid aur flexbox system ka use karke mobile, tablet aur desktop screens ke liye fully responsive hain."
  },
  {
    id: 3,
    question: "Data fetch karne ke liye kaun si library use ki gayi hai?",
    answer: "Data fetching ke liye standard JavaScript Fetch API aur Axios library dono ka support standard React hooks (useEffect) ke sath diya gaya hai."
  },
  {
    id: 4,
    question: "Visual icons ke liye kaun sa package install karna padega?",
    answer: "Icons render karne ke liye `lucide-react` package ka use kiya gaya hai jo modern aur lightweight React UI icons provide karta hai."
  },
  {
    id: 5,
    question: "Kya theme customization easily available hai?",
    answer: "Ji bilkul, Tailwind CSS class utilities se aap dark/light theme aur color schemes easily custom override kar sakte hain."
  },
  {
    id: 6,
    question: "React me array items render karte waqt key prop kyu zaroori hai?",
    answer: "Key prop React Virtual DOM ko har list item unique tarike se track karne me help karta hai, jisse rendering fast aur bug-free hoti hai."
  },
  {
    id: 7,
    question: "Component loading state ko kaise handle karta hai?",
    answer: "Data fetch hone tak loading spinners ya custom fallback UI render karne ke liye React state hooks use kiye jate hain."
  },
  {
    id: 8,
    question: "Kya is project me state management use ho raha hai?",
    answer: "Haan, local component-level state ko handle karne ke liye React ka built-in `useState` hook use kiya gaya hai."
  },
  {
    id: 9,
    question: "Product items me rating object ko kaise access karein?",
    answer: "Rating object data ko display karne ke liye `{item.rating.rate}` aur `{item.rating.count}` format me properties read ki jati hain."
  },
  {
    id: 10,
    question: "Project deployment ke liye kaun sa hosting service recommended hai?",
    answer: "Is React app ko live deploy karne ke liye Vercel ya Netlify sabse fast aur smooth platform options hain."
  }
];



    const [openId, setOpenId] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-md border border-slate-200 my-8">
      <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className="border border-slate-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              className="w-full flex justify-between items-center p-4 text-left font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 transition-colors"
            >
              <span>{item.question}</span>
              <span className="text-xl font-bold text-indigo-600">
                {openId === item.id ? '−' : '+'}
              </span>
            </button>

            {openId === item.id ? (
              <div className="p-4 text-slate-600 text-sm bg-white border-t border-slate-200">
                {item.answer}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div> )
}

export default Faqqustion;