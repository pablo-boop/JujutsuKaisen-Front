import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from './parallax.module.css'

const Parallax = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
    const constraintsRef = useRef(null)

    return (
        <div className={styles.div} ref={ref}>
            {/*motion.img para a imagem se mover*/}
            <motion.img
                ref={constraintsRef}
                src={'/gojoFlying.png'} 
                alt="gojo" 
                style={{ y: textY }} 
                className={styles.gojo} 
                drag
                dragConstraints={constraintsRef}
            />
            {/*motion.div para cobrir a imagem com o scroll*/}
            <motion.div className={styles.bg} style={
                {
                    backgroundImage: `url(/Shibuya.webp)`,
                    backgroundPosition: "bottom",
                    backgroundSize: "cover",
                    y: backgroundY
                }
            }>
            </motion.div>
        </div>
    )
}

export default Parallax