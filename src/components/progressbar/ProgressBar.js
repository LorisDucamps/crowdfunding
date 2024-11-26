import React from 'react';

export default function ProgressBar({ progress = 0 }) {

    const clampedProgress = Math.max(0, Math.min(progress, 100));

    return (
        <div
            className="relative block h-3 w-full mt-8 bg-light-dark-charcoal rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={clampedProgress}
            aria-valuemin={0}
            aria-valuemax={100}
        >
            <div
                className="absolute top-0 left-0 h-full bg-verdigris transition-all duration-500 ease-in-out"
                style={{ width: `${clampedProgress}%` }}
            />
        </div>
    );
}
