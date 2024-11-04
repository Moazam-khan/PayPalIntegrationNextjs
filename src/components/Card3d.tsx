"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";


export default function CardList() {
    const cardData = [
      {
        id: 1,
        title: "Make things float in air",
        description: "Hover over this card to unleash the power of CSS perspective",
        image: "/assets/hero/imgb.jpg",
        link: "https://twitter.com/mannupaaji",
      },
      {
        id: 2,
        title: "Explore the Desert",
        description: "Experience the thrill of a desert safari ride and feel the adventure!",
        image: "/assets/hero/imga.jpg",
        link: "https://twitter.com/mannupaaji",
      },
      {
        id: 3,
        title: "Stargazing Experience",
        description: "Join us for a night under the stars in the beautiful desert.",
        image: "/assets/hero/imgs.jpg",
        link: "https://twitter.com/mannupaaji",
      },
      {
        id: 3,
        title: "Stargazing Experience",
        description: "Join us for a night under the stars in the beautiful desert.",
        image: "/assets/hero/imgs.jpg",
        link: "https://twitter.com/mannupaaji",
      },
      {
        id: 3,
        title: "Stargazing Experience",
        description: "Join us for a night under the stars in the beautiful desert.",
        image: "/assets/hero/imgs.jpg",
        link: "https://twitter.com/mannupaaji",
      },
      {
        id: 3,
        title: "Stargazing Experience",
        description: "Join us for a night under the stars in the beautiful desert.",
        image: "/assets/hero/imgs.jpg",
        link: "https://twitter.com/mannupaaji",
      },

    ];
  
    return (
        <div className="min-h-screen bg-white py-20 ">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold text-black">
          All Rides ({cardData.length})
        </h1>
        <div className="grid grid-cols-1 flex items-start sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
          {cardData.map((card) => (
            <CardContainer key={card.id} className="inter-var flex flex-col ">
              <CardBody className="bg-gray-50  flex-grow group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-[0.1] w-full h-full rounded-xl p-6 border transition-transform duration-200 ease-in-out hover:scale-105">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {card.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {card.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={card.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={card.title}
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-4">
                  <CardItem
                    translateZ={20}
                    as={Link}
                    href={card.link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Sign up
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
      
      
    );
  }
  