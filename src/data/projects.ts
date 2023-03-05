interface Project {
  id: number;
  title: string;
  projectDescription: string;
  sourceCodeLink: string | null;
  workInProgress: boolean;
  liveLink: string;
  projectImage: any;
}

export const projects: Project[]  = [
  {
    id: 1,
    title: "WindiKit",
    projectDescription:
      "WindiKit is a TailwindCSS UI component library that offers customizable and reusable components for modern, responsive web apps. With Stripe payment processing and Auth0 authentication integration, WindiKit provides a complete solution for secure and fast web development. (Work in progress)",
    sourceCodeLink: null,
    workInProgress: true,
    liveLink: "https://windikit.com/",
    projectImage: require("../assets/windikit-ss.png"),
  },
  {
    id: 2,
    title: "Ultraverse NFT Marketplace",
    projectDescription:
      "Ultraverse is a React-based mock-up NFT marketplace that provides a user-friendly platform for buying, selling, and trading NFTs. The platform is designed to showcase the features of a digital asset exchange platform and is focused on providing an intuitive and seamless user experience.",
    sourceCodeLink: "https://github.com/conradhunter/virtual-internship",
    workInProgress: false,
    liveLink: "https://virtual-internship-ultraverse.netlify.app/",
    projectImage: require("../assets/ultraverse-ss.png"),
  },
  {
    id: 3,
    title: "Mock E-commerce Site",
    projectDescription:
      "My React e-commerce site uses the SearchSpring API to let users search for products and view them in a paginated format. The site is fast and responsive, even with large data, and has a clean interface for easy navigation and purchases. SearchSpring API integration delivers accurate and relevant search results, making it a powerful online shopping tool.",
    sourceCodeLink: "https://github.com/conradhunter/mock-e-commerce",
    workInProgress: false,
    liveLink: "https://mock-ecommerce-searchspringapi.netlify.app/",
    projectImage: require("../assets/ecommerce-ss.png"),
  },
  {
    id: 4,
    title: "Password Generator",
    projectDescription:
      "My password generator lets users create secure passwords by selecting the length (4-60) and including uppercase letters, symbols, and numbers. Users can generate unique passwords that are difficult to crack, providing them with the peace of mind they need to keep their personal information safe.",
    sourceCodeLink: "https://github.com/conradhunter/Password-Generator",
    workInProgress: false,
    liveLink: "https://conradhunter.github.io/Password-Generator/",
    projectImage: require("../assets/password-generator-ss.png"),
  },
];
