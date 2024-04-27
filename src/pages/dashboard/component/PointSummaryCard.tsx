import Typography from "@/components/typography/Typography";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import React from "react";

type PointSummaryCardProps = {
  title: string;
  description: React.ReactNode;
  icon: LucideIcon;
  color: 'primary' | 'secondary' | 'warning'
};
export default function PointSummaryCard({
  title,
  description,
  icon: Icon,
  color = 'primary'
}: PointSummaryCardProps) {
  return (
    <div className={clsx("flex items-center justify-start p-2 rounded-lg bg-white",
      "shadow-md min-w-[320px] gap-x-2 border border-gray-200",
    )}>
      <div className={clsx("p-3 rounded-lg",
        color === 'primary' && 'bg-primary-100',
        color === 'secondary' && 'bg-secondary-100',
        color === 'warning' && 'bg-yellow-100')}>
        <Icon size={24} className={clsx(
          color === 'primary' && 'text-primary-500',
          color === 'secondary' && 'text-secondary-500',
          color === 'warning' && 'text-yellow-500',
        )} />
      </div>
      <div className="w-full">
        <Typography color="secondary">
          {title}
        </Typography>
        <Typography as="p">
          {description}
        </Typography>
      </div>
    </div>
  );
}