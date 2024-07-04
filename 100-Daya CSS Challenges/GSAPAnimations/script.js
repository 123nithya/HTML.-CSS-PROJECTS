//Animation - 01

// Select the box element
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");

// Create a GSAP tween

gsap.from(box1, {
  duration: 2,
  x: -300,
  backgroundColor: "red",
  borderRadius: "50%",
  ease: "power1,inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to(box1, {
  duration: 2, // Duration of the animation in seconds
  x: 300, // Move the box 300 pixels to the right
  backgroundColor: "green", // Change the background color
  borderRadius: "50%", // Make the box a circle
  ease: "power1.inOut", // Easing function for a smooth animation
  repeat: -1, // Repeat the animation infinitely
  yoyo: true, // Reverse the animation after each repeat
});

gsap.from(box2, {
  duration: 2,
  x: -300,
  backgroundColor: "red",
  borderRadius: "50%",
  ease: "power1,inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to(box2, {
  duration: 2, // Duration of the animation in seconds
  x: 300, // Move the box 300 pixels to the right
  backgroundColor: "green", // Change the background color
  borderRadius: "50%", // Make the box a circle
  ease: "power1.inOut", // Easing function for a smooth animation
  repeat: -1, // Repeat the animation infinitely
  yoyo: true, // Reverse the animation after each repeat
});

gsap.from(box3, {
  duration: 2,
  x: -300,
  backgroundColor: "red",
  borderRadius: "50%",
  ease: "power1,inOut",
  repeat: -1,
  yoyo: true,
});

gsap.to(box3, {
  duration: 2, // Duration of the animation in seconds
  x: 300, // Move the box 300 pixels to the right
  backgroundColor: "green", // Change the background color
  borderRadius: "50%", // Make the box a circle
  ease: "power1.inOut", // Easing function for a smooth animation
  repeat: -1, // Repeat the animation infinitely
  yoyo: true, // Reverse the animation after each repeat
});

// Animation - 02

// // Select the box element
// const box = document.querySelector('.box1');

// // Create a GSAP timeline for sequence animations
// const timeline = gsap.timeline({ repeat: -1, yoyo: true });

// // Add animations to the timeline
// timeline
//   .from(box, {
//     duration: 1,
//     x: -300,
//     backgroundColor: 'red',
//     borderRadius: '50%',
//     ease: 'power1.inOut',
//   })
//   .to(box, {
//     duration: 1,
//     x: 300,
//     backgroundColor: 'green',
//     borderRadius: '50%',
//     ease: 'power1.inOut',
//   })
//   .to(box, {
//     duration: 0.5,
//     scale: 1.5,
//     rotation: 360,
//     ease: 'back.inOut',
//   })
//   .to(box, {
//     duration: 0.5,
//     scale: 1,
//     rotation: 0,
//     ease: 'back.inOut',
//   })
//   .to(box, {
//     duration: 1,
//     opacity: 0.5,
//     ease: 'power1.inOut',
//   })
//   .to(box, {
//     duration: 1,
//     opacity: 1,
//     ease: 'power1.inOut',
//   });
