const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
            <div className="relative h-12 w-12 animate-spin">
                {/* Outer orbit */}
                <div className="absolute inset-0 rounded-full border-2 border-violet-200" />

                {/* Purple rotating arc */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent border-l-violet-600 border-t-violet-500" />

                {/* Glow */}
                <div className="absolute inset-3 rounded-full bg-violet-500/10 blur-md" />

                {/* Center */}
                {/* <div className="absolute inset-[18px] rounded-full bg-violet-600 shadow-lg shadow-violet-500/40" /> */}
            </div>
        </div>
    );
};

export default Loader;