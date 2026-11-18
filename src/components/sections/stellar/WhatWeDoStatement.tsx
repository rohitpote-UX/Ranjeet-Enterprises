"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PillButton from "@/components/ui/PillButton";
import { RanjeetSeal, WaterRipplesBackground } from "@/components/ui/BrandVectors";
import { ShieldCheck, Truck, Sparkles, CheckCircle2, MessageSquare, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { CONTACT_CONFIG } from "@/config/contact";
import { BRAND_CONFIG } from "@/config/brand";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhatWeDoStatement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerCardRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();
  const isDevanagari = lang === "mr" || lang === "hi";

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 78%",
            },
          }
        );
      }

      if (footerCardRef.current) {
        gsap.fromTo(
          footerCardRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerCardRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      id: "purity",
      stage: "STAGE 01 // PURITY",
      badge: isDevanagari ? "स्वच्छ जार मानक" : "HYGIENIC STANDARD",
      title: t.whatWeDo.card1Title,
      description: t.whatWeDo.card1Desc,
      image: "/images/water-ripple-crystal.jpg",
      icon: ShieldCheck,
      points: isDevanagari
        ? ["काटेकोर जार तपासणी व स्वच्छता", "सुरक्षित सीलबंद टॅम्पर-प्रूफ कॅप", "२० लिटर प्रमाणित फूड-ग्रेड जार"]
        : ["Rigorous container hygiene check", "Hermetic tamper-evident cap seal", "Certified food-grade 20L jars"],
      footerTag: "Inspected Containers • Sealed Caps",
    },
    {
      id: "logistics",
      stage: "STAGE 02 // LOGISTICS",
      badge: isDevanagari ? "पुणे सेवा मार्ग" : "PUNE SERVICE ROUTE",
      title: t.whatWeDo.card2Title,
      description: t.whatWeDo.card2Desc,
      image: "/images/delivery-van-route.jpg",
      icon: Truck,
      points: isDevanagari
        ? ["औंध, बाणेर व खडकीत नियमित सेवा", "सकाळ व दुपारच्या वेळेत डिलिव्हरी", "घर व कार्यालयासाठी थेट पुरवठा"]
        : ["Daily routes in Aundh, Baner & Khadki", "Scheduled morning & afternoon slots", "Direct doorstep placement for homes & offices"],
      footerTag: "Aundh • Baner • Khadki",
    },
    {
      id: "service",
      stage: "STAGE 03 // RELIABILITY",
      badge: isDevanagari ? "विश्वासार्ह ग्राहक सेवा" : "CUSTOMER ASSURANCE",
      title: t.whatWeDo.card3Title,
      description: t.whatWeDo.card3Desc,
      image: "/images/card-corporate.jpg",
      icon: Sparkles,
      points: isDevanagari
        ? ["१२ प्रत्यक्ष गुगल ग्राहक पुनरावलोकने", "४.६★ उच्च ग्राहक समाधान रेटिंग", "थेट व्हॉट्सॲप डिस्पॅच समन्वय"]
        : ["12 verified Google Business reviews", "4.6★ customer satisfaction rating", "Direct WhatsApp dispatch coordinator"],
      footerTag: "12 Google Reviews • 4.6★ Rating",
    },
  ];

  return (
    <section
      id="what-we-do"
      ref={containerRef}
      className="relative w-full bg-canvas text-navy py-24 sm:py-32 lg:py-40 overflow-hidden border-b border-navy/5"
    >
      {/* Background Concentric Vector Ripples */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <WaterRipplesBackground />
      </div>

      <div className="container-custom relative z-10">
        {/* Top Header Badge & Master Statement */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white shadow-sm border border-navy/10 text-navy text-xs font-sans uppercase tracking-[0.2em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
            <span>{t.whatWeDo.label} // {isDevanagari ? "पुणे वितरण केंद्र" : "PUNE HUB"}</span>
          </div>

          <h2
            className={cn(
              "font-sans font-medium text-navy text-balance tracking-tight",
              isDevanagari
                ? "text-[clamp(28px,4vw,52px)] leading-[1.3] tracking-normal"
                : "text-[clamp(34px,4.8vw,66px)] leading-[1.12] tracking-[-0.03em]"
            )}
          >
            <span>{t.whatWeDo.headingMain}</span>{" "}
            <span className="font-accent-italic font-normal italic text-ocean block mt-1.5 sm:mt-2.5">
              {t.whatWeDo.headingItalic}
            </span>
          </h2>

          <p
            className={cn(
              "text-navy/70 max-w-2xl mx-auto font-normal text-balance",
              isDevanagari
                ? "mt-6 sm:mt-7 text-base sm:text-lg leading-[1.75]"
                : "mt-6 sm:mt-7 text-base sm:text-lg leading-relaxed"
            )}
          >
            {t.whatWeDo.subline}
          </p>
        </div>

        {/* 3 Modern Architectural Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8"
        >
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-navy/10 hover:border-ocean/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Photo Frame Header */}
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-sky-subtle shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy/85 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase text-white font-semibold">
                      {item.stage}
                    </div>
                  </div>

                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-subtle flex items-center justify-center text-ocean group-hover:bg-ocean group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-navy/50 font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-sans font-medium text-navy tracking-tight mb-2.5 group-hover:text-ocean transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-navy/70 leading-relaxed font-normal mb-5">
                    {item.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 pt-2 pb-4 border-t border-navy/5">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-navy/80 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-aqua shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Meta Badge */}
                <div className="mt-4 pt-3.5 border-t border-navy/10 flex items-center justify-between text-xs text-aqua font-semibold">
                  <span>{item.footerTag}</span>
                  <ArrowUpRight className="w-4 h-4 text-navy/30 group-hover:text-aqua group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Authority & Quick Order Strip */}
        <div
          ref={footerCardRef}
          className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy via-ocean-deep to-navy text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <RanjeetSeal size={84} className="shrink-0" />
            <div>
              <span className="text-base sm:text-lg font-sans font-medium text-white block">
                {BRAND_CONFIG.name} — 20L Water Jar Supply
              </span>
              <p className="mt-1 text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
                {BRAND_CONFIG.market.address} • {CONTACT_CONFIG.operatingHours}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href={CONTACT_CONFIG.whatsappMessageTemplate()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-aqua hover:bg-white text-navy font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md hover:shadow-aqua/40"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.nav.orderNow}</span>
            </Link>

            <PillButton
              href="/our-story"
              variant="white"
              size="md"
              showArrow
            >
              {t.whatWeDo.learnProcess}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  );
}
