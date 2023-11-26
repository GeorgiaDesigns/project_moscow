import { ContentType, Project } from "../src/types/content";

export const Projects: Project[] = [
  {
    id: 1,
    title: "Academic Planning Solution for a Educational Institution",
    description:
      "Within the world of educational institution management, I collaborated with a Brazilian higher education facility to collectively enhance the efficiency of the academic planning team. Our goal was to refine their methods in dealing with the high number of programs, courses, and enrollments.",
    thumbnail: "./src/assets/APH - 1.mp4#t=25,30",
    content: [
      {
        type: ContentType.VIDEO,
        data: { path: "./src/assets/APH - 1.mp4" },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Project Overview",
          text: [
            "In collaboration with Ânima, a Brazilian group of higher education institutions, I developed solutions for the academic planning team. Among other functions, they were responsible for shaping the upcoming semester, which involved selecting subject offerings and managing seat availability for undergraduate programs. However, the existing process relied heavily on manual Excel spreadsheets for planning and a legacy system for seat allocation, leading to various challenges and inefficiencies.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Challenges In Academic Planning",
          text: [
            "The manual planning process using Excel spreadsheets was cumbersome due to the large amount of data involved. The spreadsheets contained approximately 200,000 rows, representing courses across all universities and programs. The lack of a centralized system for managing these spreadsheets resulted in frequent manual errors and compromised data reliability. Additionally, conflicts in scheduling were a regular occurrence, and they lacked historical data to determine which subjects each class of students had already completed. As a result, there were instances where they accidentally offered the same subject again in the following semester. It was only after noticing the mistake that they would make the necessary corrections.",
            "The seat allocation process using the legacy system was also problematic. The system had an outdated and unfriendly user interface, presenting a long list of academic courses and their respective subdivisions for seat allocation. This list included courses from all universities and programs, making the process time-consuming and prone to human errors.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Design Process",
          subtitle: "User Journey and CSD Matrix:",
          text: [
            "At the project's outset, we began by creating a User Journey, which mapped out all the steps of the current process, including the technical aspects behind the user's actions. This User Journey served as a foundational step, helping us gain a comprehensive understanding of the existing process.",
            "After creating the User Journey and following a few previous meetings, we employed a Certainties, Suppositions, and Doubts (CSD) Matrix—a structured approach that helped identify what we already knew about the demand and the critical information required to address it. As uncertainties arose, we initiated meetings with stakeholders to clarify any ambiguities and gather insights. This initial phase set the stage for focused problem-solving.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          subtitle: "Co-Creation:",
          text: [
            "Collaboration was key throughout the design process, with co-creation sessions in Miro assuming a pivotal role in shaping the solution. During these sessions, we engaged stakeholders to collectively define pain points, establish the desired functionalities of the solution, and gather insights. To efficiently prioritize, we utilized a voting system to identify the most pressing issues and promising ideas.",
            "At the end of each session, every team member crafted an optimal solution concept based on the outcomes of the voting process. We initially sketched wireframes by hand on paper, later transitioning to the use of Whimsical, a specialized tool. Following this, we conducted another round of voting to determine the standout ideas.",
          ],
        },
      },
      {
        type: ContentType.GALLERY,
        data: [
          {
            id: 2,
            file: "./src/assets/co-creation/1.png",
          },
          {
            id: 3,
            file: "./src/assets/co-creation/2.png",
          },
          {
            id: 4,
            file: "./src/assets/co-creation/3.png",
          },
          {
            id: 5,
            file: "./src/assets/co-creation/4.png",
          },
          {
            id: 6,
            file: "./src/assets/co-creation/5.png",
          },
          {
            id: 7,
            file: "./src/assets/co-creation/6.png",
          },
        ],
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          subtitle: "Iterative Prototyping:",
          text: [
            "Moving forward, I took the insights gathered from both co-creation sessions and wireframes, and translated them into a high-fidelity prototype using the Figma platform. The prototypes were concepted under multiple iterations and collaboratively developed.",
            "Utilizing Atomic Design principles, I designed the prototype components with a focus on consistency and reusability throughout the interface. I also utilized Figma's auto-layout feature to efficiently create responsive and adaptable design elements.",
            "Throughout this iterative journey, I continually incorporated feedback from stakeholders and the development team. This approach enabled us to refine the design, address concerns, and ensure alignment with user needs and technical feasibility.",
          ],
        },
      },
      {
        type: ContentType.GALLERY,
        data: [
          {
            id: 8,
            file: "./src/assets/prototype/1.png",
          },
          {
            id: 9,
            file: "./src/assets/prototype/2.png",
          },
        ],
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          subtitle: "Usability Testing and Feedback Incorporation:",
          text: [
            "The prototypes were subjected to usability testing, a critical phase to validate the design's effectiveness and user-friendliness. These tests provided actionable insights into user interactions, pain points, and areas of improvement. User feedback was documented and analyzed to inform refinements. This phase also included involving the development team, fostering a collaborative environment where their insights into technical feasibility were synergized with user-centered design.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          subtitle: "Stakeholder Presentation and Finalization:",
          text: [
            "Once usability testing was completed, I compiled the user feedback and presented the results to stakeholders, accompanied by a UMUX (Usability Metric for User Experience) score that quantified user satisfaction. The feedback and score formed the basis for discussions and informed the final design adjustments. Close collaboration with the development team ensured seamless implementation, and I played an active role in Quality Assurance (Q&A) testing to validate that the solution was executed as intended.",
            "This holistic design process, from mapping uncertainties to co-criation sessions, iterative prototyping and usability testing, ensured that the final solution was rooted in user needs, technically viable, and aligned with business objectives.",
          ],
        },
      },
      {
        type: ContentType.IMAGE,
        data: {
          id: 10,
          file: "./src/assets/presentation.png",
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Challenges Faced In The Design Process",
          text: [
            "During the co-creation sessions for seat allocation, some participants faced difficulties with sketching on paper and uploading their drawings to Miro. To address this, we switched to using the Whimsical tool in the subsequent co-creation sessions, which was better received and facilitated smoother collaboration.",
            "Another challenge arose during the co-creation sessions. Stakeholders were initially hesitant to prioritize specific areas of focus among the identified problems and needs. They believed that everything was essential and should be included in the solution. To overcome this, we emphasized that we were developing an MVP (Minimum Viable Product) and explained the rationale behind this approach. I assured them that no essential aspects would be excluded from the final solution. Additionally, drawing inspiration from Moscow's prioritization technique, we added an extra step to the co-creation process, where we collectively prioritized the problems to create a sequential action plan. This step helped us clarify and rank the critical elements for the MVP, ensuring that the most important features were addressed first.",
            "There was also some resistance from stakeholders regarding conducting usability tests. Due to their urgency to deliver the product, they initially deemed usability testing unnecessary. However, I emphasized the significance of these tests, which proved essential in identifying necessary adaptations and incorporating critical features for the solution's success. Furthermore, I invited the development team to participate in the tests, which resulted in a shift in their perception regarding the importance of user involvement in the solution's development process.",
            "While conducting usability tests, it became apparent that users took more time than expected to understand the solution. Although they ultimately found it easy to use once they grasped it, the initial learning curve was a concern. In response to this feedback, I restructured the hierarchy of information within the cards on the main solution page. Specifically, I moved aspects of the editing process, such as learning modality selection, subject deletion, and subject addition, to the main page to enhance clarity and ease of use.",
            "Additionally, based on insights from these tests, I iterated on several features to further improve the solution. These enhancements included the introduction of a progress bar to keep users informed about their progress, the inclusion of a concise introductory text on the main page, the ability to select and approve multiple cards simultaneously, and the option to rearrange subject offers within the cards by dragging and dropping. These iterative changes were aimed at addressing user needs and enhancing the overall user experience.",
          ],
        },
      },
      {
        type: ContentType.GALLERY,
        data: [
          {
            id: 11,
            file: "./src/assets/changes/1.png",
          },
          {
            id: 12,
            file: "./src/assets/changes/2.png",
          },
        ],
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Solutions Implemented",
          text: [
            "For the seat allocation process, I introduced an innovative approach. By identifying a pattern in seat allocation across subdivisions, I designed a solution where users only needed to input the total number of seats, and the system automatically calculated the seat distribution based on the established pattern. Additionally, I implemented the functionality to select multiple courses and apply the same seat count, saving time and effort. Users expressed satisfaction with the improved efficiency, agility, and ease of use of the solution.",
          ],
        },
      },
      {
        type: ContentType.VIDEO,
        data: { path: "./src/assets/APH - 1.mp4" },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          text: [
            "Regarding the subject offerings tool, I addressed the identified pain points, such as scheduling conflicts and offering previously completed courses. The solution blocked such errors and provided essential information, including the course history for each student group and the missing requirements. The interfaces I designed for both tools were cleaner, more intuitive, well-organized, and structured, as confirmed by the usability tests. The UMUX score for both tools was 91.7 out of 100, with the majority of users rating intuitiveness at the highest level. Stakeholders, including the Product Owner, also expressed their satisfaction with the developed solution.",
          ],
        },
      },
      {
        type: ContentType.VIDEO,
        data: { path: "./src/assets/APH - 1.mp4" },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          subtitle: "User Testimonials:",
          text: [
            "“This format is perfect for our situation. It avoids the need for manual execution, saving us a considerable amount of time.”",
            "“I think the visualization is excellent; it will certainly surpass spreadsheets, which often lead to information loss. With this solution, I don't see that issue.”",
            "“One aspect that I liked is the centralization of information in this solution. This will be much more efficient than spreadsheets.”",
          ],
          testimonial: true,
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Acknowledgments",
          text: [
            "I wish to express my gratitude to Luiza Lacerda and Jefferson Santos, who initiated and guided the project during its early stages, providing essential direction and insights that set the project on the right path. I'd also like to extend my thanks to Thaisa Ziliotto, who joined the project later, bringing fresh ideas and working alongside me to address ongoing challenges; her adaptability and dedication greatly enhanced our progress.",
          ],
        },
      },
    ],
  },
  {
    id: 2,
    title: "Stock Replenishment Solution for Leading Cosmetics Group",
    description:
      "Stepping into the world of cosmetics sales, I worked on a project to optimize stock replenishment for a leading cosmetics group. The challenge was addressing product availability and surplus issues, enabling efficient stock management for franchisees.",
    thumbnail:
      "https://s3-alpha-sig.figma.com/img/758f/fb52/e73cea5769c0e08799a765e805a4e9bc?Expires=1698624000&Signature=Xa6TwevXRK8E3g69l5vtSNEEz1XQWnGkJ563nXCHcQAqn9Jv3y2waNGr49AXsY1BO9PUjC~ca2RJ6QCtoKwOcQLsa~8UtbyMmm3WYuIRsUoy0utkmwiEGD-GcWVVP5TRyw0l8FV8rCxgk~Cz5YhTIG3zJMBA3kq7MqKm2XOCtTPqK5w06ab3uSM43dYMdJy6XL7NxElMW-KTWSkdPxcyrJxYDcMopuzwF3~pc3889inxiqPR9m3DjfzgE~~u8QuX7qmyjKk8~W5jacgtUVoWge3b-g6dky1czdAePxll7DdQsHZ4bkfjGEnuRdRVnVuDH5IoZAHEPaJYcbnQGvjSTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    content: [
      {
        type: ContentType.VIDEO,
        data: { path: "./src/assets/APH - 1.mp4" },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Project Overview",
          text: [
            "This project aimed to optimize stock replenishment processes for the franchisees of Grupo Boticário, a prominent cosmetic group. Previously managed through Excel spreadsheets, the franchisees' existing method resulted in inconsistent stock levels and significant time investment. We addressed this issue through a web-based tool that replaced franchisees' personal formulas with an algorithm to calculate ideal stock levels and provide data-driven recommendations.",
            "The project spanned approximately nine months and continued to evolve even after my departure, thanks to an iterative approach based on scalable agile methodology. The new solution is expected to standardize stock planning and improve the efficiency of the stock replenishment process for franchisees.",
            "This project exemplifies my expertise in driving impactful change through collaboration, innovation, and strategic problem-solving. Its success not only met the client's immediate needs but also set the foundation for continued enhancements in their operational efficiency even after my departure.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Challenges",
          text: [
            "The project kicked off by addressing several critical challenges. Franchisees were grappling with an unstandardized analysis process, resorting to manual Excel spreadsheets. This outdated method resulted in inefficiencies, errors, and often a misjudgment of the quantities needed. Adding to the complexity, the launch of new products posed a unique issue, as there was no historical sales data available. This necessitated time-consuming manual comparisons between product catalogs and historical spreadsheets.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Solutions Implemented",
          text: [
            "In response, we developed an intuitive online platform, providing franchisees with a central hub for all their ordering needs. The heart of the platform is a meticulously designed table, allowing franchisees to select quantities with ease. The innovative 'Smart Purchasing' algorithm provides data-driven suggestions, considering historical sales, promotions, and more. Our solution evolved over time, accommodating a wide array of order types - weekly, cyclical, new product launches, and kits, each with a tailored strategy.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Design Process",
          text: [
            "Our design process was collaborative and iterative, with a continuous discovery phase. Regular meetings with stakeholders and co-creation exercises allowed us to gather critical insights. Usability testing ensured that our design choices aligned with user expectations. We meticulously planned each sprint, with pages organized to correspond to the development cycle, making the hand-off to the development team seamless.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          subtitle: "User Testing and Feedback",
          text: [
            "User feedback played a pivotal role in shaping the project. Testing and feedback sessions resulted in overwhelmingly positive responses. Franchisees praised the platform for its efficiency, accuracy, and the ease with which orders could be placed. The Smart Purchasing algorithm, once met with skepticism, had now earned the trust of franchisees.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          subtitle: "Enhancements and User Experience Improvements",
          text: [
            "As the project progressed, we introduced several features to streamline the ordering process. Product images, historical data, and reliable status indicators were added to improve the user experience. The system centralized essential information and facilitated data-driven decisions. The system's effectiveness was immediately recognized, saving time and reducing the margin of error.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Key Learnings",
          text: [
            "This project was a profound learning experience. Auto-layout, atomic design principles, usability testing, and collaborative design tools, such as Figma and Miro, played pivotal roles in its success. We embraced the power of a design system and a style guide to maintain consistency throughout the platform.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Conclusion",
          text: [
            "The impact of this project has been overwhelmingly positive. Franchisees now have a reliable tool at their disposal, one that optimizes their stock replenishment process and bolsters their confidence in ordering decisions. This innovative solution has significantly streamlined the cosmetics group's operations, enhancing franchisee satisfaction and profitability.",
          ],
        },
      },
      {
        type: ContentType.PARAGRAPH,
        data: {
          title: "Acknowledgments",
          text: [
            "A special acknowledgment to Carla Fernandes, who led the project's meetings and usability testing, providing invaluable leadership. I am proud to have contributed insights, provocations, prototyping, and decision-making to this transformative project.",
          ],
        },
      },
    ],
  },
];
