import BoxWrap from "@/components/BoxWrap/BoxWrap";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SurveyQuestionList from "@/components/Survey/SurveyQuestionList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "TailAdmin | Next.js E-commerce Dashboard Template",
    description: "This is Home Blog page for TailAdmin Next.js",
    // other metadata
};

export default function SurveyFormPage() {
    return (
        <>
            <Breadcrumb pageName="New Survey" />
            <BoxWrap title="General Survey Info" titleClassNames="text-md font-bold">
                <div className="border-t border-stroke py-4.5 px-4 dark:border-strokedark py-6 px-4 md:px-6 xl:px-7.5">
                    <form action="#">
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter survey name"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>

                            <div className="w-full xl:w-1/2">
                                <label className="mb-2.5 block text-black dark:text-white" htmlFor="manager">
                                    Manager
                                </label>
                                
                                <input
                                    id="manager"
                                    type="email"
                                    placeholder="Enter manager email"
                                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="mb-2.5 block text-black dark:text-white" htmlFor="introduction">
                                Introduction message
                            </label>
                            <textarea
                                id="introduction"
                                rows={6}
                                placeholder="Type your message"
                                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            ></textarea>
                        </div>

                        <div className="mb-6">
                            <label className="mb-2.5 block text-black dark:text-white" htmlFor="status">
                                Status
                            </label>
                            <div className="relative z-20 bg-transparent dark:bg-form-input">
                                <select id="status" className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="DRAFT">Draft</option>
                                    <option value="ONGOING">Ongoing</option>
                                    <option value="FINISHED" disabled>Finished</option>
                                </select>
                                <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                                    <svg
                                        className="fill-current"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g opacity="0.8">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                                                fill=""
                                            ></path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                            Save Changes
                        </button>
                    </form>
                </div>
            </BoxWrap>

            <BoxWrap title="Survey Questions" titleClassNames="text-md font-bold" className="mt-6">
                <SurveyQuestionList />
            </BoxWrap>
        </>
    );
}
