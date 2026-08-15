const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-zinc-950 px-6 py-8">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm text-zinc-400 sm:flex-row">
                <p>
                    Made with <span className="text-red-500">♥</span> by{" "}
                    <span className="font-semibold text-violet-400">Aryan</span>
                </p>

                <p>
                    Built with{" "}
                    <span className="text-zinc-200">
                        React · Redux Toolkit · TanStack Query
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;