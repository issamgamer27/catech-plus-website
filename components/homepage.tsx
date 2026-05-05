"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  ChevronDown,
  Cpu,
  CreditCard,
  Gamepad2,
  Headphones,
  Heart,
  Laptop,
  Menu,
  MessageCircle,
  Monitor,
  Mouse,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  User,
  X,
  Zap,
  HardDrive,
  MemoryStick,
  CircuitBoard,
  Joystick,
  Gift,
  Keyboard
} from "lucide-react";

type Category = { name: string; icon: LucideIcon };
type Product = {
  name: string;
  category: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  image: string;
  icon: LucideIcon;
};

const whatsapp = "https://wa.me/213XXXXXXXXX";
const phone = "+213 XX XX XX XX";

const categories: Category[] = [
  { name: "Processeurs", icon: Cpu },
  { name: "Cartes graphiques", icon: CircuitBoard },
  { name: "Cartes mères", icon: CircuitBoard },
  { name: "RAM", icon: MemoryStick },
  { name: "SSD & Stockage", icon: HardDrive },
  { name: "Écrans Gaming", icon: Monitor },
  { name: "Laptops", icon: Laptop },
  { name: "Manettes", icon: Joystick },
  { name: "Casques Gaming", icon: Headphones },
  { name: "Jeux PlayStation", icon: Gamepad2 }
];

const offers: Product[] = [
  { name: "PC Gamer Ryzen 5 RTX 3060", category: "PC Gamer", oldPrice: "226,700 DA", price: "223,700 DA", discount: "-1%", image: "/products/pc-gamer-1.png", icon: Cpu },
  { name: "PC Intel Ultra 5 RTX 5060 Ti", category: "PC Gamer", oldPrice: "400,000 DA", price: "389,700 DA", discount: "-3%", image: "/products/pc-gamer-2.png", icon: Cpu },
  { name: "Manette DualSense PS5", category: "Accessoires PlayStation", price: "18,900 DA", image: "/products/dualsense.png", icon: Gamepad2 },
  { name: "Casque Gaming RGB", category: "Accessoires Gaming", price: "7,900 DA", image: "/products/headset.png", icon: Headphones },
  { name: "Clavier Gaming RGB", category: "Accessoires Gaming", price: "6,500 DA", image: "/products/keyboard.png", icon: Keyboard },
  { name: "Souris Gaming Logitech", category: "Accessoires Gaming", price: "5,400 DA", image: "/products/mouse.png", icon: Mouse },
  { name: "SSD NVMe 1TB", category: "Stockage", price: "12,900 DA", image: "/products/ssd.png", icon: HardDrive },
  { name: "Jeu PlayStation 5", category: "Jeux PlayStation", price: "Prix sur demande", image: "/products/ps5-game.png", icon: Gift }
];

const nouveautes: Product[] = [
  { name: "Souris Logitech G102", category: "Accessoires Gaming", price: "4,900 DA", image: "/products/g102.png", icon: Mouse },
  { name: "Clavier mécanique RGB", category: "Accessoires Gaming", price: "9,500 DA", image: "/products/mechanical-kb.png", icon: Keyboard },
  { name: "Carte graphique GTX 1660", category: "Carte Graphique", price: "45,900 DA", image: "/products/gtx1660.png", icon: CircuitBoard },
  { name: "Carte mère B450", category: "Carte mère", price: "19,500 DA", image: "/products/b450.png", icon: CircuitBoard },
  { name: "Casque HyperX", category: "Audio Gaming", price: "13,900 DA", image: "/products/hyperx.png", icon: Headphones },
  { name: "Chargeur / accessoire PC", category: "Informatique", price: "2,800 DA", image: "/products/charger.png", icon: Zap }
];

const services = [
  { text: "Livraison 58 wilayas", icon: Truck },
  { text: "Paiement à la livraison", icon: CreditCard },
  { text: "Produits garantis", icon: ShieldCheck },
  { text: "Support rapide", icon: MessageCircle },
  { text: "Conseils pour choisir votre setup", icon: BadgeCheck }
] as const;

function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false);
  const Icon = product.icon;

  return (
    <motion.article whileHover={{ y: -6 }} className="group rounded-2xl border border-white/10 bg-[#16181f] p-4 shadow-xl shadow-black/30 transition">
      <div className="relative mb-4 grid h-44 place-content-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#1f2330] to-[#12141b]">
        {product.discount ? <span className="absolute left-3 top-3 rounded-md bg-red-600 px-2 py-1 text-xs font-semibold">{product.discount}</span> : null}
        {!imageError ? (
          <Image src={product.image} alt={product.name} width={240} height={160} className="h-32 w-auto object-contain" onError={() => setImageError(true)} />
        ) : (
          <div className="flex flex-col items-center gap-2 text-white/70">
            <Icon className="h-9 w-9 text-blue-400" />
            <span className="text-xs">Image produit</span>
          </div>
        )}
      </div>
      <p className="text-xs text-blue-300">{product.category}</p>
      <h3 className="mt-1 min-h-[48px] font-semibold text-white">{product.name}</h3>
      <div className="mt-2 flex items-end gap-2">
        {product.oldPrice ? <span className="text-sm text-white/40 line-through">{product.oldPrice}</span> : null}
        <span className="text-lg font-bold text-red-400">{product.price}</span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium transition hover:bg-blue-500">Ajouter au panier</button>
        <Link href={whatsapp} className="inline-flex items-center gap-1 rounded-lg border border-white/20 px-3 py-2 text-xs hover:border-green-400">
          <MessageCircle className="h-4 w-4" /> Commander
        </Link>
      </div>
    </motion.article>
  );
}

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [logoMissing, setLogoMissing] = useState(false);

  const navItems = useMemo(() => [
    { label: "Accueil", href: "#accueil" },
    { label: "Produits", href: "#offres" },
    { label: "PC Gamer", href: "#pc-gamer" },
    { label: "PlayStation", href: "#playstation" },
    { label: "Accessoires", href: "#accessoires" },
    { label: "Livraison", href: "#livraison" },
    { label: "Contact", href: "#contact" }
  ], []);

  return (
    <main className="bg-[#0b0d12] text-white">
      <div className="bg-gradient-to-r from-blue-700 to-red-600 px-4 py-2 text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <p>🔥 Offres Gaming exclusives cette semaine — Livraison disponible partout en Algérie</p>
          <button className="rounded-md bg-white/20 px-3 py-1 text-xs font-medium hover:bg-white/30">Voir les offres</button>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1117]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-4 lg:px-8">
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="menu">{mobileOpen ? <X /> : <Menu />}</button>
          <Link href="#accueil" className="shrink-0">
            {!logoMissing ? <Image src="/logo.png" alt="Catech+" width={170} height={44} className="h-11 w-auto object-contain" onError={() => setLogoMissing(true)} /> : <span className="text-2xl font-extrabold">CATECH<span className="text-red-500">+</span></span>}
          </Link>
          <div className="hidden flex-1 items-center rounded-xl border border-white/10 bg-[#1a1d27] px-4 py-3 md:flex">
            <Search className="mr-3 h-5 w-5 text-white/50" />
            <input className="w-full bg-transparent text-sm outline-none placeholder:text-white/40" placeholder="Rechercher un produit..." />
          </div>
          <div className="hidden text-right text-xs lg:block">
            <p className="text-white/60">Appelez-nous</p>
            <p className="font-semibold">{phone}</p>
          </div>
          <div className="ml-auto flex items-center gap-2 text-white/80">
            <button className="rounded-lg border border-white/10 p-2"><User className="h-5 w-5" /></button>
            <button className="rounded-lg border border-white/10 p-2"><Heart className="h-5 w-5" /></button>
            <button className="rounded-lg border border-white/10 p-2"><ShoppingCart className="h-5 w-5" /></button>
            <span className="hidden text-sm font-semibold md:inline">0.00 DA</span>
            <div className="hidden overflow-hidden rounded-lg border border-white/20 text-xs md:flex"><button className="bg-white/10 px-2 py-1">FR</button><button className="px-2 py-1">AR</button></div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#141722]">
          <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 lg:px-8">
            <button onClick={() => setShowCategories(!showCategories)} className="hidden items-center gap-2 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold lg:inline-flex">All Categories <ChevronDown className="h-4 w-4" /></button>
            <nav className="hidden gap-5 text-sm lg:flex">{navItems.map((item) => <a key={item.label} href={item.href} className="hover:text-blue-300">{item.label}</a>)}</nav>
          </div>
        </div>
      </header>

      {mobileOpen ? <div className="space-y-2 border-b border-white/10 bg-[#0f1117] px-4 py-3 lg:hidden">{navItems.map((item) => <a key={item.label} href={item.href} className="block rounded-md px-2 py-2 text-sm hover:bg-white/10">{item.label}</a>)}</div> : null}

      <section id="accueil" className="mx-auto grid max-w-7xl gap-4 px-4 py-6 lg:grid-cols-[260px_1fr] lg:px-8">
        {showCategories ? <aside className="hidden rounded-2xl border border-white/10 bg-[#141722] p-4 lg:block">{categories.map(({ name, icon: Icon }) => <button key={name} className="mb-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm hover:bg-white/10"><Icon className="h-4 w-4 text-blue-400" />{name}</button>)}</aside> : <div className="hidden lg:block" />}
        <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#1d2333] via-[#11131b] to-[#3a1016] p-8">
            <h1 className="max-w-md text-4xl font-extrabold">Boostez votre setup gaming</h1>
            <p className="mt-3 max-w-lg text-white/75">PC Gamer, jeux PlayStation, accessoires et composants disponibles chez Catech+</p>
            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold hover:bg-red-500">Découvrir maintenant <ArrowRight className="h-4 w-4" /></button>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
            {["Accessoires Gaming", "Jeux PlayStation", "PC & Laptops"].map((title) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#132238] to-[#18131f] p-4">
                <p className="text-sm text-white/70">Promo</p>
                <h3 className="mt-2 font-semibold">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <h2 className="text-2xl font-bold">Catégories populaires</h2>
        <div className="mt-4 grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{categories.map(({ name, icon: Icon }) => <motion.div key={name} whileHover={{ y: -4 }} className="rounded-xl border border-white/10 bg-[#151823] p-4"><Icon className="h-6 w-6 text-red-400" /><p className="mt-3 text-sm font-medium">{name}</p></motion.div>)}</div>
      </section>

      <section id="offres" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <h2 className="text-2xl font-bold">Les meilleures offres</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{offers.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section id="accessoires" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <h2 className="text-2xl font-bold">Nouveautés</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{nouveautes.map((product) => <ProductCard key={product.name} product={product} />)}</div>
      </section>

      <section id="livraison" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">{services.map(({ text, icon: Icon }) => <div key={text} className="rounded-xl border border-white/10 bg-[#161a26] p-4"><Icon className="h-5 w-5 text-blue-400" /><p className="mt-2 text-sm">{text}</p></div>)}</div>
      </section>

      <section id="pc-gamer" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-3xl border border-red-500/40 bg-gradient-to-r from-[#1a1e2c] to-[#2a1015] p-8 text-center">
          <h3 className="text-3xl font-bold">Besoin d’un PC Gamer sur mesure ?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/75">Décrivez votre budget et vos besoins, Catech+ vous aide à choisir la meilleure configuration.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3"><button className="rounded-lg bg-red-600 px-5 py-3 font-semibold hover:bg-red-500">Demander une configuration</button><Link href={whatsapp} className="rounded-lg border border-white/20 px-5 py-3 font-semibold hover:border-green-400">Contacter sur WhatsApp</Link></div>
        </div>
      </section>

      <section id="playstation" className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <h2 className="text-2xl font-bold">Ils parlent de Catech+</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {["Commande d’une RTX et livraison rapide à Oran. Boutique sérieuse.", "J’ai trouvé une excellente config gaming selon mon budget à Mostaganem.", "Service client réactif, manette PS5 originale et prix correct."].map((text, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-[#161a25] p-5">
              <p className="text-sm text-white/85">“{text}”</p>
              <p className="mt-3 text-xs text-white/50">Client Algérien #{i + 1}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="mt-8 border-t border-white/10 bg-[#0e1016]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-4 lg:px-8">
          <div><p className="text-xl font-bold">Catech<span className="text-red-500">+</span></p><p className="mt-2 text-sm text-white/70">Gaming & Informatique à Mostaganem. Vente de jeux, composants PC, accessoires et matériel high-tech avec livraison partout en Algérie.</p></div>
          <div><h4 className="font-semibold">Catégories</h4><ul className="mt-2 space-y-2 text-sm text-white/70"><li>PC Gamer</li><li>PlayStation</li><li>Accessoires</li><li>Stockage</li></ul></div>
          <div><h4 className="font-semibold">Contact</h4><ul className="mt-2 space-y-2 text-sm text-white/70"><li>Mostaganem, Algérie</li><li>{phone}</li><li>Livraison 58 wilayas</li></ul></div>
          <div><h4 className="font-semibold">Réseaux</h4><div className="mt-2 flex gap-2 text-sm"><span className="rounded bg-white/10 px-3 py-1">Facebook</span><span className="rounded bg-white/10 px-3 py-1">Instagram</span></div><Link href={whatsapp} className="mt-4 inline-flex rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold">WhatsApp</Link></div>
        </div>
        <p className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} Catech+ — Tous droits réservés.</p>
      </footer>
    </main>
  );
}
