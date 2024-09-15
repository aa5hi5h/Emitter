import lz from "lzutf8";

const templateStructure = {
    ROOT: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: true,
      props: {
        backgroundColor: "#ffffff",
        padding: "20px"
      },
      displayName: "Root",
      custom: {},
      hidden: false,
      nodes: ["Header", "HeroSection", "FeaturesSection", "CTASection", "Footer"],
      linkedNodes: {}
    },
    Header: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 0"
      },
      displayName: "Header",
      custom: {},
      hidden: false,
      nodes: ["Logo", "Navigation"],
      linkedNodes: {}
    },
    Logo: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "StartupName",
        fontSize: 24,
        fontWeight: "bold",
        color: "#333333"
      }
    },
    Navigation: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        gap: "20px"
      },
      nodes: ["NavItem1", "NavItem2", "NavItem3"],
      linkedNodes: {}
    },
    NavItem1: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Home",
        fontSize: 16,
        color: "#333333"
      }
    },
    NavItem2: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Features",
        fontSize: 16,
        color: "#333333"
      }
    },
    NavItem3: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Contact",
        fontSize: 16,
        color: "#333333"
      }
    },
    HeroSection: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 0",
        backgroundColor: "#f0f4f8"
      },
      displayName: "Hero Section",
      nodes: ["HeroTitle", "HeroSubtitle", "HeroCTA"],
      linkedNodes: {}
    },
    HeroTitle: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Welcome to Our Startup",
        fontSize: 48,
        fontWeight: "bold",
        color: "#1a202c",
        textAlign: "center",
        marginBottom: "20px"
      }
    },
    HeroSubtitle: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "We're revolutionizing the way you do business",
        fontSize: 24,
        color: "#4a5568",
        textAlign: "center",
        marginBottom: "40px"
      }
    },
    HeroCTA: {
      type: {
        resolvedName: "Button"
      },
      props: {
        text: "Get Started",
        backgroundColor: "#4299e1",
        color: "#ffffff",
        padding: "12px 24px",
        fontSize: 18,
        borderRadius: "4px"
      }
    },
    FeaturesSection: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        justifyContent: "space-around",
        padding: "100px 0"
      },
      displayName: "Features Section",
      nodes: ["Feature1", "Feature2", "Feature3"],
      linkedNodes: {}
    },
    Feature1: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "300px"
      },
      nodes: ["FeatureIcon1", "FeatureTitle1", "FeatureDescription1"],
      linkedNodes: {}
    },
    FeatureIcon1: {
      type: {
        resolvedName: "Image"
      },
      props: {
        src: "/api/placeholder/48/48",
        width: 48,
        height: 48,
        marginBottom: "20px"
      }
    },
    FeatureTitle1: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Easy to Use",
        fontSize: 24,
        fontWeight: "bold",
        color: "#2d3748",
        marginBottom: "10px"
      }
    },
    FeatureDescription1: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Our platform is designed with simplicity in mind, making it easy for anyone to get started.",
        fontSize: 16,
        color: "#4a5568",
        textAlign: "center"
      }
    },
    Feature2: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "300px"
      },
      nodes: ["FeatureIcon2", "FeatureTitle2", "FeatureDescription2"],
      linkedNodes: {}
    },
    FeatureIcon2: {
      type: {
        resolvedName: "Image"
      },
      props: {
        src: "/api/placeholder/48/48",
        width: 48,
        height: 48,
        marginBottom: "20px"
      }
    },
    FeatureTitle2: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Powerful Analytics",
        fontSize: 24,
        fontWeight: "bold",
        color: "#2d3748",
        marginBottom: "10px"
      }
    },
    FeatureDescription2: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Gain valuable insights with our advanced analytics tools and make data-driven decisions.",
        fontSize: 16,
        color: "#4a5568",
        textAlign: "center"
      }
    },
    Feature3: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "300px"
      },
      nodes: ["FeatureIcon3", "FeatureTitle3", "FeatureDescription3"],
      linkedNodes: {}
    },
    FeatureIcon3: {
      type: {
        resolvedName: "Image"
      },
      props: {
        src: "/api/placeholder/48/48",
        width: 48,
        height: 48,
        marginBottom: "20px"
      }
    },
    FeatureTitle3: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "24/7 Support",
        fontSize: 24,
        fontWeight: "bold",
        color: "#2d3748",
        marginBottom: "10px"
      }
    },
    FeatureDescription3: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Our dedicated support team is always available to help you with any questions or issues.",
        fontSize: 16,
        color: "#4a5568",
        textAlign: "center"
      }
    },
    CTASection: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "100px 0",
        backgroundColor: "#ebf8ff"
      },
      displayName: "CTA Section",
      nodes: ["CTATitle", "CTASubtitle", "CTAButton"],
      linkedNodes: {}
    },
    CTATitle: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Ready to Get Started?",
        fontSize: 36,
        fontWeight: "bold",
        color: "#2c5282",
        marginBottom: "20px"
      }
    },
    CTASubtitle: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Join thousands of satisfied customers and take your business to the next level.",
        fontSize: 18,
        color: "#2a4365",
        textAlign: "center",
        marginBottom: "40px",
        maxWidth: "600px"
      }
    },
    CTAButton: {
      type: {
        resolvedName: "Button"
      },
      props: {
        text: "Sign Up Now",
        backgroundColor: "#4299e1",
        color: "#ffffff",
        padding: "12px 24px",
        fontSize: 18,
        borderRadius: "4px"
      }
    },
    Footer: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 0",
        backgroundColor: "#2d3748"
      },
      displayName: "Footer",
      nodes: ["FooterLogo", "FooterLinks", "FooterCopyright"],
      linkedNodes: {}
    },
    FooterLogo: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "StartupName",
        fontSize: 20,
        fontWeight: "bold",
        color: "#ffffff"
      }
    },
    FooterLinks: {
      type: {
        resolvedName: "Container"
      },
      isCanvas: false,
      props: {
        display: "flex",
        gap: "20px"
      },
      nodes: ["FooterLink1", "FooterLink2", "FooterLink3"],
      linkedNodes: {}
    },
    FooterLink1: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Privacy Policy",
        fontSize: 14,
        color: "#a0aec0"
      }
    },
    FooterLink2: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Terms of Service",
        fontSize: 14,
        color: "#a0aec0"
      }
    },
    FooterLink3: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "Contact Us",
        fontSize: 14,
        color: "#a0aec0"
      }
    },
    FooterCopyright: {
      type: {
        resolvedName: "Text"
      },
      props: {
        text: "© 2024 StartupName. All rights reserved.",
        fontSize: 14,
        color: "#a0aec0"
      }
    }
  };


  const stateString = JSON.stringify(templateStructure);
const compressedState = lz.encodeBase64(lz.compress(stateString));