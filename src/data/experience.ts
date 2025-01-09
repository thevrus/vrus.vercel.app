import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "Ecommerce",
    title: "Shopify",
    company: "FullStack",
    companyUrl: "https://www.dutch.com",
    description:
      "Diseño y desarrollo de una solución completa de eCommerce para Dutch Pet utilizando Shopify Storefront API y Admin API. Implementé integraciones avanzadas como ReCharge para suscripciones, y optimicé la experiencia de usuario a través de layouts y flujos pixel-perfect creados en colaboración con el equipo de diseño.",
    technologies: [
      "Shopify Storefront API",
      "Shopify Admin API",
      "Nuxt",
      "Node.JS",
      "Liquid",
      "Tailwind",
    ],
    logo: "/logos/shopify_glyph_white.svg",
  },
  {
    dates: "Saas",
    title: "PICPRESS",
    company: "Backend",
    companyUrl: "https://www.absoluteweb.com",
    description:
      "Desarrollo de una plataforma SaaS que permite a los usuarios personalizar y gestionar contenido visual para impresión. Implementé soluciones con Vue.js y BigCommerce para una experiencia interactiva y altamente funcional.",
    technologies: [
      "Vue",
      "Firebase"
    ],
    logo: "/logos/Firebase Realtime Database_Standalone logomark.svg",
  },
  {
    dates: "Template",
    title: "Custom Shopify Theme",
    company: "Frontend",
    companyUrl: "",
    description:
      "Creación de un tema personalizado para Shopify, optimizado para SEO y alto rendimiento. El proyecto incluyó diseño desde cero con Liquid y Tailwind CSS, priorizando la velocidad de carga y la usabilidad.",
    technologies: ["Shopify", "Liquid", "Tailwind CSS"],
    logo: "/logos/shopify_glyph_white.svg",
  },
  {
    dates: "Ecommerce",
    title: "Ecommerce API with Node.js",
    company: "Backend",
    companyUrl: "",
    description:
      "Desarrollo de un backend escalable para eCommerce que gestiona inventarios, autenticación de usuarios y procesamiento de pedidos. Implementado con Node.js, Express y MongoDB, con soporte para JWT para autenticación segura.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    logo: "/logos/nuxt.svg",
  },
  {
    dates: "Plugin",
    title: "WordPress Plugin for Subscriptions",
    company: "Backend",
    companyUrl: "",
    description:
      "Creación de un plugin para WordPress que permite la gestión de contenidos basados en suscripción, con planes personalizables e integración de pagos a través de Stripe.",
    technologies: ["WordPress", "PHP", "Stripe API"],
    logo: "/logos/wordpress.png",
  },
  {
    dates: "Saas",
    title: "Index Context",
    company: "Fullstack",
    companyUrl: "",
    description:
      "Diseño y desarrollo de una herramienta SaaS para gestionar informacion compleja de múltiples tiendas en tiempo real. Utilicé Next y Java para la sincronización y Tailwind CSS para una interfaz atractiva y funcional.",
    technologies: ["Next", "Java", "Tailwind CSS", "Openai"],
    logo: "/logos/nextjs-icon-dark-background.svg",
  },
  {
    dates: "CRM",
    title: "Nuxt Admin Dashboard",
    company: "Fullstack",
    companyUrl: "",
    description:
      "Desarrollo de un CRM basado en Nuxt con un panel de administración avanzado, que incluye visualizaciones de datos y gestión de usuarios. El backend fue construido con Node y MySQL, asegurando escalabilidad y rendimiento.",
    technologies: ["Nuxt", "Spring Boot", "MySQL", "Chart.js"],
    logo: "/logos/nuxt.svg",
  },
];
