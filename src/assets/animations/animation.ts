import { Variants } from "framer-motion"

export const animationTitle = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export const animationImage = {
  initial: { opacity: 0, x: -80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 1, delay: 0.4 }
}

export const animationDescription = {
  initial: { opacity: 0, y: 180 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.9 }
}

export const animationSocial = {
  initial: { opacity: 0, y: 40  },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 1.1 }
}

export const animationDrawable = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 0.4 }
}

export const getRandomRotation = () => {
  return Math.random() * (5 - (-5)) + (-5);
};

const getRandomYValues = () => {
  const startY = Math.random() * (10 - (10)) + (40);
  const endY = Math.random() * (10 - (10)) + (5);
  return [startY, endY];
};

const generateFloatIconVariants = (): Variants => ({
  initial: {
    y: getRandomYValues(),
    rotate: 16,
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatDelay: 0.2,
      repeatType: "mirror",
    },
  },
});

export const animationFloatIcon1 = generateFloatIconVariants();
export const animationFloatIcon2 = generateFloatIconVariants();

