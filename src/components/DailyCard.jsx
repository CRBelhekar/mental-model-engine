import React from 'react';

const DailyCard = ({ entry }) => {
    if (!entry) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-white px-6">
                <p className="text-gray-500 font-sans tracking-wide">Silence today. No entry found.</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
            <div className="w-full max-w-2xl space-y-12">
                <div className="text-center space-y-2">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-400 font-sans">
                        {entry.category}
                    </p>
                    <h1 className="text-3xl md:text-5xl font-sans font-medium text-gray-900 tracking-tight leading-tight">
                        {entry.title}
                    </h1>
                    <p className="text-sm font-sans text-gray-500 italic">
                        by {entry.thinker}
                    </p>
                </div>

                <blockquote className="text-2xl md:text-4xl font-serif text-gray-800 leading-snug italic text-center px-4">
                    "{entry.quote}"
                </blockquote>

                <div className="font-sans text-gray-700 leading-relaxed text-base md:text-lg">
                    <p>{entry.explanation}</p>
                </div>

                <div className="pt-8 mt-8 border-t border-gray-100 flex flex-col space-y-8">
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Reflection</h3>
                        <p className="text-lg md:text-xl text-gray-800 font-serif italic">
                            {entry.reflection_prompt}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Action</h3>
                        <p className="text-base md:text-lg text-gray-800 font-sans">
                            {entry.action_prompt}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DailyCard;
