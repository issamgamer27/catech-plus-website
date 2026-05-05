"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Headphones,
  Cpu,
  CreditCard,
  Truck,
  Star,
  ShieldCheck,
  Mouse,
  Keyboard,
  MessageCircle,
  Menu,
  X
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";

const whatsapp = "https://wa.me/213XXXXXXXXX";
const categories = [
  ["Jeux PlayStation", "Les meilleurs titres PS4 & PS5 disponibles sur demande.", Gamepad2],
  ["Accessoires Gaming", "Supports, stations de charge et équipements performants.", Star],
  ["Équipements PC", "Composants et périphériques fiables pour votre setup.", Cpu],
  ["Cartes cadeaux & recharges", "PSN, cartes prépayées et crédits gaming.", CreditCard],
  ["Manettes & casques", "DualSense, casques et audio immersif.", Headphones],
  ["Livraison en Algérie", "Commande simple et expédition dans les 48 wilayas.", Truck]
] as const;

type ServiceHighlight = {
  text: string;
  icon: LucideIcon;
};

const serviceHighlights: ServiceHighlight[] = [
  { text: "Produits gaming de qualité", icon: ShieldCheck },
  { text: "Livraison partout en Algérie", icon: Truck },
  { text: "Service rapide et fiable", icon: Star },
  { text: "Conseils pour gamers et tech lovers", icon: Gamepad2 }
];

const featured = ["Jeu PlayStation", "Manette DualSense", "Casque Gaming", "Clavier Gaming", "Souris Gaming", "Accessoires PC"];

export default function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <main>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
          <span className="text-xl font-bold text-white">Catech<span className="text-neon">+</span></span>
          <div className="hidden items-center gap-6 md:flex">{["Accueil","Produits","Services","Livraison","Avis","Contact"].map((m)=><a key={m} href={`#${m.toLowerCase()}`} className="text-sm text-white/80 hover:text-white">{m}</a>)}</div>
          <Link href={whatsapp} className="hidden rounded-full bg-neon px-4 py-2 text-sm font-medium md:inline-flex">Commander maintenant</Link>
          <button aria-label="Ouvrir le menu" className="md:hidden" onClick={()=>setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
        </nav>
        {open && <div className="glass mx-4 mb-3 rounded-xl p-4 md:hidden">{["Accueil","Produits","Services","Livraison","Avis","Contact"].map((m)=><a key={m} href={`#${m.toLowerCase()}`} onClick={()=>setOpen(false)} className="block py-2 text-sm text-white/90">{m}</a>)}</div>}
      </header>

      <section id="accueil" className="relative overflow-hidden px-4 pb-24 pt-36 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Votre univers Gaming & Informatique à Mostaganem</h1>
            <p className="mt-5 max-w-xl text-white/75">Jeux PlayStation, accessoires gaming, équipements PC et livraison partout en Algérie.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#produits" className="rounded-full border border-neon/50 px-6 py-3 text-sm hover:shadow-neon">Voir les produits</a>
              <Link href={whatsapp} className="rounded-full bg-neon px-6 py-3 text-sm font-medium">Commander sur WhatsApp</Link>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} transition={{duration:0.8}} className="glass relative rounded-3xl p-3 shadow-neon">
            <Image src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=80" alt="Setup gaming" width={800} height={500} className="h-[320px] w-full rounded-2xl object-cover"/>
          </motion.div>
        </div>
      </section>

      <section id="produits" className="mx-auto max-w-7xl px-4 py-16 md:px-8"><h2 className="section-title">Catégories principales</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{categories.map(([title,desc,Icon])=><motion.article whileHover={{y:-6}} key={title} className="glass rounded-2xl p-5 hover:border-neon/60 hover:shadow-neon"><Icon className="mb-4 text-neon"/><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm text-white/70">{desc}</p></motion.article>)}</div></section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8"><h2 className="section-title">Produits vedettes</h2><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featured.map((name)=> <article key={name} className="glass rounded-2xl p-4"><div className="mb-4 grid h-40 place-content-center rounded-xl bg-gradient-to-br from-white/10 to-white/0"><span className="text-white/40">Image produit</span></div><h3 className="font-medium">{name}</h3><p className="text-sm text-white/60">Gaming / Informatique</p><p className="mt-2 text-neon">Prix sur demande</p><Link href={whatsapp} className="mt-4 inline-flex items-center gap-2 rounded-full border border-neon/60 px-4 py-2 text-sm"><MessageCircle size={16}/>Commander</Link></article>)}</div></section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:px-8"><h2 className="section-title">Pourquoi choisir Catech+ ?</h2><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{serviceHighlights.map(({ text, icon: Icon })=> <div key={text} className="glass rounded-2xl p-5"><Icon className="text-neon"/><p className="mt-3 text-sm">{text}</p></div>)}</div></section>

      <section id="livraison" className="mx-auto max-w-7xl px-4 py-10 md:px-8"><div className="grid gap-4 rounded-2xl border border-white/10 bg-panel/60 p-6 text-center sm:grid-cols-2 lg:grid-cols-4">{[["+500","Clients satisfaits"],["+100","Produits disponibles"],["48","Wilayas livrées"],["Support","Rapide"]].map(([n,l])=><motion.div key={String(l)} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><p className="text-3xl font-bold text-neon">{n}</p><p className="text-sm text-white/70">{l}</p></motion.div>)}</div></section>

      <section className="overflow-hidden py-14"><motion.div animate={{x:[0,-700]}} transition={{repeat:Infinity,duration:18,ease:"linear"}} className="flex w-max gap-12 text-white/60">{["PlayStation","Xbox","Nintendo","Logitech","Razer","MSI","ASUS","HP","Lenovo","PlayStation","Xbox","Nintendo"].map((b,i)=><span key={`${b}${i}`} className="text-xl">{b}</span>)}</motion.div></section>

      <section id="avis" className="mx-auto max-w-7xl px-4 py-16 md:px-8"><h2 className="section-title">Ils nous font confiance</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{["Service sérieux, commande reçue rapidement à Oran.","Très bons conseils pour choisir mon casque gaming.","Prix corrects et livraison jusqu’à Sétif sans souci."].map((t,i)=><div key={i} className="glass rounded-2xl p-5"><p className="text-sm text-white/85">“{t}”</p><p className="mt-3 text-xs text-white/50">Client {i+1} • Algérie</p></div>)}</div></section>

      <section id="contact" className="mx-auto max-w-7xl px-4 pb-20 md:px-8"><div className="glass rounded-3xl p-8 text-center"><h2 className="text-2xl font-semibold">Prêt à améliorer votre setup gaming ?</h2><p className="mt-2 text-white/70">Contactez-nous et recevez une réponse rapide.</p><Link href={whatsapp} className="mt-6 inline-flex rounded-full bg-neon px-6 py-3 font-medium">Commander via WhatsApp</Link></div></section>

      <footer className="border-t border-white/10 px-4 py-10 text-sm text-white/65 md:px-8"><div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4"><div><p className="font-semibold text-white">Catech+</p><p className="mt-2">Gaming & Informatique premium pour passionnés de tech.</p></div><p>Mostaganem, Algérie</p><p>Livraison : Partout en Algérie</p><Link href={whatsapp}>WhatsApp</Link></div><p className="mx-auto mt-6 max-w-7xl text-xs">© {new Date().getFullYear()} Catech+ — Tous droits réservés.</p></footer>
    </main>
  );
}
