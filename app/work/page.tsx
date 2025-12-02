"use client"

import { HeroParallax } from "@/components/hero-parallax"

const products = [
  {
    title: "Global Exports Ltd",
    link: "/work/global-exports",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "TechTrade India",
    link: "/work/techtrade",
    thumbnail: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "Patel Spices",
    link: "/work/patel-spices",
    thumbnail: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "EuroFoods Logistics",
    link: "/work/eurofoods",
    thumbnail: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Asian Textiles",
    link: "/work/asian-textiles",
    thumbnail: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Future Tech",
    link: "/work/future-tech",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Smart Logistics",
    link: "/work/smart-logistics",
    thumbnail: "https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=2064&auto=format&fit=crop",
  },
  {
    title: "Eco Packaging",
    link: "/work/eco-packaging",
    thumbnail: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Urban Fashion",
    link: "/work/urban-fashion",
    thumbnail: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "NextGen Auto",
    link: "/work/nextgen-auto",
    thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2047&auto=format&fit=crop",
  },
  {
    title: "Green Energy",
    link: "/work/green-energy",
    thumbnail: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Cloud Systems",
    link: "/work/cloud-systems",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Agri Exports",
    link: "/work/agri-exports",
    thumbnail: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "MediCare Global",
    link: "/work/medicare-global",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "EduTech Pro",
    link: "/work/edutech-pro",
    thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop",
  }
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroParallax products={products} />
    </main>
  )
}