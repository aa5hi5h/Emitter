export const landingPageTemplate = {
    nodes: {
      ROOT: {
        type: {
          resolvedName: 'Root'
        },
        isCanvas: true,
        props: {},
        displayName: 'Root',
        custom: {},
        hidden: false,
        nodes: ['header', 'hero', 'features', 'footer'],
        linkedNodes: {}
      },
      header: {
        type: {
          resolvedName: 'Header'
        },
        isCanvas: false,
        props: {
          backgroundColor: '#ffffff',
          logoUrl: 'https://via.placeholder.com/150x50',
          menuItems: ['Home', 'Features', 'Pricing', 'Contact']
        },
        displayName: 'Header',
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      hero: {
        type: {
          resolvedName: 'Hero'
        },
        isCanvas: true,
        props: {
          backgroundColor: '#f0f0f0',
          title: 'Welcome to Our Amazing Product',
          subtitle: 'Revolutionizing the way you build websites',
          ctaText: 'Get Started'
        },
        displayName: 'Hero',
        custom: {},
        hidden: false,
        nodes: ['heroImage'],
        linkedNodes: {}
      },
      heroImage: {
        type: {
          resolvedName: 'Image'
        },
        isCanvas: false,
        props: {
          src: 'https://via.placeholder.com/600x400',
          alt: 'Hero image'
        },
        displayName: 'Hero Image',
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      features: {
        type: {
          resolvedName: 'Features'
        },
        isCanvas: true,
        props: {
          title: 'Our Features',
          backgroundColor: '#ffffff'
        },
        displayName: 'Features',
        custom: {},
        hidden: false,
        nodes: ['feature1', 'feature2', 'feature3'],
        linkedNodes: {}
      },
      feature1: {
        type: {
          resolvedName: 'FeatureCard'
        },
        isCanvas: false,
        props: {
          title: 'Easy to Use',
          description: 'Our intuitive interface makes website building a breeze.',
          icon: 'easy'
        },
        displayName: 'Feature 1',
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      feature2: {
        type: {
          resolvedName: 'FeatureCard'
        },
        isCanvas: false,
        props: {
          title: 'Fully Customizable',
          description: 'Tailor every aspect of your website to your needs.',
          icon: 'customize'
        },
        displayName: 'Feature 2',
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      feature3: {
        type: {
          resolvedName: 'FeatureCard'
        },
        isCanvas: false,
        props: {
          title: 'Responsive Design',
          description: 'Your website will look great on any device.',
          icon: 'responsive'
        },
        displayName: 'Feature 3',
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {}
      },
      footer: {
        type: {
          resolvedName: 'Footer'
        },
        isCanvas: false,
        props: {
          backgroundColor: '#333333',
          textColor: '#ffffff',
          copyrightText: '© 2024 Your Company. All rights reserved.'
        },
        displayName: 'Footer',
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {}
      }
    },
    root: {
      type: 'ROOT',
      isCanvas: true
    }
  };
  
  // Compress the template for storage
  export const compressTemplate = () => {
    const stateString = JSON.stringify(landingPageTemplate);
    const compressedState = lz.encodeBase64(lz.compress(stateString));
    return compressedState;
  };
  
  // Function to decompress the template
 export  const decompressTemplate = (compressedState) => {
    const decompressedString = lz.decompress(lz.decodeBase64(compressedState));
    return JSON.parse(decompressedString);
  };
  
  // Usage example:
  // const compressedTemplate = compressTemplate();
  // console.log("Compressed template:", compressedTemplate);
  
  // To use in your project creation or updating:
  // const decompressedTemplate = decompressTemplate(compressedTemplate);
  // Use decompressedTemplate with Craft.js