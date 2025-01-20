"use client";
import { motion, useMotionValue, useTransform } from "motion/react";
import { type ReactNode, useState } from "react";

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
}: {
  children: ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } },
  ) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab size-full"
      style={{ x, y, rotateX, rotateY }}
      drag={true}
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

type CardData = { id: number; content: ReactNode };

export default function Stack({
  randomRotation = false,
  sensitivity = 180,
  cardsData,
  animationConfig = { stiffness: 260, damping: 20 },
  cardWidth = 210,
  cardHeight = 210,
}: {
  randomRotation?: boolean;
  sensitivity?: number;
  cardsData: CardData[];
  animationConfig?: { stiffness: number; damping: number };
  cardWidth?: number;
  cardHeight?: number;
}) {
  const [cards, setCards] = useState(cardsData);

  const sendToBack = (id: number | string) => {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((card) => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  return (
    <div
      className="relative"
      style={{
        perspective: 600,
        height: cardHeight,
        width: cardWidth,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation
          ? Math.random() * 10 - 5 // Random degree between -5 and 5
          : 0;

        return (
          <CardRotate
            key={card.id}
            onSendToBack={() => sendToBack(card.id)}
            sensitivity={sensitivity}
          >
            <motion.div
              className="absolute size-full overflow-hidden"
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: cardWidth,
                height: cardHeight,
              }}
            >
              {card.content}
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}
