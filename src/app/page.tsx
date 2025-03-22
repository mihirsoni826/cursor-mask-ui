"use client";

import useMousePosition from "@/utils/useMousePosition";
import styles from "./page.module.css";
import { motion } from "motion/react";
import { useState } from "react";

export default function Home() {
    const [isHovering, setIsHovering] = useState(false);
    const { x, y } = useMousePosition();
    const maskSize = isHovering ? 450 : 50; // as set in page.module.css

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <p>
                    <span className={styles.emphasis}>
                        The ancient art of blacksmithing
                    </span>{" "}
                    once shaped civilizations, forging mighty swords and
                    intricate armor. Today, it survives as a niche craft,
                    blending tradition with modern techniques. Sparks fly as
                    molten metal bends under expert hammer strikes, a dance of
                    fire and steel. Despite automation, human skill remains
                    irreplaceable in metalwork. ⚒️
                </p>
            </div>

            <motion.div
                className={styles.mask}
                animate={{
                    WebkitMaskPosition: `${x - maskSize / 2}px ${
                        y - maskSize / 2
                    }px`,
                    WebkitMaskSize: `${maskSize}px`,
                }}
                transition={{ type: "tween", ease: "backOut" }}
            >
                <p
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    A squirrel’s daily routine is pure chaos—chasing rivals,
                    burying nuts, then forgetting their locations. They embody
                    controlled panic, darting across roads like furry
                    daredevils. Scientists say they plant thousands of trees by
                    accident, proving that forgetfulness sometimes benefits
                    nature. So, appreciate them! 🐿️
                </p>
            </motion.div>
        </div>
    );
}
