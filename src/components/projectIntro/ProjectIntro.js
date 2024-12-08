'use client'
import React, { useState } from "react";
import Button from "../Button/Button";
import Card from "../card/Card";

export default function ProjectIntro() {
    const [isBookmarked, setIsBookmarked] = useState(false);

    const toggleBookmark = () => {
        setIsBookmarked((prev) => !prev);
    };

    return (
        <Card className="pt-[52px] sm:pt-14">

            <img
                className="absolute -top-[28px] right-0 left-0 mx-auto"
                src="/assets/logos/logo-mastercraft.svg"
                alt="Logo CrowdFunding"
                height="56"
                width="56"
            />

            <h1 className="text-xl font-commissionerBold text-center sm:text-[28px]">
                Mastercraft Bamboo Monitor Riser
            </h1>


            <p className="text-sm text-center text-sonic-silver mt-4 mb-6 sm:text-base sm:mb-10">
                A beautiful & handcrafted monitor stand to reduce neck and eye strain.
            </p>


            <div className="flex justify-between items-center">
                <Button
                    variant="primary"
                    size="big"
                    wording="Back this project"
                />
                <Button
                    variant="secondary"
                    size="big"
                    icon
                    wording={isBookmarked ? "Bookmarked" : "Bookmark"}
                    className={isBookmarked ? "bg-light-deep-verdigris" : ""}
                    onClick={toggleBookmark}
                    active={isBookmarked}
                />
            </div>
        </Card>
    );
}
