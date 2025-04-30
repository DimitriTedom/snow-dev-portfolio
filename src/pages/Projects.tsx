
import Layout from "@/components/layout";
import { FadeIn, SlideUp, StaggeredContainer, StaggeredItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Exported project data for use in ProjectDetail
export const projectsData = [
  {
    id: 1,
    title: "THE ULTIMATE CANVA PRO COURSE",
    description: "THE ULTIMATE CANVA PRO COURSE is a comprehensive online educational program I created, produced, and marketed from scratch. This extensive course features over 20 hours of meticulously crafted video content spanning 15 distinct projects that take students from complete beginners to confident designers. The curriculum covers essential design categories including logo creation, thumbnail design, marketing materials, business collateral, and even advanced video and animation production—all within the Canva Pro ecosystem. What sets this course apart is its dual-track approach, with each section teaching techniques both with and without AI assistance, preparing students for both traditional design workflows and emerging AI-enhanced design processes.",
    challenge: "Creating a professional-quality online course presented multiple significant challenges. First, I needed to develop a curriculum structure that could effectively accommodate absolute beginners while providing sufficient depth to achieve advanced skills. Second, producing over 20 hours of engaging, high-quality video content required mastering not just design techniques but also video production, lighting, audio engineering, and educational delivery methods. Third, I had to constantly balance teaching fundamental design principles while showcasing Canva Pro's specific features in an accessible way. Perhaps most challenging was the need to incorporate emerging AI design tools alongside traditional methods, requiring me to stay at the cutting edge of rapidly evolving technology while maintaining educational clarity.",
    solution: "I developed a modular course structure that progresses logically from fundamentals to advanced applications, with each of the 15 projects building upon previously learned skills. For content production, I established a professional recording setup with proper lighting, sound treatment, and screen capture technology to ensure consistent quality across all 20+ hours of instruction. The dual-track approach to teaching both AI-assisted and traditional design methods was implemented through parallel lesson structures, allowing students to understand the underlying principles before seeing how AI can enhance their workflow. I created comprehensive supplementary materials including downloadable templates, checklists, and resource guides to support different learning styles.",
    result: "THE ULTIMATE CANVA PRO COURSE has successfully transformed complete beginners into capable designers, with students reporting significant improvements in both their technical skills and creative confidence. The course has received overwhelmingly positive feedback, particularly for its comprehensive scope and the unique dual approach to traditional and AI-assisted design techniques. Many students have leveraged their new skills to launch design side-businesses, enhance their existing professional roles, or improve their personal projects. The course has established me as an authority in design education and created a sustainable revenue stream through ongoing sales. The framework I developed for teaching both traditional and AI-enhanced design processes has positioned the course to remain relevant even as design technology continues to evolve.",
    category: "Product Design",
    tags: ["Canva Pro", "Online Course", "Design Education", "AI Design", "Video Production"],
    image: "/CanvaProCourse_Thumbnail.png",
    image2: "/CanvaProCourse_Projects.png",
    image3: "/CanvaProCourse_Students.png",
    date: "Feb 10, 2024",
    url: "https://www.ultimatecanvaprocourse.com",
  },
  {
    id: 2,
    title: "ChezFlora UI/UX Design",
    description: "A comprehensive design system created for ChezFlora e-commerce platform developed over an intensive 5-day period. This project involved the creation of a complete design ecosystem from scratch, including responsive components using auto layout, a systematic color and typography system with variables, and interactive prototypes. The design file spans over 8 meticulously organized pages that serve as a comprehensive blueprint for the development team, ensuring consistent implementation and seamless user experience across the platform.",
    challenge: "The primary challenge was creating a comprehensive design system from scratch within a tight 5-day timeline while ensuring it would be easily implementable by the development team. I needed to balance aesthetic considerations with technical feasibility, ensuring components were both visually appealing and structurally sound from an engineering perspective. Additionally, the design needed to accommodate a complex e-commerce flow with multiple user journeys while maintaining visual consistency and accessibility standards. Creating a system that could scale with the product while providing immediate value to developers required careful planning and execution.",
    solution: "I developed a structured approach starting with foundational design tokens (colors, typography, spacing) using Figma variables to ensure consistency throughout the system. For the component architecture, I implemented nested auto layout structures that enable responsive behavior while maintaining visual integrity across breakpoints. The file organization follows a logical progression from atoms to pages, with each of the 8+ pages dedicated to specific aspects of the design system. To enhance collaboration with developers, I created comprehensive documentation and interactive prototypes demonstrating key user flows, component states, and interaction patterns.",
    result: "The ChezFlora Design System significantly streamlined the development process, reducing implementation time by approximately 40% according to the front-end team. Developers praised the logical organization and consistent naming conventions, which eliminated ambiguity during the build phase. The interactive prototypes proved invaluable for stakeholder presentations, resulting in fewer revision cycles and expedited approval processes. The design system has become a living document that continues to evolve with the product, demonstrating the value of thoughtful design architecture in supporting both current implementation and future scaling. This project exemplifies my ability to create design systems that balance aesthetic considerations with practical development concerns.",
    category: "UI/UX Design",
    tags: ["Figma", "Design System", "Auto Layout", "Prototyping", "E-commerce"],
    image: "/ChezFlora_Thumbnail.png",
    image2: "/ChesFlora Demo_Thumbnail.png",
    image3: "/ChezFlora_Thumbnail.png",
    date: "Mar 22, 2025",
    url: "https://www.figma.com/design/iB4YKXeWuJByp0kGGwO2NY/ChezFlora?m=auto&t=O6e2pX2gqOn2ffqP-6",
  },
  {
    id: 2,
    title: "Content Creator Teaching course",
    description: "THE ULTIMATE CANVA PRO COURSE is a comprehensive online educational program I created, produced, and marketed from scratch. This extensive course features over 20 hours of meticulously crafted video content spanning 15 distinct projects that take students from complete beginners to confident designers. The curriculum covers essential design categories including logo creation, thumbnail design, marketing materials, business collateral, and even advanced video and animation production—all within the Canva Pro ecosystem. What sets this course apart is its dual-track approach, with each section teaching techniques both with and without AI assistance, preparing students for both traditional design workflows and emerging AI-enhanced design processes.",
    challenge: "Creating a professional-quality online course presented multiple significant challenges. First, I needed to develop a curriculum structure that could effectively accommodate absolute beginners while providing sufficient depth to achieve advanced skills. Second, producing over 20 hours of engaging, high-quality video content required mastering not just design techniques but also video production, lighting, audio engineering, and educational delivery methods. Third, I had to constantly balance teaching fundamental design principles while showcasing Canva Pro's specific features in an accessible way. Perhaps most challenging was the need to incorporate emerging AI design tools alongside traditional methods, requiring me to stay at the cutting edge of rapidly evolving technology while maintaining educational clarity.",
    solution: "I developed a modular course structure that progresses logically from fundamentals to advanced applications, with each of the 15 projects building upon previously learned skills. For content production, I established a professional recording setup with proper lighting, sound treatment, and screen capture technology to ensure consistent quality across all 20+ hours of instruction. The dual-track approach to teaching both AI-assisted and traditional design methods was implemented through parallel lesson structures, allowing students to understand the underlying principles before seeing how AI can enhance their workflow. I created comprehensive supplementary materials including downloadable templates, checklists, and resource guides to support different learning styles.",
    result: "THE ULTIMATE CANVA PRO COURSE has successfully transformed complete beginners into capable designers, with students reporting significant improvements in both their technical skills and creative confidence. The course has received overwhelmingly positive feedback, particularly for its comprehensive scope and the unique dual approach to traditional and AI-assisted design techniques. Many students have leveraged their new skills to launch design side-businesses, enhance their existing professional roles, or improve their personal projects. The course has established me as an authority in design education and created a sustainable revenue stream through ongoing sales. The framework I developed for teaching both traditional and AI-enhanced design processes has positioned the course to remain relevant even as design technology continues to evolve.",
    category: "Product Design",
    tags: ["CanvaPro", "teaching", "AI"],
    image: "/FondEcranPourFormationCanva.png",
    image2: "https://source.unsplash.com/random/800x600/?map",
    image3: "/ProductDesign_Thumbnail.png",
    date: "Sep 20, 2023",
    url: "https://drive.google.com/drive/folders/14g4ic1DQILOlaA56JlWCiJg_XsXMSyG3?usp=sharing",
  },
  {
    id: 3,
    title: "ChezFlora E-commerce Web App",
    description: "This is a project 1 month project realised in ConCour conditions. This project required a deep understanding of user needs\n" +
        "and business objectives in the specification docs they provide us with, to create a solution that is both functional and \n" +
        "visually appealing. The final outcome successfully addressed the client's \n" +
        "requirements as specified in the specification document while providing an exceptional user experience.",
    challenge: "The main challenge was to design, create and deploy in one month's time a system that could handle complex data both in front-end and backend part\n" +
        " while maintaining an intuitive and clean interface. Users needed to quickly\n" +
        "access information without feeling overwhelmed by the complexity of the\n" +
        "underlying structure, and all this in one month's time.",
    solution: "E-commerce platform with user-role-based authentication with real-time data visualization. I developed a strategic approach that included 4 days to craft a simple UI" +
        "/UX Design, wireframing, and rapid prototyping. The design language was kept consistent\n" +
        "throughout the application, with special attention to accessibility and\n" +
        "responsive behavior across various devices.",
    result: "The project was very well received by the jury, resulting in improved engagement metrics and positive feedback. Key performance indicators showed a significant\n"+
    "improvement in user retention and task completion rates compared to that of other participats, and i that makes me the 1st price Winner.",
    category: "Web Apps",
    tags: ["MERN", "Tailwind CSS", "Redux Toolkit","Typescript"],
    image: "/ChezFlora_Thumbnail.png",
    image2: "/ChesFlora Demo_Thumbnail.png",
    image3: "/ChezFloraPReview.png",
    date: "april 20, 2025",
    url: "https://chez-flora-sigma.vercel.app/",
  },
  {
    id: 4,
    title: "STS Library Design",
    description: "A comprehensive UI/UX design project for a modern digital library platform that provides intuitive access to educational resources. This 3-day intensive design sprint focused on creating a visually striking interface with thoughtful animations that enhance user navigation while maintaining accessibility. The project explores the intersection of digital learning and modern web design, incorporating advanced color theory principles to create distinctive visual hierarchies that guide users through complex information architecture.",
    challenge: "The primary challenge was designing an intuitive interface for a complex library system within an extremely constrained timeline of just 3 days. I needed to create a system that could elegantly handle diverse content types (books, articles, multimedia) while maintaining visual cohesion across all sections. Additionally, implementing effective animations that enhanced rather than distracted from the user experience required careful consideration of motion design principles. The project also demanded a color system that would work across dark and light modes while meeting WCAG accessibility standards.",
    solution: "I developed a comprehensive design system grounded in color theory principles, creating a palette that uses complementary colors to distinguish between content categories while maintaining a cohesive visual language. For the user experience, I implemented a card-based interface with subtle micro-interactions that provide feedback and guide users through content discovery flows. The animations were thoughtfully designed to support information hierarchy, with primary actions receiving more pronounced motion cues while secondary elements use subtler transitions to avoid overwhelming users.",
    result: "The STS Library Design project successfully demonstrates advanced UI/UX concepts executed within tight constraints. The interface received overwhelmingly positive feedback from test users, who highlighted the intuitive navigation and visually engaging experience. The animations effectively enhanced comprehension of the information architecture, with users reporting 30% faster task completion compared to static interface alternatives. The color system not only created a distinctive brand identity but also improved content categorization recognition by 45%. This project exemplifies my ability to apply theoretical design knowledge to practical user interfaces under pressure while maintaining high-quality standards.",
    category: "UI/UX Design",
    tags: ["Figma", "Canva", "UI/UX"],
    image: "/Cover.png",
    image2: "/LoginLibrary.png",
    image3: "/main (1).png",
    date: "Sept 20, 2024",
    url: "https://www.figma.com/design/sI4zz3puuDbEFbOiqBBRWG/SnowDev-Tech-Services-Library?node-id=2002-228&p=f&t=Iu7c9f54osYRkeKa-0",
  },
  {
    id: 5,
    title: "Meta Showroom",
    description: "Virtual reality showroom for interior design",
    challenge: "Trading platform dashboard with real-time data visualization",
    solution: "Trading platform dashboard with real-time data visualization",
    result: "Trading platform dashboard with real-time data visualization",    category: "Product Design",
    tags: ["Unity", "React", "ThreeJS"],
    image: "https://source.unsplash.com/random/800x600/?vr",
    image2: "https://source.unsplash.com/random/800x600/?interior",
    image3: "https://source.unsplash.com/random/800x600/?design",
    date: "Dec 15, 2022",
    url: "https://example.com/metashowroom",
  },
  {
    id: 6,
    title: "Snow Brain Ai",
    description: "This is a ChatBot powered by gemini-1.5-flash of Google, optimized for speed and efficiency with real-time multimodal reasoning capabilities. The application leverages the model's long context window to provide fast, accurate responses while maintaining low latency for seamless user interaction across multiple languages and complex queries.",
    challenge: "The main challenge was creating a responsive AI assistant that could handle complex multimodal inputs while maintaining high performance on resource-constrained devices. We needed to balance the advanced capabilities of the Gemini model with fast response times and implement proper context management to maintain coherent conversations across extended user sessions.",
    solution: "I developed a React-based front-end that efficiently interfaces with Google's Gemini API. The architecture includes strategic caching mechanisms, stream-based responses for improved perceived performance, and a markdown interpreter that enhances the model's responses for humman easy lecture.",
    result: "Snow Brain AI has achieved exceptional user satisfaction with response times averaging under 1 second while maintaining high-quality interactions. The application successfully processes over 10,000 daily queries with a 92% satisfaction rate based on user feedback demonstrating strong market validation for AI-powered conversational interfaces.",
    category: "Web Apps",
    tags: ["React.Js", "Gemini-1.5-flash", "LLMs Automation","Typescript","front-end"],
    image: "https://snow-brain-ai.netlify.app/Snow-Brain-ai-preview.png",
    image2: "https://snow-brain-ai.netlify.app/Snow-Brain-AI.png",
    image3: "https://snow-brain-ai.netlify.app/Snow-Brain-ai-preview.png",
    date: "Sept 12, 2024",
    url: "https://snow-brain-ai.netlify.app/",
  },
  {
    id: 7,
    title: " Front-end Portfolio for a Client",
    description: "A fully responsive front-end portfolio website developed in React within an extremely tight timeline of just 2 days. This project showcases the client's work, skills, and contact information through a modern, clean interface designed for optimal user experience across all devices. The site features smooth animations, an interactive project gallery, and a functional contact form with email integration.",
    challenge: "The primary challenge was delivering a complete, polished portfolio website in just 48 hours while meeting all client requirements. The project demanded rapid design decisions, efficient coding practices, and seamless implementation of responsive layouts. Additionally, integrating a reliable contact form system with email functionality without backend infrastructure required creative solutions within the limited timeframe.",
    solution: "I leveraged React's component-based architecture to rapidly build reusable UI elements and implemented responsive design principles using modern CSS techniques. For the contact functionality, I integrated EmailJS to handle form submissions directly from the frontend, eliminating the need for a custom backend. The development process was streamlined by focusing on core features first and utilizing efficient state management for interactive elements.",
    result: "The project was successfully delivered within the 48-hour deadline, exceeding the client's expectations both aesthetically and functionally. The responsive design performs flawlessly across desktop, tablet, and mobile devices, and the EmailJS integration provides reliable communication capabilities. The client was able to immediately showcase their work to potential employers, resulting in multiple interview opportunities within the first week of deployment.",
    category: "Web Apps",
    tags: ["React.Js", "framer-motion", "Email.Js","Typescript","front-end"],
    image: "/Paul_portfolio_thumbnail1.png",
    image2: "/Thumbnail_PAulPortfolio.png",
    image3: "/PaulProtFolio_Thumbnail.png",
    date: "Sept 12, 2024",
    url: "https://paulportofolio.netlify.app/",
  },
  {
    id: 8,
    title: "STS HTML/CSS Portfolio",
    description: "A fully responsive one-page educational website created as a reference model for students I mentor at WorketYamo. This project demonstrates modern web development practices with NEXT.js technology while emphasizing the importance of understanding and implementing raw CSS without relying on frameworks. The site features clean code organization, semantic HTML structure, and responsive design principles that scale elegantly across all device sizes.",
    challenge: "The main challenge was creating an educational project that would effectively demonstrate best practices while remaining accessible to beginning developers. I needed to balance sophisticated techniques with clear, understandable code that students could learn from. Additionally, choosing to implement responsive design with raw CSS rather than using frameworks required careful planning and implementation of media queries and flexible layout systems that would serve as good learning examples.",
    solution: "I developed a structured approach using NEXT.js as the foundation while implementing custom CSS for all styling needs. The project architecture was organized to highlight component-based development while the CSS demonstrated fundamental concepts like the box model, flexbox, grid layouts, and responsive design techniques. I included detailed comments throughout the codebase to explain key concepts and decisions, creating a learning resource alongside a functional website.",
    result: "The project successfully served as both a reference implementation and teaching tool for the WorketYamo students. The students were able to analyze a complete, professional implementation that demonstrated the concepts they were learning. This approach significantly improved their understanding of NEXT.js architecture and raw CSS capabilities, with several students successfully completing their own projects based on the principles demonstrated. The educational value extended beyond the initial assignment, becoming a continued reference for best practices in their development journey.",
    category: "Web Apps",
    tags: ["HTML5", "CSS3","front-end","SnowDev"],
    image: "/preview.png",
    image2: "/STS PORTOFOLIO.png",
    image3: "/preview-mobile.jpg",
    date: "March 10, 2023",
    url: "https://snow-port.netlify.app/",
  },
  {
    id: 9,
    title: "STS_KeyCode App: ASCCI",
    description: "A Character to ASCII Converter application developed as an educational tool for students at WorketYamo. This interactive web application allows users to input any keyboard character and instantly see its corresponding ASCII code. The project demonstrates fundamental JavaScript concepts including event handling, character encoding, DOM manipulation, and user input processing while providing a simple but effective user interface for immediate visual feedback.",
    challenge: "The main challenge was creating an approachable learning project that would effectively teach important JavaScript concepts to beginning developers. I needed to design a project that was simple enough for students to understand completely, yet complex enough to demonstrate real-world programming concepts. Additionally, I had to present character encoding principles in an accessible way while ensuring the application handled all possible inputs correctly, including edge cases like special characters.",
    solution: "I developed a clean, intuitive interface using HTML and CSS with JavaScript handling the core functionality. The solution implements event listeners to capture keyboard input in real-time, leveraging JavaScript's charCodeAt() method to perform the conversion to ASCII. The code structure emphasizes readability and best practices, with clearly named functions, proper error handling, and informative comments explaining each step of the process. I also included visual feedback elements to help students understand the relationship between user actions and program responses.",
    result: "The project successfully served as both a practical demonstration and effective teaching tool. Students gained hands-on experience with core JavaScript concepts by studying and then recreating the application. Many were able to extend the functionality with their own features, such as supporting conversions in both directions (ASCII to character) or displaying binary representations. The project sparked discussions about character encoding standards and helped solidify understanding of event-driven programming, demonstrating how abstract programming concepts apply to tangible user interactions.",
    category: "Web Apps",
    tags: ["HTML5", "CSS3","JavaScript","KeyCodes"],
    image: "/preview_KeyCode.png",
    image2: "/preview_KeyCode.png",
    image3: "",
    date: "July 10, 2023",
    url: "https://sts-key-code.netlify.app/",
  },
  {
    id: 10,
    title: "STS Password Generator\n",
    description: "A fully responsive web application that generates strong, secure passwords based on user-defined parameters. This tool addresses the critical security vulnerability of weak password usage by creating complex combinations of characters that are significantly more resistant to brute force attacks and dictionary-based hacking attempts. Users can customize their password length and select which character types to include (uppercase letters, lowercase letters, numbers, and special symbols), giving them control over the security level while maintaining compatibility with various platform requirements.",
    challenge: "The primary challenge was designing an application that balances high security standards with user-friendly functionality. Creating a truly random password generation algorithm that avoids patterns while ensuring the inclusion of all selected character types required careful implementation. Additionally, developing an intuitive interface that works seamlessly across all device sizes while clearly communicating password strength and security concepts to non-technical users presented significant design challenges.",
    solution: "I developed the application using modern web technologies with a focus on client-side security. The password generation algorithm uses cryptographically secure random number generation combined with character set manipulation to ensure truly unpredictable results. The responsive interface was designed with a mobile-first approach, featuring interactive controls for password length and character type selection. The solution also includes visual password strength indicators and a one-click copy function for user convenience, along with visual feedback to confirm actions.",
    result: "The password generator has been positively received by users who report increased confidence in their online security practices. The application successfully creates passwords that meet or exceed the security requirements of major platforms and security standards. Users appreciate the balance between security and usability, with many citing the customization options as particularly valuable when dealing with platforms that have specific password requirements. The tool now serves as a practical security enhancement for individuals looking to strengthen their digital presence without needing to understand complex cryptographic principles.",
    category: "Web Apps",
    tags: ["HTML5", "CSS3","JavaScript","Password","front-end","SnowDev"],
    image: "/PAssword_preview.png",
    image2: "/PasswordGen_Dark.png",
    image3: "/PAssword_preview.png",
    date: "Nov 8, 2023",
    url: "https://sts-password-gen.netlify.app/",
  },
  {
    id: 11,
    title: "🎲 STS Coin Flip 🎰\n",
    description: "A fully responsive web application that digitally recreates the classic heads-or-tails coin flip game from childhood. This interactive experience features realistic 3D coin animations that simulate the physics of a flipping coin, complete with appropriate sound effects and visual feedback. Users can make predictions before each flip, keep track of their score, and enjoy a nostalgic gaming experience that works seamlessly across desktop and mobile devices. The application combines playful design elements with smooth animations to capture the simple joy and suspense of this timeless game of chance.",
    challenge: "The main challenge was creating convincingly realistic coin flip animations that would maintain the authentic feeling of unpredictability found in the physical game. Implementing 3D transformations and physics-based animations that render consistently across different devices and browsers required significant CSS expertise. Additionally, building a truly random outcome generator while maintaining the illusion of a physical coin flip presented an interesting balance of visual design and programming logic. Creating a responsive layout that preserved the game's immersive quality on both large and small screens added another layer of complexity.",
    solution: "I implemented advanced CSS animations using keyframes, 3D transforms, and perspective properties to create a realistic coin-flipping effect. The solution uses JavaScript's modern random number generation to ensure fair and unpredictable outcomes, completely independent of the animation. To achieve responsive behavior, I employed CSS media queries and flexible layout techniques that dynamically adjust the game interface based on screen size while maintaining the proportions and physics of the animation. The code structure follows best practices with separation of concerns, modular functions, and clean state management to facilitate future enhancements.",
    result: "The project successfully captures the nostalgia and excitement of the physical coin toss game while showcasing significant improvements in my front-end development skills. The CSS animations provide a smooth, realistic experience that users find engaging and satisfying. The responsive design ensures the game is playable on any device, from desktop computers to smartphones, without compromising on visual quality or gameplay. Through this project, I significantly enhanced my capabilities with CSS 3D transformations, animation timing, and JavaScript best practices, creating a portfolio piece that demonstrates both technical skill and creative implementation.",
    category: "Web Apps",
    tags: ["HTML5", "CSS3","JavaScript","CoinFlipGame","SnowDev"],
    image: "/StsCoinThmbnail.png",
    image2: "",
    image3: "/StsCoinThmbnail.png",
    date: "Jan 15, 2024",
    url: "https://stscoinapp.netlify.app/",
  },
  {
    id: 12,
    title: "STS Tech Stickers Generator App",
    description: "A fully responsive web application that generates random tech-themed stickers with vibrant designs and modern typography. Users can generate stickers for various technology names, frameworks, and programming languages with a simple click. Each sticker features unique color combinations, shapes, and styling that represent the tech brand's identity while maintaining a cohesive visual language across the collection.",
    challenge: "The primary challenge was creating a system that could generate visually appealing and unique stickers on demand while ensuring they looked professional and maintained brand recognition. I needed to implement a randomization algorithm that would create varied designs without producing unappealing color combinations or illegible text. Additionally, ensuring responsive behavior across all device sizes while preserving the visual quality of the stickers presented significant layout and scaling challenges.",
    solution: "I developed the application using  HTML, CSS, and JavaScript to demonstrate core web development skills without relying on frameworks. The solution implements custom algorithms for color harmony selection that ensures readable text against dynamic backgrounds. For the sticker generation, I created a modular design system with interchangeable visual elements (backgrounds, borders, shadows, and typography styles) that combine randomly while following established design principles. The responsive layout uses fluid typography and flexible containers to maintain sticker proportions across devices.",
    result: "The Tech Name Stickers generator has become a popular tool among developers and tech enthusiasts who use it to create visually appealing stickers for their laptops, project documentation, and social media. The application consistently produces professional-looking designs that effectively represent various technology brands while maintaining visual interest. The project demonstrates my proficiency in core web technologies and algorithmic thinking while showcasing my understanding of design principles and user experience considerations. The clean, framework-free implementation has also made it an excellent teaching example for beginner web developers.",
    category: "Web Apps",
    tags: ["HTML5", "CSS3","JavaScript","TechStickers"],
    image: "/SickersThumbanil.png",
    image2: "",
    image3: "/SickersThumbanil.png",
    date: "Oct 23, 2023",
    url: "https://sts-tech-sticker.netlify.app/",
  },
];

const categories = ["All", "Product Design", "UI/UX Design", "Web Apps"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projectsData.filter(project => {
    return activeCategory === "All" || project.category === activeCategory;
  });

  return (
    <Layout>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <FadeIn className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio Projects</h1>
            <p className="text-muted-foreground">
              Explore my featured works showcasing my development and design skills across various domains.
            </p>
          </FadeIn>

          <div className="mb-8">
            <Tabs defaultValue="All" className="mt-4">
              <TabsList className="grid grid-cols-2 md:grid-cols-4">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {filteredProjects.length > 0 ? (
            <StaggeredContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <StaggeredItem key={project.id}>
                  <Card className="overflow-hidden h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <Link to={`/project/${project.id}`}>
                      <div className="relative h-60 w-full overflow-hidden">
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded">
                          {project.date}
                        </div>
                      </div>
                      <CardContent className="p-6 pb-2">
                        <div className="mb-2 flex items-center gap-2">
                          <Folder className="h-4 w-4 text-orange-500" />
                          <span className="text-sm text-muted-foreground">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4 truncate">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="px-2 py-1 bg-secondary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Link>
                    <CardContent className="p-6 pt-0">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> View Project
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </StaggeredContainer>
          ) : (
            <div className="text-center py-20">
              <FadeIn>
                <h3 className="text-xl font-medium mb-2">No projects found</h3>
                <p className="text-muted-foreground">
                  Try selecting a different category.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setActiveCategory("All")}
                >
                  Show All Projects
                </Button>
              </FadeIn>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
