'use client';
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { IoReorderThreeSharp } from "react-icons/io5";
import SwitcherThree from '../Switchers/SwitcherThree';
import { FaClone, FaTrash } from 'react-icons/fa';

const SurveyQuestionList = () => {
    const [data, setData] = useState([
        { id: 1, text: "How would you rate your proficiency in coding on a scale from 1 to 10?" },
        { id: 2, text: "What programming languages are you most comfortable using?" },
        { id: 3, text: "Have you ever participated in an open-source project? If yes, please share your experience." },
        { id: 4, text: "How do you stay updated with the latest trends and technologies in software development?" },
        { id: 5, text: "What development tools or IDEs do you prefer using and why?" },
        { id: 6, text: "In your opinion, what makes a piece of code 'clean' and maintainable?" },
        { id: 7, text: "Do you have a preferred version control system, and if so, why?" },
        { id: 8, text: "How do you approach and solve complex programming problems?" },
        { id: 9, text: "What software development methodology do you prefer (e.g., Agile, Scrum, Waterfall)?" },
        { id: 10, text: "What is your favorite aspect of software development, and why?" },
        { id: 11, text: "How do you handle and overcome 'coder's block' or lack of motivation?" },
        { id: 12, text: "What coding practices do you follow to ensure the security of your applications?" },
        { id: 13, text: "What is your preferred testing approach (e.g., unit testing, integration testing)?" },
        { id: 14, text: "How do you prioritize tasks and manage your time effectively during a software project?" },
        { id: 15, text: "Do you actively participate in code reviews, and what value do you see in them?" },
        { id: 16, text: "What role does documentation play in your development process?" },
        { id: 17, text: "How do you handle disagreements or conflicts within a development team?" },
        { id: 18, text: "What is your experience with DevOps practices, if any?" },
        { id: 19, text: "How do you approach learning new programming languages or frameworks?" },
        { id: 20, text: "What challenges have you faced in your past software projects, and how did you overcome them?" },
        { id: 21, text: "What is your preferred method for code deployment?" },
        { id: 22, text: "How do you ensure the scalability and performance of your applications?" },
        { id: 23, text: "What advice would you give to someone starting their career in software development?" },
    ]);

    return (
        <>
            <div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5">
                <div className="col-span-1">
                    <p className="font-medium">Position</p>
                </div>
                <div className="col-span-6 flex">
                    <p className="font-medium">Text</p>
                </div>
                <div className="col-span-1 flex">
                    <p className="font-medium">Is Required?</p>
                </div>
                <div className="col-span-1"></div>
            </div>

            <ReactSortable list={data} setList={setData} animation={200} handle='.handle'>
                {data.map((item, index) => (<div className="grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-9 md:px-6 2xl:px-7.5" key={item.id}>
                    <div className="col-span-1 flex items-center gap-2 handle cursor-move">
                        <IoReorderThreeSharp className="text-2xl" />
                        {index}
                    </div>
                    <div className="col-span-6 flex items-center !border-0 !outline-0" contentEditable>
                        {item.text}
                    </div>
                    <div className="col-span-1">
                        <SwitcherThree />
                    </div>
                    <div className="col-span-1 flex items-center justify-end">
                        <button className="hover:text-primary py-2 px-2 rounded text-lg">
                            <FaClone />
                        </button>
                        <button className="hover:text-primary py-2 px-2 rounded text-lg">
                            <FaTrash />
                        </button>
                    </div>
                </div>))}
            </ReactSortable>
        </>
    )
}

export default SurveyQuestionList;