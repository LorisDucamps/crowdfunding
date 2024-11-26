import React from "react";
import ProjectItem from '../projectItem/ProjectItem';

export default function ProjectList({ pledges, onOpenModal }) {

    if (!pledges || pledges.length === 0) {
        return <p>No pledges available.</p>;
    }

    const filteredPledges = pledges.slice(1);

    return (
        <>
            {filteredPledges.map((pledge) => {
                return (
                    <ProjectItem
                        key={pledge.id}
                        pledge={pledge}
                        onOpenModal={onOpenModal}
                    />
                );
            })}
        </>
    );
}
