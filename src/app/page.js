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
        setGoalStats((prevStats) => ({
            totalAmount: prevStats.totalAmount + updatedPledge.amount,
            backers: prevStats.backers + 1,
        }));

        setDatas((prevDatas) => ({
            ...prevDatas,
            pledges: prevDatas.pledges.map((pledge) =>
                pledge.id === updatedPledge.pledgeId
                    ? { ...pledge, amountLeft: pledge.amountLeft - 1 }
                    : pledge
            ),
        }));
    };

    return (
        <>
            {isModalOpen && (
        <Modal
          pledges={datas.pledges}
          selectedPledge={selectedPledge}
          isOpen={isModalOpen}
          onCloseModal={handleCloseModal}
          onUpdatePledge={handleUpdatePledge}
        />
      )}
        
            <main className="px-6">
                <div className="flex flex-col max-w-[730px] mx-auto gap-6 -mt-14 sm:-mt-[92px]">
                    <ProjectIntro/>
                    <ProjectGoal
                        totalAmount={goalStats.totalAmount}
                        backers={goalStats.backers}
                        goalAmount={datas.general.goalAmount}
                        daysLeft={datas.general.daysLeft} />
                    <ProjectAbout pledges={datas.pledges} onOpenModal={handleOpenModal} />
                </div>
            </main>
        </>
    );
}
