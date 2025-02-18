import { twMerge } from "tailwind-merge";
import React from "react";

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

    if (!pledgeAmount || pledgeAmount < pledge.minPledge) {
      alert(`Please enter a valid amount (minimum ${pledge.minPledge})`);
      return;
    }

    onSubmitPledge({ pledgeId: selectedPledgeId, amount: pledgeAmount });
  };

  return (
    <ul className="space-y-4">
      {pledges.map((pledge) => (
        <li
          key={pledge.id}
          className={twMerge(
            "p-4 border rounded-lg",
            selectedPledgeId === pledge.id && "border-verdigris",
            pledge.amountLeft === 0 && "opacity-50 cursor-not-allowed"
          )}
        >
          <label
            htmlFor={`pledge-${pledge.id}`}
            className={twMerge(
              "cursor-pointer flex flex-col gap-6",
              pledge.amountLeft === 0 && "pointer-events-none"
            )}
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
                <span className="absolute bg-verdigris w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
              </div>
              <div>
                <h3 className="font-bold">{pledge.title}</h3>
                {pledge.minPledge && (
                  <span className="text-sm text-verdigris">
                    Pledge ${pledge.minPledge} or more
                  </span>
                )}
              </div>
              <div className="hidden md:block text-sonic-silver text-sm">
                {pledge.amountLeft !== null && (
                  <>
                    <span className="text-lg text-black font-commissionerBold">
                      {pledge.amountLeft}&nbsp;
                    </span>
                    left
                  </>
                )}
              </div>
            </div>

            <p className="text-sonic-silver">{pledge.description}</p>
            <div className="block md:hidden text-sonic-silver text-sm">
              {pledge.amountLeft !== null && (
                <>
                  <span className="text-lg text-black font-commissionerBold">
                    {pledge.amountLeft}&nbsp;
                  </span>
                  left
                </>
              )}
            </div>
          </label>
          {selectedPledgeId === pledge.id && pledge.amountLeft > 0 && (
            <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="number"
                value={pledgeAmount}
                onChange={(e) => setPledgeAmount(Number(e.target.value))}
                placeholder={`Minimum ${pledge.minPledge}`}
                min={pledge.minPledge}
                className="border p-2 rounded w-full"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Continue
              </button>
            </form>
          )}
        </li>
      ))}
    </ul>
  );
}
