"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Heavy Design, Light Feel. We handle every creative and technical challenge while keeping the experience minimal and effortless. Your growth partner for the digital age.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed" />;
}