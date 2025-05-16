import {twMerge} from "tailwind-merge";
import React from "react";
import Button from "../button/Button";

export default function ModalList({
                                      pledges,
                                      selectedPledgeId,
                                      onSelectPledge,
                                      pledgeAmount,
                                      setPledgeAmount,
                                      onSubmitPledge,
                                  }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const pledge = pledges.find((p) => p.id === selectedPledgeId);

        if (!pledgeAmount === null || pledgeAmount < (pledge.minPledge ?? 0)) {
            alert(`Please enter a valid amount (minimum ${pledge.minPledge})`);
            return;
        }

        onSubmitPledge({pledgeId: selectedPledgeId, amount: pledgeAmount});
    };

    return (<ul className="space-y-4">
        {pledges.map((pledge) => (<li
            key={pledge.id}
            className={twMerge("p-6 border rounded-lg", selectedPledgeId === pledge.id && "border-verdigris", pledge.amountLeft === 0 && "opacity-50 cursor-not-allowed")}
        >
            <label
                htmlFor={`pledge-${pledge.id}`}
                className={twMerge("cursor-pointer flex flex-col gap-6", pledge.amountLeft === 0 && "pointer-events-none")}
            >
                <div className="flex items-center gap-4">
                    <div className="relative flex w-min">
                        <input
                            type="radio"
                            id={`pledge-${pledge.id}`}
                            name="pledge"
                            className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-medium-black transition-all"
                            checked={selectedPledgeId === pledge.id}
                            onChange={() => onSelectPledge(pledge.id)}
                            disabled={pledge.amountLeft === 0}
                        />
                        <span
                            className="absolute bg-verdigris w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                    </div>
                    <div className="sm:flex sm:gap-4">
                        <h3 className="text-sm font-bold sm:text-[16px]">
                            {pledge.title}
                        </h3>
                        {pledge.minPledge > 0 && (<span className="text-sm text-verdigris sm:text-[16px]">
                                    Pledge ${pledge.minPledge} or more
                                        </span>)}
                    </div>
                    <div className="hidden md:block text-sonic-silver text-sm sm:ml-auto">
                        {typeof pledge.amountLeft === "number" && (
                            <>
                            <span className="text-lg text-black font-bold mr-2">
                              {pledge.amountLeft}
                            </span>
                                left
                            </>
                        )}
                    </div>
                </div>

                <p className="text-sm text-sonic-silver md:pl-10 md:text-[15px]">{pledge.description}</p>
                <div className="block md:hidden text-sonic-silver text-sm">
                    {pledge.id !== 1 && typeof pledge.amountLeft === "number" && (<>
                  <span className="text-lg text-black font-bold mr-2">
                    {pledge.amountLeft}
                  </span>
                        left
                    </>)}
                </div>
            </label>
            {selectedPledgeId === pledge.id && (pledge.amountLeft > 0 || pledge.amountLeft === undefined) && (<form
                className="relative before:content-[''] before:absolute before:top-0 before:left-[-24px] before:right-[0] before:h-[1px] before:w-[calc(100%+48px)] before:bg-medium-black mt-6 pt-6 md:flex md:justify-between md:items-center"
                onSubmit={handleSubmit}
            >
                <div className="text-sm text-sonic-silver text-center mb-4 md:text-[15px] md:mb-0">
                    Enter your pledge
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div
                        className="relative flex items-center border rounded-full px-4 h-12 focus-within:border-verdigris">
                        <div className="text-sm text-gray-400 font-bold mr-2">$</div>
                        <input
                            type="number"
                            value={pledgeAmount}
                            onChange={(e) => setPledgeAmount(Number(e.target.value))}
                            placeholder={`Minimum ${pledge.minPledge}`}
                            min={pledge.minPledge}
                            className="rounded bg-transparent border-none focus:outline-none max-w-14 text-black font-bold text-sm"
                        />
                    </div>

                    <Button
                        type="submit"
                        className="text-sm"
                        variant="primary"
                        size="medium"
                        wording="Continue"
                    />
                </div>
            </form>)}
        </li>))}
    </ul>);
}
