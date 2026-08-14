import { useAllCategories, useAllProducts } from "../../hooks/productsHook";

const Filter = ({ search, setSearch, category, setCategory, sortItem, setSortItem}) => {
    const { data, error } = useAllCategories()

    return (
        <div className="mx-auto w-[90%] max-w-[1520px] rounded-[22px] border border-gray-300 bg-[#fff] p-4 mb-10">
            <div className="flex items-center gap-4">
     
                <div className="flex h-12 flex-1 items-center rounded-2xl border border-gray-800 bg-[#fff] px-4">
                    <svg
                        className="mr-4 h-5 w-5 text-gray-500"
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
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Search products..."
                        className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500"
                    />
                </div>

        
                <div className="relative w-48">
                    <select className="h-12 w-full appearance-none rounded-2xl border border-gray-800 bg-[#1d1d1d] px-4 text-sm font-medium text-white outline-none"
                        onChange={(e) => setCategory(e.target.value)} value={category}>
                        <option>All Categories</option>
                        {data?.map((cat) => {
                            return <option value={cat.name} key={cat.slug}>{cat.name }</option>
                        })}
                    </select>

                    <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>

         
                <div className="relative w-56">
                    <select className="h-12 w-full appearance-none rounded-2xl border border-gray-800 bg-[#1d1d1d] px-4 text-sm font-medium text-white outline-none"
                    value={sortItem} onChange={(e) => setSortItem(e.target.value)}>
                        <option>Featured</option>
                        <option value="lowtohigh">Price: Low to High</option>
                        <option value="hightolow">Price: High to Low</option>
                        <option value="highestrated">Highest Rated</option>
                    </select>

                    <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
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