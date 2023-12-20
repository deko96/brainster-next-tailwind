import Badge from "@/components/Badge/Badge";
import BoxWrap from "@/components/BoxWrap/BoxWrap";
import CardDataStats from "@/components/CardDataStats";
import { random } from "lodash";
import { Metadata } from "next";
import { CiViewList } from "react-icons/ci";
import { FaCog, FaTrash } from "react-icons/fa";
import { FcSurvey } from "react-icons/fc";
import { ImStatsBars } from "react-icons/im";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { PiSmileyDuotone } from "react-icons/pi";

export const metadata: Metadata = {
  title: "TailAdmin | Next.js E-commerce Dashboard Template",
  description: "This is Home Blog page for TailAdmin Next.js",
  // other metadata
};

const stats = [
  {
    title: "Surveys Count",
    total: random(1, 50),
    icon: <FcSurvey />,
  },
  {
    title: "Questions Count",
    total: random(50, 300),
    icon: <CiViewList />,
  },
  {
    title: "Response rate",
    total: [random(0, 100), '%'].join(''),
    icon: <MdOutlineQuestionAnswer />
  },
  {
    title: "Average sentiment score",
    total: random(0.0, 0.99).toFixed(5),
    icon: <PiSmileyDuotone />
  }
];

export default function SurveysDashboard() {

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        {stats.map(({ icon, ...props }) => <CardDataStats key={props.title} {...props}>
          {icon}
        </CardDataStats>)}
      </div>

      <div className="mt-6 gap-4 md:gap-6 2xl:gap-7.5">
        <BoxWrap title="Surveys List" titleClassNames="text-xl font-semibold text-black dark:text-white">
          <div className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5">
            <div className="col-span-4 flex items-center">
              <p className="font-medium">Survey Name</p>
            </div>
            <div className="col-span-3 hidden items-center sm:flex">
              <p className="font-medium">Manager</p>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="font-medium">Status</p>
            </div>
            <div className="col-span-1 flex items-center"></div>
          </div>

          <div
            className="grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5"
          >
            <div className="col-span-4 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a className="text-black dark:text-white hover:text-primary" href="#">
                  My First Survey
                </a>
              </div>
            </div>
            <div className="col-span-3 hidden items-center sm:flex">
              <a className="text-black dark:text-white hover:text-primary truncate" href="mailto:dejan.bozinoski@next.edu.mk">
                dejan.bozinoski@next.edu.mk
              </a>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-black dark:text-white">
                <Badge className="bg-meta-5 text-white">Ongoing</Badge>
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <button className="hover:text-primary py-2 px-2 rounded text-lg">
                <FaCog />
              </button>
              <button className="hover:text-primary py-2 px-2 rounded text-lg">
                <FaTrash />
              </button>
              <button className="hover:text-primary py-2 px-2 rounded text-lg">
                <ImStatsBars />
              </button>
            </div>
          </div>
        </BoxWrap>
      </div>
    </>
  );
};