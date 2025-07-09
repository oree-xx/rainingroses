import { gsap } from "gsap";

// Will hold our ScrollTrigger import
let ScrollTrigger: any;

// Initialize GSAP and ScrollTrigger
export const useGSAP = async () => {
  if (process.client) {
    ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
    gsap.registerPlugin(ScrollTrigger);
    return {
      gsap,
      ScrollTrigger,
    };
  }
  return {
    gsap,
    ScrollTrigger: null,
  };
};
