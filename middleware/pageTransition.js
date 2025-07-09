// export default defineNuxtRouteMiddleware(async (to, from) => {
//   if (from.path === "/" && process.client) {
//     // Get the GSAP instance
//     const gsap = await import("gsap").then((m) => m.default || m);

//     // Create a promise that resolves when animation completes
//     await new Promise((resolve) => {
//       const exitTl = gsap.timeline({
//         onComplete: resolve,
//       });

//       // Add your exit animations here
//       exitTl.to(".page-title .char", {
//         y: "100%",
//         opacity: 0,
//         duration: 0.5,
//         stagger: -0.02,
//         ease: "power2.in",
//       });

//       // Add more animations as needed

//       // Final fade out
//       exitTl.to(
//         "body",
//         {
//           backgroundColor: "#E6E3DC",
//           duration: 0.5,
//         },
//         "-=0.2"
//       );
//     });
//   }
// });
