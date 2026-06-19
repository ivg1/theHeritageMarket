import { motion } from "framer-motion";

export const Animations = {
    FloatUp8({ children, delay = 0 }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    FloatUp4({ children, delay = 0 }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    FloatUp2({ children, delay = 0 }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.2,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    FloatUp1sec({ children, delay = 0 }) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 1,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    SlideFromRight({ children, delay = 0 }) {
        return (
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    SlideFromLeft({ children, delay = 0.1 }) {
        return (
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.4,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
    Appear8({ children, delay = 0.1 }) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        );
    },
}

export default Animations;