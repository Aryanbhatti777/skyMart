import { useAllCategories } from "../../hooks/productsHook";

const Filter = ({
    search,
    setSearch,
    category,
    setCategory,
    sortItem,
    setSortItem,
}) => {
    const { data } = useAllCategories();

    return (
        <div className="mx-auto mb-10 w-[90%] max-w-[1520px] rounded-[22px] border border-gray-300 bg-white p-3 sm:p-4">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-4">
                <div className="flex h-12 w-full flex-1 items-center rounded-full border border-gray-800 bg-white px-4">
                    <svg
                        className="mr-3 h-5 w-5 shrink-0 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="11" cy="11" r="7" />
                        <path d="m20 20-4-4" />
                    </svg>

                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="h-full w-full min-w-0 bg-transparent px-1 py-3 text-sm leading-none outline-none placeholder:text-gray-500"
                    />
                </div>

                <div className="relative w-full lg:w-48">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="h-12 w-full appearance-none rounded-2xl border border-gray-800 bg-[#1d1d1d] px-4 text-sm font-medium text-white outline-none"
                    >
                        <option>All Categories</option>

                        {data?.map((cat) => (
                            <option value={cat.name} key={cat.slug}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    <svg
                        className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>

                <div className="relative w-full lg:w-56">
                    <select
                        value={sortItem}
                        onChange={(e) => setSortItem(e.target.value)}
                        className="h-12 w-full appearance-none rounded-2xl border border-gray-800 bg-[#1d1d1d] px-4 text-sm font-medium text-white outline-none"
                    >
                        <option>Featured</option>
                        <option value="lowtohigh">Price: Low to High</option>
                        <option value="hightolow">Price: High to Low</option>
                        <option value="highestrated">Highest Rated</option>
                    </select>

                    <svg
                        className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Filter;