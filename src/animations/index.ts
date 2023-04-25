const boxVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: '-50%' },
};

const boxDelayVariant = {
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  hidden: { opacity: 0, x: '-50%' },
};

const fadeInVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.7 },
};

const shakeVariant = {
  start: (i: number) => ({
    x: i % 2 === 0 ? [-0.5, 1.8, 0] : [0.5, -1.8, 0],
    y: i % 2 === 0 ? [-0.5, 1.8, 0] : [0.5, -1.8, 0],
    transition: {
      delay: 0.2,
      repeat: Infinity,
      duration: 0.8,
    },
  }),
};

export { boxVariant, boxDelayVariant, fadeInVariant, shakeVariant };
