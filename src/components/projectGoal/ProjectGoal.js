"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Card from "../card/Card";
import ProgressBar from "../progressbar/ProgressBar";

export default function ProjectGoal({
  totalAmount,
  backers,
  goalAmount,
  daysLeft,
}) {
  const calculateRemainingDays = () => Math.max(daysLeft, 0);
  const remainingDays = calculateRemainingDays();

  const listItemBaseClasses = twMerge(
    "relative mb-6 pb-6 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:w-20 after:mx-auto after:bg-medium-black",
    "sm:pb-0 sm:after:top-0 sm:after:right-0 sm:after:left-[inherit] sm:after:h-full sm:after:w-px sm:after:m-[inherit] sm:mb-0"
  );

  const progress = Math.min((totalAmount / goalAmount) * 100, 100);

  const renderListItem = (value, label, isLast = false) => (
    <li className={isLast ? "" : listItemBaseClasses}>
      <dl>
        <dt className="text-[32px] font-bold">{value}</dt>
        <dd className="text-sm text-sonic-silver sm:text-[15px]">{label}</dd>
      </dl>
    </li>
  );

  return (
    <Card>
      <ul className="grid grid-cols-1 text-center sm:grid-cols-3">
        {renderListItem(`$${totalAmount}`, `of $${goalAmount} backed`)}
        {renderListItem(backers, "total backers")}
        {renderListItem(remainingDays, "days left", true)}
      </ul>
      <ProgressBar progress={progress} />
    </Card>
  );
}
