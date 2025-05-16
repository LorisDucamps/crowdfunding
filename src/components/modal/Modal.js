import React, {useEffect, useState} from "react";
import Card from "../card/Card";
import ModalList from "./ModalList";
import ModalSuccess from "./ModalSuccess";

export default function Modal({
                                  pledges,
                                  selectedPledge,
                                  isOpen,
                                  onCloseModal,
                                  onUpdatePledge,
                              }) {
    const [selectedPledgeId, setSelectedPledgeId] = useState(null);
    const [pledgeAmount, setPledgeAmount] = useState(0);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        if (selectedPledge) {
            setSelectedPledgeId(selectedPledge.id);
            setPledgeAmount(selectedPledge.minPledge);
        }
    }, [selectedPledge]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [isOpen]);

    const handleSubmitPledge = (updatedPledge) => {
        onUpdatePledge(updatedPledge);
        setIsSuccess(true);
    };

    const handleBackToHome = () => {
        setIsSuccess(false);
        onCloseModal();
    };

    return (
        <dialog
            open={isOpen}
            className="fixed top-0 bottom-0 px-6 lg:px-0 z-30 content-center h-[calc(100%)] w-auto before:content-[''] before:fixed before:inset-0 before:h-screen before:w-screen before:bg-black/[.5]"
            aria-labelledby="modal-title"
            role="dialog"
        >
            <Card extraClassName="relative max-w-[730px] mx-auto">
                <div>
                    {!isSuccess && (
                        <button
                            onClick={onCloseModal}
                            className="absolute top-[30px] right-[14px] p-4"
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon-close-modal"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.0708 3.75738L12.2424 0.928955L7.99978 5.1716L3.75714 0.928955L0.928711 3.75738L5.17135 8.00002L0.928711 12.2427L3.75714 15.0711L7.99978 10.8285L12.2424 15.0711L15.0708 12.2427L10.8282 8.00002L15.0708 3.75738Z"
                                    fill="#979797"
                                />
                            </svg>
                        </button>
                    )}

                    {!isSuccess ? (
                        <>
                            <h2
                                id="modal-title"
                                className="text-lg font-bold mb-6 sm:text-2xl sm:mb-4"
                            >
                                Back this project
                            </h2>
                            <p className="text-sm leading-6 text-sonic-silver mb-6 sm:text-base sm:mb-8">
                                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                                out in the world?
                            </p>
                            <div className="overflow-y-auto max-h-[calc(100vh-330px)]">
                                <ModalList
                                    pledges={pledges}
                                    selectedPledgeId={selectedPledgeId}
                                    onSelectPledge={setSelectedPledgeId}
                                    pledgeAmount={pledgeAmount}
                                    setPledgeAmount={setPledgeAmount}
                                    onSubmitPledge={handleSubmitPledge}
                                />
                            </div>

                        </>
                    ) : (
                        <ModalSuccess onBackToHome={handleBackToHome}/>
                    )}
                </div>
            </Card>
        </dialog>
    );
}
