import clsx from "clsx";
import Link from "next/link";

interface BoxWrapProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    titleClassNames?: string;
    actions?: unknown[];
}

const BoxWrap = ({ title, titleClassNames, className, actions, children }: BoxWrapProps) => {
    return (
        <div className={clsx("rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark", className)}>
            {title || actions ? <div className="py-6 px-4 md:px-6 xl:px-7.5">
                <h4 className={titleClassNames}>
                    {title}
                </h4>
            </div> : null}
            {children}
        </div>
    )
};

export default BoxWrap;
