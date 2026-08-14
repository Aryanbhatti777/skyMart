import React from "react";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router";

const stats = [
  {
    icon: Package,
    value: "20K+",
    label: "Products",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Happy Customers",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Avg. Rating",
  },
  {
    icon: Truck,
    value: "99%",
    label: "On-time Delivery",
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: Truck,
    title: "Speed",
    description:
      "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: HeartHandshake,
    title: "Community",
    description:
      "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: Star,
    title: "Quality",
    description:
      "We curate the best — no filler, no junk, just great products.",
  },
];

const team = [
  {
    name: "Aryan Sain",
    role: "Founder & CEO",
    initial: "A",
    color: "bg-violet-500 text-white",
  },
  {
    name: "Priya Saini",
    role: "Head of Product",
    initial: "P",
    color: "bg-blue-500 text-white",
  },
  {
    name: "Aman Verma",
    role: "Lead Engineer",
    initial: "R",
    color: "bg-purple-500 text-white",
  },
  {
    name: "Vikram Gurjar",
    role: "Design Director",
    initial: "S",
    color: "bg-pink-500 text-white",
  },
];

const About = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-[#080808] px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
 
        <section className="flex flex-col items-center text-center">
          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-[20px] bg-violet-600 text-white shadow-[0_0_35px_rgba(124,58,237,0.25)]">
            <Zap size={32} strokeWidth={3} fill="currentColor" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            About <span className="text-violet-500">SkyMart</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </section>


        <section className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex min-h-[125px] flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-[#101010] px-5 py-6 transition duration-300 hover:border-violet-500/60"
              >
                <Icon
                  size={21}
                  className="mb-3 text-violet-500"
                  strokeWidth={2}
                />

                <h3 className="text-2xl font-bold">{stat.value}</h3>

                <p className="mt-1 text-sm text-zinc-600">{stat.label}</p>
              </div>
            );
          })}
        </section>

        <section className="mt-16 rounded-[28px] border border-zinc-700 bg-[#101010] px-7 py-8 sm:px-10 sm:py-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Story</h2>

          <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-500 sm:text-base">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:{" "}
              <span className="italic text-zinc-300">
                what if shopping online was actually enjoyable?
              </span>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </section>


        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            What We Stand For
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="flex gap-5 rounded-2xl border border-zinc-700 bg-[#101010] p-6 transition duration-300 hover:border-violet-500/60"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-500">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{value.title}</h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

 
        <section className="mt-16">
          <h2 className="text-center text-2xl font-bold sm:text-3xl">
            Meet the Team
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-[#101010] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-violet-500/60"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl text-lg font-bold ${member.color}`}
                >
                  {member.initial}
                </div>

                <h3 className="font-semibold">{member.name}</h3>

                <p className="mt-1 text-sm text-zinc-600">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

     
        <section className="mt-16 rounded-[28px] border border-violet-500/20 bg-[#101010] px-6 py-12 text-center sm:py-14">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to shop?</h2>

          <p className="mt-4 text-sm text-zinc-500 sm:text-base">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            type="button"
            className="group mt-7 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]"
            onClick={() => navigate("/main/shop")}
          >
            Browse Products
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </section>
      </div>
    </main>
  );
};

export default About;
