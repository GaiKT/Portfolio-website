export const containerVariantTop = {
  hidden: { opacity: 0, y: 50 },
  visible: {
      opacity: 1,
      y: 0,
      transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 1,
          delayChildren: 0.3,
          staggerChildren: 0.2,
      },
  },
};

export const containerVariantBottom = {
  hidden: { opacity: 0, y: -50 },
  visible: {
      opacity: 1,
      y: 0,
      transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 1,
          delayChildren: 0.3,
          staggerChildren: 0.2,
      },
  },
};

export const containerVariantRight = {
  hidden: { opacity: 0, x: 50 }, // Change X to x
  visible: {
      opacity: 1,
      x: 0, // Change X to x
      transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 1,
          delayChildren: 0.3,
          staggerChildren: 0.2,
      },
  },
};

export const containerVariantLeft = {
  hidden: { opacity: 0, x: -50 }, // Change X to x
  visible: {
      opacity: 1,
      x: 0, // Change X to x
      transition: {
          type: 'spring',
          stiffness: 300,
          damping: 30,
          duration: 1,
          delayChildren: 0.3,
          staggerChildren: 0.2,
      },
  },
};

export const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

