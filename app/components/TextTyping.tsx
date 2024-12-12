'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { LuTextCursor } from "react-icons/lu";

export default function TextTyping() {
    const texts = useMemo(() => ["Full-Stack", "Front-End", "Back-End"], []);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let index = 0;

        // Start displaying characters one by one
        const typeInterval = setInterval(() => {
            setDisplayText((prev) =>
                index === 0 ? 'F' : prev + texts[currentTextIndex][index - 1]
            );
            index++;

            // When the text is fully typed
            if (index === texts[currentTextIndex].length) {
                clearInterval(typeInterval);

                // Switch to the next text after a delay
                setTimeout(() => {
                    setDisplayText("");
                    setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
                }, 3000); // Wait 3 seconds before the next text
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [currentTextIndex, texts]);

    return (
        <motion.p
            className="text-7xl font-extrabold text-secondary flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
        >
            {displayText.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                >
                    {char}
                </motion.span>
            ))}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                    delay: 1,
                    duration: 1,
                    repeat: Infinity,
                }}
                className="text-7xl text-black font-extralight"
            >
                <LuTextCursor />
            </motion.span>
        </motion.p>
    );
}
