// module.exports = {
//   content: [
//     './public//*.{html,js}',
//   ],
//   purge:[],
//    theme: {
//     extend: {
//       colors:{
//         primary: '#FF6363',
//         secondary:{
//           100:"#E2E2D5",
//           200:'#888883'
//         }
//       },
//     },
//   },
//   variants:{},
//   plugins: [],
// }


// tailwind.config.js
module.exports = {
  purge: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: "#E2E2D5",
          200: '#888883'
        }
      },
    },
  },
  variants: {},
  plugins: [],
}
