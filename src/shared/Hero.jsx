import { ArrowRight, Box, Star, Tag, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useAllCategories } from "../features/Products/hooks/productsHook";

const Hero = () => {
  const navigate = useNavigate();
  const { cartLength, grandTotal } = useSelector((state) => state.cart);
  const { data } = useAllCategories();

  return (
    <section className="w-full px-4 py-6 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex min-h-[450px] max-w-[1520px] items-center overflow-hidden rounded-[28px] border border-white/20 bg-[#101111] px-8 py-12 sm:px-12 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.7]" />

        <div className="pointer-events-none absolute -top-[150px] -left-40 h-[450px] w-[450px] rounded-full bg-[#c8ff00]/5 blur-[120px]" />

        <div className="relative z-10 flex w-full items-center justify-between gap-10">
          <div className="max-w-[700px]">
            <p className="mb-5 text-sm font-medium tracking-[0.12em] text-violet-600 uppercase sm:text-base">
              Good Evening 👋
            </p>

            <h1 className="text-5xl leading-[1.02] font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-[58px]">
              Welcome back,
              <br />
              <span className="text-violet-600">Aryan!</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-base leading-7 text-gray-500 sm:text-lg">
              Discover today's picks — hand-curated products across
              electronics, fashion, and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/main/shop")}
                className="flex h-14 items-center gap-3 rounded-2xl bg-violet-600 px-7 font-semibold text-black transition-all duration-200 hover:scale-[1.02] hover:bg-violet-500"
              >
                Shop Now
                <ArrowRight size={19} />
              </button>

              <button
                onClick={() => navigate("/main/shop")}
                className="h-14 rounded-2xl border border-white/15 bg-white/[0.01] px-7 font-medium text-gray-300 transition-all duration-200 hover:border-white/25 hover:bg-white/[0.05]"
              >
                View All Products
              </button>
            </div>
          </div>

          <div className="hidden w-[190px] shrink-0 flex-col gap-4 md:flex">
            <div className="flex h-[116px] flex-col items-center justify-center rounded-[20px] border border-[#c8ff00]/30 bg-violet-400 text-center">
              <h3 className="text-3xl font-bold">190+</h3>

              <p className="mt-1 text-sm text-white">
                Products Available
              </p>
            </div>

            <div className="flex h-[108px] flex-col items-center justify-center rounded-[20px] border border-white/20 bg-white/[0.01] text-center">
              <h3 className="text-3xl font-semibold text-white">Free</h3>

              <p className="mt-1 text-sm text-gray-500">Delivery</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1520px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<Box size={24} />}
          iconStyle="bg-violet-300 text-violet-800"
          value={cartLength}
          title="Cart Items"
          subtitle="In your bag"
        />

        <StatCard
          icon={<TrendingUp size={24} />}
          iconStyle="bg-blue-500/10 text-blue-400"
          value={`$${grandTotal.toFixed(2)}`}
          title="Cart Value"
          subtitle="Ready to checkout"
        />

        <StatCard
          icon={<Star size={24} />}
          iconStyle="bg-yellow-500/10 text-yellow-400"
          value="5"
          title="Top Products"
          subtitle="Highly rated"
        />

        <StatCard
          icon={<Tag size={24} />}
          iconStyle="bg-purple-500/10 text-purple-400"
          value={data?.length}
          title="Categories"
          subtitle="To explore"
        />
      </div>
    </section>
  );
};

const StatCard = ({ icon, iconStyle, value, title, subtitle }) => {
  return (
    <div className="flex min-h-[150px] items-center gap-5 rounded-[25px] border border-white/20 bg-[#101111] px-7 transition-all duration-200 hover:border-white/30">
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] ${iconStyle}`}
      >
        {icon}
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {value}
        </h3>

        <p className="mt-0.5 text-base text-gray-400">{title}</p>

        <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default Hero;