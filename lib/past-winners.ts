import type { LucideIcon } from "lucide-react";
import {
  Atom,
  Award,
  Bot,
  Brain,
  Globe,
  GraduationCap,
  Handshake,
  HeartPulse,
  Leaf,
  PenTool,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Wallet,
} from "lucide-react";

export type Winner = {
  title: string;
  description: string;
  name: string;
  picture?: string;
  winners: string;
  icon: LucideIcon;
};

export type WinnersYear = {
  year: number;
  headline: string;
  description: string;
  accent: {
    primary: string;
    secondary: string;
  };
  winners: Winner[];
};

export const pastWinners: WinnersYear[] = [
  {
    year: 2025,
    headline: "HackTJ 12.0",
    description:
      "A sky themed palette set the stage for our 2025 expedition, spotlighting the teams that pushed to new horizons.",
    accent: {
      primary: "#83BDEC",
      secondary: "#A7D0F1",
    },
    winners: [
      {
        title: "Best Overall Hack",
        description:
          "AlgoRhythm gives beginner songwriters an AI-powered studio where melodies become complete arrangements in seconds.",
        name: "AlgoRhythm",
        picture: "/pastwinners/2025/overall2025winner.jpg",
        winners: "Abraham Agbota, Ryan Ghimire, Justin Ma, Arjun Babla",
        icon: Award,
      },
      {
        title: "Best Mobile Hack",
        description:
          "SearchParty lets communities coordinate missing-person searches with live location sharing, task assignment, and heatmaps.",
        name: "SearchParty",
        picture: "/pastwinners/2025/mobile2025winner.jpg",
        winners: "Aryan Gadre, Kanishk Sivanandam, Chetan Maviti, Adarsh Bharadwaj",
        icon: Smartphone,
      },
      {
        title: "Best AI/ML Hack",
        description:
          "SafeScape gives civilians and first responders a shared AR-enabled map for navigation, reporting, and rapid triage.",
        name: "SafeScape",
        picture: "/pastwinners/2025/aiml2025winner.jpg",
        winners: "Ansh Malhotra, Nivaan Kaushal, Pratham Singh, Armaan Ahmed",
        icon: Brain,
      },
      {
        title: "Best Web Hack",
        description:
          "QuantumFold accelerates protein modeling by blending quantum computing with AlphaFold's accuracy.",
        name: "QuantumFold",
        picture: "/pastwinners/2025/web2025winner.jpg",
        winners: "Deven Hagen, Justin Lee, Alan Zhu",
        icon: Globe,
      },
      {
        title: "Best Quantum Hack",
        description:
          "Quantum Enhanced MRI Diagnostics highlights regions of interest in scans using edge detection and amplitude encoding.",
        name: "Quantum Enhanced MRI Diagnostics",
        picture: "/pastwinners/2025/quantum2025winner.jpg",
        winners: "Kashi Kamat, Sarvani Vemuri, Surbhi Singla",
        icon: Atom,
      },
      {
        title: "Best Finance Hack",
        description:
          "Circa turns bartering into a seamless on-chain experience so communities can lend, rent, and swap safely.",
        name: "Circa",
        picture: "/pastwinners/2025/finance2025winner.jpg",
        winners: "Maneesh Vaddi, Agastya Sondhi, Arjun Chitla, Adhiraj Chhoda",
        icon: Wallet,
      },
      {
        title: "Best Lifestyle Hack",
        description:
          "PinPoint slices long-form video into just the clips you care about with semantic search and time-stamped recall.",
        name: "PinPoint",
        picture: "/pastwinners/2025/lifestyle2025winner.jpg",
        winners: "Soham Jain, Shaurya Jain, Anmol Karan, Jason Hao",
        icon: Sun,
      },
      {
        title: "Best Cyber Technology Hack",
        description:
          "DeepShield is a browser extension that checks every frame for deepfakes directly on the page you're viewing.",
        name: "DeepShield",
        picture: "/pastwinners/2025/cyber2025winner.JPG",
        winners: "Rohan Honganoor, Amogh Katiki, Andrew Chen, Jayden Yang",
        icon: ShieldCheck,
      },
      {
        title: "Best Biomedical Hack",
        description:
          "RDD listens for tuberculosis markers and spots Parkinson's tremors to bring early diagnosis to any clinic.",
        name: "RDD: Respiratory Disease Detection",
        picture: "/pastwinners/2025/biomed2025winner.jpg",
        winners: "Luv, Anush, Sanjeev, Saatvik",
        icon: HeartPulse,
      },
      {
        title: "Best Environmental Science Hack",
        description:
          "Retro Rower gamifies trash clean-up with a rowing simulator where players draft the most sustainable crew.",
        name: "Retro Rower",
        picture: "/pastwinners/2025/env2025winner.jpg",
        winners: "Darwin Goldstein, Daniil Prokofev, Christoph Knaeble",
        icon: Leaf,
      },
      {
        title: "Best Beginner Hack",
        description:
          "AP Romance personifies AP classes to make course exploration playful and far less intimidating.",
        name: "AP Romance",
        picture: "/pastwinners/2025/beginner2025winner.jpg",
        winners: "Nathalie Hatchuel, Sohana Bahl, Fay Amirullah",
        icon: Sparkles,
      },
      {
        title: "Best Use of ROAM AI Agent",
        description:
          "CyberGuard searches the public web for leaked credentials, validates them on-chain, and advises next steps.",
        name: "CyberGuard",
        picture: "/pastwinners/2025/roam2025winner.JPG",
        winners: "Shiv Davay, Aahan Sachdeva, Parthiv Maddipatla, Svaran Medavarapu",
        icon: Bot,
      },
      {
        title: "Vishnu Murthy Foundation Best Social Impact",
        description:
          "Jot It transforms handwritten prescriptions so pharmacists never have to guess at dosage again.",
        name: "Jot It",
        picture: "/pastwinners/2025/social2025winner.jpg",
        winners: "Sophia Huang, Jacob Dipasupil, Avery Li, Ipek Sayar",
        icon: Handshake,
      },
    ],
  },
  {
    year: 2024,
    headline: "HackTJ 11.0",
    description:
      "From pose-aware cameras to carbon trackers, the 2024 cohort proved just how broad student innovation can be.",
    accent: {
      primary: "#d1aefd",
      secondary: "#e7d2ff",
    },
    winners: [
      {
        title: "Best Overall Hack",
        description:
          "WatchDog detects falls, fires, and sudden medical events, alerting loved ones instantly.",
        name: "WatchDog",
        picture: "/pastwinners/2024/BestOverallHack.jpg",
        winners: "Shaurya Jain, Arjun Babla, Anmol Karan, Ajith Sivakumar",
        icon: Award,
      },
      {
        title: "Best AI/ML Hack",
        description:
          "Nutrium reads receipts or photos and turns them into recipes along with calorie guidance.",
        name: "Nutrium",
        picture: "/pastwinners/2024/BestAIMLHack.jpg",
        winners: "Michael Rodriguez, Ryan Ghimire, Syed Raza Haider",
        icon: Brain,
      },
      {
        title: "Best Web Hack",
        description:
          "WeCode blends challenges, competitions, and learning resources into one collaborative dev hub.",
        name: "WeCode",
        picture: "/pastwinners/2024/BestWebHack.jpg",
        winners: "Drew Zauel, Nikhit Rachapudi, Max Weinstein, Eshwar Moorthy",
        icon: Globe,
      },
      {
        title: "Best Finance Hack",
        description:
          "Credit Score Simulator forecasts credit trajectories and offers hyper-personalized tips.",
        name: "Credit Score Simulator",
        picture: "/pastwinners/2024/BestFinanceHack.jpg",
        winners: "Anika Saraf, Sahil Kapadia, Angelina Richter, Alina Chen",
        icon: Wallet,
      },
      {
        title: "Best Mobile Hack",
        description:
          "Bites forecasts credit health on the go and explains how to improve it.",
        name: "Bites",
        picture: "/pastwinners/2024/BestMobileHack.jpg",
        winners: "Arvind Ragunathan, Brij Baghat, Rohan Kalahasty",
        icon: Smartphone,
      },
      {
        title: "Best Beginner Hack",
        description:
          "Speaksearch pairs speech recognition with head tracking so anyone can browse hands-free.",
        name: "Speaksearch",
        picture: "/pastwinners/2024/BestBeginnerHack.jpg",
        winners: "Adhiraj Chhoda, Prateek Vadde",
        icon: Sparkles,
      },
      {
        title: "Best Design Hack",
        description:
          "FIN reimagines stock discovery with a swipe-first interface inspired by consumer apps.",
        name: "Fin",
        winners: "Nivaan Kaushal, Pratham Singh, Armaan Ahmed, Ansh Malhotra",
        icon: PenTool,
      },
      {
        title: "Best Biomedical Hack",
        description:
          "Helping Hearts offers an accessible, non-invasive way to monitor hypertension from home.",
        name: "Helping Hearts",
        winners: "Ojas Chaudhary, Noah Kabiri, Alex Nassif, Phong Lam",
        icon: HeartPulse,
      },
      {
        title: "Best Education Hack",
        description:
          "IntegriKey analyzes typing patterns to spot when students pivot from coursework to gaming.",
        name: "IntegriKey",
        winners: "Aneesh Kalla, Abhikurupati",
        icon: GraduationCap,
      },
      {
        title: "Best Environmental Science Hack",
        description:
          "Your Carbon Foot uses NLP to estimate emissions and suggest greener routines.",
        name: "Your Carbon Foot",
        winners: "Maneesh Vaddi, Kevin Su, Rishab Nanduri",
        icon: Leaf,
      },
      {
        title: "Best Cyber Technology Hack",
        description:
          "Vigilant combines AI object detection with broadcast alerts to mobilize Amber-style responses.",
        name: "Vigilant",
        winners: "Deven Hagen, Justin Lee, Alan Zhu",
        icon: ShieldCheck,
      },
      {
        title: "Best Quantum Hack",
        description:
          "Implementing a Pathfinding Heuristic optimizes signal pathways for more targeted cancer treatments.",
        name: "Implementing a Pathfinding Heuristic",
        winners: "Neha Chandran, Kade Yen, Enerel Munkhbaatar",
        icon: Atom,
      },
      {
        title: "Best Social Impact Hack",
        description:
          "Look N Go merges voice and head control so people with motor impairments can browse freely.",
        name: "Look N Go",
        winners: "Anurag Perakalapudi, Arnav Gupta, Adarsh Bharadwaj",
        icon: Handshake,
      },
      {
        title: "Best Lifestyle Hack",
        description:
          "Cider distills long documents into event timelines using a large language model.",
        name: "Cider",
        winners: "Ray Shen, Ken Zhou",
        icon: Sun,
      },
    ],
  },
];
