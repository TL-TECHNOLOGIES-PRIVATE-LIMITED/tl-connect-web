import car_1 from '../img/severmonitoring.jpg';
import apm from '../img/apm.png';
import cls from '../img/cls.jpg';
import dm from '../img/dm.jpg';
import ServerDataMigration from '../img/cloud-computing-data-management-concept-min.jpg'
import sms from '../img/hm.jpg';
import tlservices from '../img/tlservice.jpg'
import ecommerce from '../img/mini-ecommerce.jpg'
import uiux from '../img/representation-user-experience-interface-design-min.jpg';
import socialmediammarketing from '../img/smm-banner_4x.png';
import dev from '../img/programming-background-collage-min-min.png';
import vedioEditor from '../img/video-editor-working-from-home-night-new-project-editing-audio-film-montage-sitting-modern-kitchen-content-creator-using-professional-laptop-modern-technology-network-wireless-min.jpg';
import customerSupport from '../img/Vertex-Outsourcing-Services-min.jpg'
import stusentmanagementsystem from '../img/studentmanagement.jpg'
import sg from '../Documents/TL-Server-Guard.pdf'
import eh from '../Documents/TL-Eduhub.pdf'
import cs from '../Documents/TL-Click-Share.pdf'
import tlbdp from '../Documents/TL-BEING-DIGITAL-PLANS.pdf'
import tlbdf from '../Documents/TL-BEING-DIGITAL-FEATURES.pdf'

export const documents = [
  { id: 1, name: 'TL SERVER GUARD ', file: sg },
  { id: 2, name: 'TL EDUHUB ', file: eh },
  { id: 3, name: 'TL CLICK SHARE ', file: cs },
  { id: 4, name: 'TL BEING DIGITAL (Features)', file: tlbdf },
  { id: 5, name: 'TL BEING DIGITAL (Plans)', file: tlbdp },
  { id: 6, name: 'TL SLOTIZE - AMS  ', file: null },
  { id: 6, name: 'TL EVERY HOME - mobile app ', file: null },
];

export const services = [
  {
    
    "image": car_1,
    "document":sg,
    "heading": "SERVER GUARD ",
    "Tagline": "Proactive Monitoring for Peak Performance.",
    "paragraph": "Our advanced Server Monitoring System ensures uninterrupted performance by delivering real-time insights into server health. It proactively alerts you to potential issues before they affect operations, and provides detailed reports to optimize performance. With our comprehensive monitoring solutions, you can stay ahead of downtime and maintain peak efficiency effortlessly."
  },
  {
    
    "image": stusentmanagementsystem,
    "document":eh,
    "heading": "EDUHUB - Student Management System ",
    "Tagline": "Simplify Enrollment & Track Progress Seamlessly. (Prototype)",
    "paragraph": "Our Student Management System simplifies enrollment, tracks student progress, and enables smooth communication between parents, students, and educational institutions. Each user has a dedicated login portal to manage applications, monitor checklists, and stay informed on their status. Additionally, Phase 2 will enhance the system with attendance tracking and full academic management."
  },
  {
    
    "image": sms,
    "document":null,
    "heading": "EVERY HOME (Mobile App)",
    "Tagline": "Connecting Homes, Professionals, & Businesses Seamlessly.",
    "paragraph": "Connecting Homes, Professionals, and Businesses. This revolutionary 3-in-1 app streamlines home management, professional networking, and task coordination. With features for scheduling maintenance, connecting with service providers, and managing tasks, it delivers a unified platform designed to enhance efficiency and productivity for all users."
  },
  {
    
    "image": dm,
    "document":tlbdf,
    "heading": "BEING DIGITAL (Digital Marketing)",
    "Tagline": "Elevate Your Brand with Cutting-Edge Digital Solutions.",
    "paragraph": "Empower your brand with cutting-edge digital marketing solutions that drive engagement and growth in the digital landscape. Our comprehensive services, including compelling content creation and online presence optimization, elevate your digital strategy. which integrates with WhatsApp and offers all-in-one functionality tailored to your business needs. Explore more at connect.tltechnologies.net."
  },
  {
    
    "image": cls,
    "document":cs,
    "heading": "CLICK SHARE (Social Media Scheduler)",
    "Tagline": "Master Your Social Media Effortlessly.",
    "paragraph": "CLICKSHARE is a powerful tool for managing multiple social media accounts from one platform. It offers scheduling, performance analysis, and audience engagement features. Enhance your social media strategy with its advanced social listening and campaign management capabilities."
  },
  {
    
    "image": ecommerce,
    "document":null,
    "heading": "Mini E-Commerce Website  ",
    "Tagline": "Launch, Sell, Advertise All in One with TL.",
    "paragraph": "Elevate your online store effortlessly with TL - Mini Ecommerce Website / Being Digital. Plus, enhance your reach with integrated social media campaigns across seven platforms, all from one comprehensive solution. Boost your digital presence and drive growth with TL’s all-in-one eCommerce and advertising solution."
  },
  {
    
    "image": apm,
    "document":null,
    "heading": "SLOTIZE (Appointment Management System) ",
    "Tagline": "Streamline Scheduling, Enhance Service.",
    "paragraph": "Streamline appointment scheduling and tracking effortlessly with our intuitive platform. Manage bookings, monitor financial growth through a comprehensive dashboard, and coordinate employee schedules efficiently. Enhance operational efficiency and deliver seamless service to both clients and staff."
  },
  {
    "image": tlservices,
   "document":null,

    "heading": "Comprehensive Digital Solutions ",
"Tagline" : "All Our Services",


    "paragraph": "TL provides comprehensive digital solutions to boost your business. We specialize in dynamic websites, advanced e-commerce platforms, custom ERP systems, and essential services like domain management and payment gateway integration. Our branding and marketing offerings include logo design, YouTube reels, and various promotional materials to elevate your brand and streamline operations."
  },

]


export const products = [
  "SERVER GUARD",
  "EDUHUB",
  "EVERY HOME",
  "BEING DIGITAL / Digital Marketing",
  "CLICK SHARE (Social Media Scheduler)",
  "MINI E-COMMERCE WEBSITE / Being Digital",
  "SLOTIZE"
];

export const service = [
  "Branding (Logo, Packaging, Label, Letterhead, Flex Design, Brochure, Catalogue)",
  "Digital Marketing (Facebook, Google, Instagram, YouTube, LinkedIn Campaigns)",
  "Domain Services (Registration, DNS, SSL Management)",
  "Web Hosting (MSSQL, FTP)",
  "E-commerce (Website Development, Payment Integration)",
  "Payment Gateway Integration",
  "SEO (Basic & Advanced)",
  "Social Media Management",
  "Website Development (One-Page & Multi-Page)",
  "Mobile App Development (iOS & Android)",
  "Custom Websites & ERP Systems"
];

export const serviceCard = [
  {
    bgImage: ServerDataMigration,
    alt: 'Server/Database Migration',
    title: 'SERVER/DATABASE MIGRATION',
    description: `TL Technologies provides seamless server and database migration services, ensuring a smooth 
      transfer of data and applications from one system to another. Our experts handle the entire process efficiently, 
      minimizing downtime and ensuring data integrity.`,
  },
  {
    bgImage: uiux,
    alt: 'UI/UX Branding',
    title: 'UI/UX BRANDING & PROTOTYPE',
    description: `We specialize in creating visually appealing and user-friendly interfaces through UI/UX branding and 
      prototyping. Our team designs intuitive user experiences, incorporating brand elements and industry best practices, 
      to enhance customer engagement and satisfaction.`,
  },
  {
    bgImage: socialmediammarketing,
    alt: 'Digital marketing',
    title: 'DIGITAL MARKETING',
    description: `TL Technologies offers comprehensive digital marketing solutions to help businesses maximize their 
      online presence. Our services include SEO, social media marketing, content creation, and PPC advertising, driving 
      targeted traffic and increasing brand visibility.`,
  },
  {
    bgImage:dev,
    alt: 'Mobile/Web development',
    title: 'MOBILE & WEB DEVELOPMENT',
    description: `We provide customized mobile and web development services tailored to our clients' specific requirements. 
      Our experienced developers create responsive, scalable, and feature-rich applications, ensuring seamless user 
      experiences across various devices and platforms.`,
  },
  {
    bgImage: vedioEditor,
    alt: 'Video Editing',
    title: 'VIDEO EDITING SERVICES',
    description: `Our professional video editing service transforms raw footage into high-quality, visually appealing videos. 
      With skilled editors, cutting-edge software, and a keen eye for detail, we enhance videos with effects, transitions, 
      sound, and graphics, delivering captivating visual content for marketing, training, or entertainment purposes.`,
  },
  {
    bgImage: customerSupport,
    alt: '24/7 Support',
    title: '24/7 SUPPORT',
    description: `As part of our service offering, we provide 24/7 support to ensure continuous assistance and guidance for our 
      customers. Our dedicated team is available round-the-clock to address any inquiries or issues promptly, providing reliable 
      support at any time of the day or night.`,
  },
];
export const taglines = [
  "⭐ TL BEING DIGITAL: Elevate your brand's digital presence with our comprehensive digital marketing solutions.",
  "⭐ TL BEING DIGITAL Ecommerce Site: Launch and grow your online business with a robust and user-friendly eCommerce platform.",
  "⭐ TL SLOTIZE: Simplify scheduling and appointment booking with an intuitive and efficient system.",
  "⭐ TL EVERY HOME: Manage your household tasks effortlessly with this all-in-one home management tool.",
  "⭐ TL CLICK SHARE: Streamline your social media strategy with our advanced content scheduling tool.",
  "⭐ TL SERVER GUARD: Advanced Server Monitoring System: Ensure your servers operate at peak efficiency with our powerful monitoring solution."
];
// export const questionsAndAnswers = [

//     { 
//       "question": "How does 'Being Digital' enhance my online presence?", 
//       "answer": "'Being Digital' enhances your online presence by utilizing advanced digital marketing strategies like SEO, content creation, social media management, and more. We optimize your website, create engaging content, and ensure you reach your target audience effectively across various online platforms."
//     },
//     { 
//       "question": "Can 'Being Digital' integrate with WhatsApp for my business?", 
//       "answer": "Absolutely! 'Being Digital' seamlessly integrates with WhatsApp to provide an all-in-one digital strategy. This integration allows for direct communication with your customers, personalized marketing, and enhanced customer support, making it easier to engage with your audience in real time."
//     },
//     { 
//       "question": "What services are included in the 'Being Digital' package?", 
//       "answer": "Our 'Being Digital' package includes a wide range of services such as content creation, SEO optimization, social media management, online reputation management, and digital advertising. We tailor these services to your business needs, ensuring a cohesive and effective digital marketing strategy."
//     },
//     { 
//       "question": "How can 'Being Digital' drive engagement and growth for my brand?", 
//       "answer": "'Being Digital' drives engagement by creating compelling content and implementing targeted marketing campaigns. We utilize data-driven strategies to attract, engage, and retain your audience, leading to increased brand loyalty, website traffic, and sales growth."
//     },
//     { 
//       "question": "Is 'Being Digital' suitable for small businesses and startups?", 
//       "answer": "Yes, 'Being Digital' offers customizable plans that suit businesses of all sizes, including small businesses and startups. Our flexible packages allow you to choose the services that fit your budget and objectives, helping you establish a strong online presence without overspending."
//     },
//     { 
//       "question": "How do you tailor the digital strategy to my business needs?", 
//       "answer": "We start by understanding your business goals, target audience, and industry. Our team then crafts a customized digital strategy that aligns with your objectives. This approach ensures that the marketing solutions we implement are tailored to resonate with your audience and drive the desired results."
//     },
//     { 
//       "question": "What makes 'Being Digital' different from other digital marketing services?", 
//       "answer": "'Being Digital' stands out due to its integrated approach, combining all aspects of digital marketing into a seamless strategy. We focus on not just promoting your business but also building a strong, sustainable online presence. Plus, our integration with platforms like WhatsApp ensures direct and effective customer engagement."
//     },
//     { 
//       "question": "How do I get started with 'Being Digital'?", 
//       "answer": "Getting started is easy! Visit connect.tltechnologies.net to learn more about our offerings and schedule a consultation. Our team will guide you through the process, helping you select the best plan to boost your business\'s digital presence."
//     },
//     { 
//       "question": "Can I track the results of my digital marketing efforts with 'Being Digital'?", 
//       "answer": "Yes, 'Being Digital' provides detailed analytics and reports on your digital marketing performance. You\'ll have access to metrics that show how your campaigns are performing, enabling you to make informed decisions and adjust strategies for maximum impact."
//     },
//     {
//       "question": "What services does TL TECHNOLOGIES offer?",
//       "answer": "TL TECHNOLOGIES offers a comprehensive range of digital services including Digital Marketing, Domain & Hosting, Branding, Website Development, E-commerce Solutions, Video Editing, Posters/Flex Printing, Custom Software Development, Mobile App Development, Cybersecurity Services, Data Analytics, Cloud Solutions, System Integration, IT Support, SEO/SEM, and IT Consulting. Feel free to ask for more details on any specific service!"
//     },
//     {
//       "question": "What products does TL TECHNOLOGIES offer?",
//       "answer": "TL TECHNOLOGIES offers innovative products such as: Appointment Management System: Streamlines appointment scheduling and management for businesses. TL Being Digital: A digital transformation suite to enhance business operations. Everyhome Application: A smart home management app for seamless control of home devices. Server Monitoring System: Ensures optimal server performance with real-time monitoring and alerts. And many more! Feel free to ask for more details about any specific product."
//     },
//     {
//       "question": "How can I contact TL TECHNOLOGIES?,how to contact you?",
//       "answer": "You can reach us at +91 9061432814. We take clients from all over the world and are always here to help with your digital needs."
//     },
//     {
//       "question": "Can you tell me more about your Digital Marketing services?",
//       "answer": "Our Digital Marketing services include SEO, SEM, social media marketing, content marketing, email marketing, and more. We tailor our strategies to meet your specific business goals and help you achieve a strong online presence."
//     },
//     {
//       "question": "What does your Website Development service entail?",
//       "answer": "Our Website Development service includes designing and building responsive, user-friendly websites tailored to your business needs. We handle everything from front-end design to back-end development, ensuring a seamless user experience."
//     },
//     {
//       "question": "How can your E-commerce Solutions benefit my business?",
//       "answer": "Our E-commerce Solutions include building robust online stores, integrating secure payment gateways, and optimizing the shopping experience to increase sales and customer satisfaction. We aim to provide a smooth and effective e-commerce platform for your business."
//     },
//     {
//       "question": "What types of Mobile App Development do you offer?",
//       "answer": "We develop intuitive and user-friendly mobile applications for both iOS and Android platforms. Our services include app design, development, testing, and maintenance. We specialize in various technologies including Flutter, which allows for cross-platform development to create high-performance apps that work seamlessly on both iOS and Android. We ensure your app meets the highest standards of performance and usability."
//     },
//     {
//       "question": "How can your Cybersecurity Services protect my business?",
//       "answer": "Our Cybersecurity Services include risk assessments, vulnerability management, network security, data protection, and incident response. We help safeguard your business from cyber threats and ensure the integrity of your data."
//     },
//     {
//       "question": "What kind of IT Support do you provide?",
//       "answer": "Our IT Support services include technical assistance, troubleshooting, network management, and maintenance. We provide both remote and on-site support to ensure your IT infrastructure runs smoothly and efficiently."
//     },
//     {
//       "question": "Can you customize software to fit my business needs?",
//       "answer": "Absolutely! Our Custom Software Development service is designed to create software solutions tailored to your specific business requirements. We work closely with you to understand your needs and deliver a solution that meets your goals."
//     },
//     {
//       "question": "What are the benefits of your Cloud Solutions?",
//       "answer": "Our Cloud Solutions offer scalable, flexible, and secure cloud computing services. We help you migrate to the cloud, manage your cloud infrastructure, and optimize your cloud resources to improve efficiency and reduce costs."
//     },
//     {
//       "question": "How does your Appointment Management System work?",
//       "answer": "Our Appointment Management System streamlines the process of scheduling and managing appointments. It offers features such as automated reminders, calendar integrations, and easy rescheduling options to enhance efficiency and customer satisfaction."
//     },
//     {
//       "question": "What is TL Being Digital?",
//       "answer": "TL Being Digital is our digital transformation suite designed to enhance business operations. It includes tools for process automation, data analytics, and digital collaboration to help businesses stay competitive in the digital age."
//     },
//     {
//       "question": "Can you tell me more about the Everyhome Application?",
//       "answer": "The Everyhome Application is a smart home management app that allows you to control and monitor your home devices seamlessly. It supports various smart devices and offers features like remote access, automation, and real-time notifications."
//     },
//     {
//       "question": "What does the Server Monitoring System offer?",
//       "answer": "Our Server Monitoring System provides real-time monitoring of your server's performance. It includes features such as performance metrics, alert notifications, and detailed reports to ensure your servers are running optimally and to prevent potential issues."
//     },
//     {
//       "question": "How can your Branding services help my business?",
//       "answer": "Our Branding services include creating a strong brand identity, designing logos, developing brand guidelines, and crafting compelling brand stories. We help you build a memorable and impactful brand that resonates with your target audience."
//     },
//     {
//       "question": "What does your Video Editing service include?",
//       "answer": "Our Video Editing service includes professional editing of promotional videos, commercials, corporate videos, and more. We enhance your video content to make it engaging and impactful, helping you effectively communicate your message."
//     },
//     {
//       "question": "Can you help with SEO and SEM?",
//       "answer": "Yes, we offer comprehensive SEO and SEM services to improve your website's visibility and search engine ranking. Our strategies include keyword research, on-page optimization, link building, and pay-per-click advertising to drive traffic and increase conversions."
//     },
// { 
//   question: "What is TL BEING DIGITAL?", 
//   answer: "TL BEING DIGITAL is a comprehensive digital marketing solution that helps businesses launch their online presence in just 5 days through 7 different platforms." 
// },
// { 
//   question: "What platforms does TL BEING DIGITAL support?", 
//   answer: "It supports social media marketing, website development, WhatsApp integration, YouTube video production, Instagram reels, and digital posters." 
// },
// { 
//   question: "What is the setup fee for TL BEING DIGITAL?", 
//   answer: "The flat setup fee is just $99 or ₹5001." 
// },
// { 
//   question: "What does the TL BEING DIGITAL site cover?", 
//   answer: "The TL BEING DIGITAL site covers domain registration, hosting, SSL certificate, SEO, Google Analytics integration, and much more." 
// },
// {
//   question: "Does TL BEING DIGITAL include SEO and Google Analytics?",
//   answer: "Yes! TL BEING DIGITAL includes SEO optimization to enhance your online visibility and Google Analytics integration for tracking website performance."
// },
// {
//   question: "Does the package include domain and hosting?",
//   answer: "Yes, the package includes domain registration, hosting, and an SSL certificate for security." 
// },
// { 
//   question: "What are the pricing plans for TL BEING DIGITAL?", 
//   answer: "Plans start at $99/mo (₹5K/mo) for the basic package, which includes custom marketing sites, social media integration, and more." 
// },
// { 
//   question: "What kind of digital marketing services are included?", 
//   answer: "We offer social media marketing, posters, YouTube videos, reels, ad boosts, and tailored campaigns, depending on the selected plan." 
// },
// { 
//   question: "Can I upgrade my plan at any time?", 
//   answer: "Yes, you can upgrade your plan anytime to include more features like WhatsApp marketing, weekly campaigns, and dedicated marketing support." 
// },
// { 
//   question: "How long does it take to set up TL BEING DIGITAL?", 
//   answer: "We can launch your digital presence in just 5 days, so your business can start growing fast!" 
// }

//   ]

export const faqData = [
  { 
    question: "What is 'Being Digital,' and how can it benefit my business?",
    answer: "'Being Digital' is a comprehensive digital marketing solution designed to boost your business's online presence. It includes services like SEO, social media management, and content creation to drive growth.",
    keywords: ["being digital", "digital marketing", "online presence", "SEO", "social media", "content creation", "business growth"]
  },
  { 
    question: "How does 'Being Digital' improve my online presence?",
    answer: "We enhance your online presence through optimized websites, engaging social media content, and targeted campaigns across channels like Facebook, Instagram, and LinkedIn.",
    keywords: ["online presence", "websites", "social media", "campaigns", "Facebook", "Instagram", "LinkedIn"]
  },
  { 
    question: "Can 'Being Digital' integrate with WhatsApp for business?",
    answer: "Yes! We offer WhatsApp integration to improve customer communication, personalized marketing, and real-time support.",
    keywords: ["WhatsApp", "integration", "customer communication", "personalized marketing", "real-time support"]
  },
  { 
    question: "What services are included in the 'Being Digital' package?",
    answer: "The package includes SEO, content creation, social media management, online ads, and reputation management tailored to your business.",
    keywords: ["services", "SEO", "content creation", "social media management", "online ads", "reputation management"]
  },
  { 
    question: "How does 'Being Digital' drive engagement and growth for my brand?",
    answer: "By creating compelling content and executing data-driven campaigns, we attract, engage, and retain your audience, driving traffic and conversions.",
    keywords: ["engagement", "growth", "brand", "content", "campaigns", "traffic", "conversions"]
  },
  { 
    question: "Is 'Being Digital' suitable for small businesses and startups?",
    answer: "Absolutely! We offer customizable packages for businesses of all sizes, helping you grow within your budget.",
    keywords: ["small business", "startups", "customizable packages", "budget", "growth"]
  },
  { 
    question: "What sets 'Being Digital' apart from other digital marketing services?",
    answer: "Our integrated approach covers all aspects of digital marketing under one cohesive strategy, building a sustainable online presence.",
    keywords: ["digital marketing", "integrated approach", "strategy", "online presence"]
  },
  { 
    question: "How can I get started with 'Being Digital'?",
    answer: "Visit connect.tltechnologies.net to explore our plans/price and schedule a consultation. Plans start from $99 (INR 5,000).",
    keywords: ["get started", "plans", "price", "consultation", "cost"]
  },
  { 
    question: "What services does TL TECHNOLOGIES offer?",
    answer: "We offer Digital Marketing, Website Development, Branding, IT Consulting, and Custom Software Development, among others.",
    keywords: ["services", "digital marketing", "website development", "branding", "IT consulting", "software development"]
  },
  { 
    question: "What products does TL TECHNOLOGIES provide?",
    answer: "Our products include: TL SLOTIZE: Appointment Management System. TL Being Digital: Digital marketing suite. Everyhome Mobile App: Home management app. Server Guard: Server monitoring tool.",
    keywords: ["products", "appointment management", "digital marketing", "mobile app", "server monitoring"]
  },
  { 
    question: "How can I contact TL TECHNOLOGIES?",
    answer: "Call us at +91 9061432814 or email info@tltechnologies.net. We serve clients globally.",
    keywords: ["contact", "phone", "email", "global service"]
  }
];


export  const faqKeywords = [
  // General
  { topic: "general", keywords: ["Being Digital", "digital presence", "enhance online presence", "getting started", "what is", "how to", "setup fee"] },

  // Digital Marketing
  { topic: "digitalMarketing", keywords: ["SEO", "SEM", "social media marketing", "content marketing", "digital marketing services", "increase traffic", "engagement", "brand growth"] },

  // WhatsApp Integration
  { topic: "whatsappIntegration", keywords: ["WhatsApp integration", "direct communication", "customer engagement", "real-time interaction"] },

  // Services Offered
  { topic: "services", keywords: ["services included", "Being Digital package", "website development", "branding", "e-commerce solutions", "custom software", "mobile app development", "cloud solutions", "cybersecurity", "IT support"] },

  // Products Offered
  { topic: "products", keywords: ["Appointment Management System", "Being Digital suite", "Everyhome Application", "Server Monitoring System", "custom software solutions"] },

  // Pricing and Plans
  { topic: "pricing", keywords: ["pricing plans", "setup fee", "monthly plans", "upgrade plan", "digital marketing plans", "pricing details", "cost"] },

  // Small Businesses and Startups
  { topic: "smallBusiness", keywords: ["small businesses", "startups", "customizable plans", "budget-friendly", "affordable digital marketing", "business growth"] },

  // Website Development
  { topic: "websiteDevelopment", keywords: ["website development", "responsive websites", "user-friendly websites", "website design", "front-end design", "back-end development"] },

  // E-commerce Solutions
  { topic: "ecommerce", keywords: ["e-commerce solutions", "online stores", "payment gateway integration", "shopping experience", "increase sales"] },

  // Mobile App Development
  { topic: "mobileAppDevelopment", keywords: ["mobile app development", "iOS app", "Android app", "cross-platform apps", "Flutter development"] },

  // Cybersecurity
  { topic: "cybersecurity", keywords: ["cybersecurity", "risk assessment", "data protection", "network security", "incident response", "cyber threats"] },

  // IT Support
  { topic: "itSupport", keywords: ["IT support", "technical assistance", "network management", "remote support", "on-site support", "IT infrastructure"] },

  // Cloud Solutions
  { topic: "cloudSolutions", keywords: ["cloud solutions", "cloud computing", "cloud migration", "cloud management", "optimize resources"] },

  // Custom Software Development
  { topic: "customSoftware", keywords: ["custom software", "software development", "tailored solutions", "business requirements", "customized software"] },

  // Branding
  { topic: "branding", keywords: ["branding", "brand identity", "logo design", "brand guidelines", "brand story", "impactful brand"] },

  // Video Editing
  { topic: "videoEditing", keywords: ["video editing", "promotional videos", "corporate videos", "video content", "video communication"] },

  // SEO and SEM
  { topic: "seoSem", keywords: ["SEO", "SEM", "search engine optimization", "keyword research", "link building", "pay-per-click advertising", "increase conversions"] },

  // Appointment Management
  { topic: "appointmentManagement", keywords: ["appointment management", "scheduling system", "automated reminders", "calendar integration", "rescheduling options"] },

  // Smart Home
  { topic: "smartHome", keywords: ["smart home management", "Everyhome application", "home automation", "smart devices", "remote access"] },

  // Server Monitoring
  { topic: "serverMonitoring", keywords: ["server monitoring", "performance metrics", "alert notifications", "server performance", "real-time monitoring"] }
];