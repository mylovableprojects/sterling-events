/**
 * Framer Motion variants shared by the home `Hero` and event heroes
 * so entrance timing stays consistent site-wide.
 */
export const heroHeadlineStagger = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 + i * 0.12,
      duration: 0.6,
      ease: "easeOut" as const,
    },
  }),
};
