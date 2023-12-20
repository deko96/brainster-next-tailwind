import clsx from "clsx";

interface BadgeProps extends React.PropsWithChildren, React.HTMLAttributes<HTMLSpanElement> {}

const Badge = ({ className, children }: BadgeProps) => {
    return (
        <span className={clsx("rounded-full px-4 p-2 rounded leading-none flex items-center", className)}>
            {children}
        </span>
    )
};

export default Badge;
