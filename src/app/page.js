'use client'
import ProjectIntro from "@/components/projectIntro/ProjectIntro";
import {useState} from "react";
import ProjectGoal from "@/components/projectGoal/ProjectGoal";
import data from "../data/data.json";
import ProjectAbout from "@/components/projectAbout/ProjectAbout";
import Modal from "@/components/modal/Modal";

export default function Home() {

    const [datas, setDatas] = useState(data);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPledge, setSelectedPledge] = useState(null);
    const [goalStats, setGoalStats] = useState({
        totalAmount: datas.general.currentAmount,
        backers: datas.general.totalBackers,
    });


    const handleOpenModal = (pledgeId) => {
        const pledge = datas.pledges.find((p) => p.id === pledgeId);
        setSelectedPledge(pledge);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdatePledge = (updatedPledge) => {
        if (!updatedPledge || typeof updatedPledge.pledgeId === 'undefined' || typeof updatedPledge.amount !== 'number') {
            console.warn("handleUpdatePledge: données invalides", updatedPledge);
            return;
        }

        setGoalStats((prevStats) => ({
            totalAmount: prevStats.totalAmount + updatedPledge.amount,
            backers: prevStats.backers + 1,
        }));

        setDatas((prevDatas) => {
            const pledgeExists = prevDatas.pledges.some(p => p.id === updatedPledge.pledgeId);
            if (!pledgeExists) {
                console.warn("handleUpdatePledge: pledge non trouvé", updatedPledge.pledgeId);
                return prevDatas;
            }

            return {
                ...prevDatas,
                pledges: prevDatas.pledges.map((pledge) =>
                    pledge.id === updatedPledge.pledgeId
                        ? {
                            ...pledge,
                            amountLeft: Math.max(0, pledge.amountLeft - 1),
                        }
                        : pledge
                ),
            };
        });
    };


    const renderModal = () => {
        if (!isModalOpen) return null;
        return (
            <Modal
                pledges={datas.pledges}
                selectedPledge={selectedPledge}
                isOpen={isModalOpen}
                onCloseModal={handleCloseModal}
                onUpdatePledge={handleUpdatePledge}
            />
        );
    };

    return (
        <>
            {renderModal()}
            <main className="px-6">
                <div className="flex flex-col max-w-[730px] mx-auto gap-6 -mt-14 sm:-mt-[92px]">
                    <ProjectIntro/>
                    <ProjectGoal
                        totalAmount={goalStats.totalAmount}
                        backers={goalStats.backers}
                        goalAmount={datas.general.goalAmount}
                        daysLeft={datas.general.daysLeft}/>
                    <ProjectAbout pledges={datas.pledges} onOpenModal={handleOpenModal}/>
                </div>
            </main>
        </>
    );
}
