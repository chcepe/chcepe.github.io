import { Props as WorkExperienceProps } from "components/WorkExperience/WorkExperience";
import { Company } from "models";

export const WORK_EXPERIENCES: WorkExperienceProps[] = [
  {
    title: "Software Engineer",
    desc: (
      <>
        Working under the B2B Team, helping them build products for our partners
        to easily connect and distribute Omio Inventory all over the world.
      </>
    ),
    duration: "Jul 2021 - Present",
    technologies: [
      "Javascript",
      "Typescript",
      "React",
      "GraphQL",
      "Apollo",
      "Cypress",
      "styled-components",
      "Go",
    ],
    company: {
      id: Company.OMIO,
      logo: "/images/company-logos/omio.jpg",
    },
    achievements: [
      <>
        Created several components that is used in multiple places for our B2C &
        B2B products.
      </>,
      <>
        Developed MVP for Omio's B2B Product called "Booking Tool" which
        utilizes Omio API, to provide a tool for our partners where they can
        book and manage their customers' trips.
      </>,
      <>
        Implemented new features on Booking Tool such as Loading Earlier/Later
        Journeys, Search Results Filters, Seat Reservation, Ticket Types,
        Dynamic fields for Passengers, and Booking List Filters.
      </>,
      <>
        Migrated Omio's Booking Tool widget, originally written in Svelte to
        React.
      </>,
      <>
        Improved Whitelabel Config Editor by adding styling previews, form tabs,
        input validations, suggester for font selection, etc.
      </>,
      <>
        Continuosly improving different parts of Partnerships Portal including
        the page for API documentation, User & Partner config, Affiliate Widget
        config, etc.
      </>,
      <>
        Built the Partnerships Service Portal (PSP) from scratch on top of our
        JIRA Service Desk, which is now used to handle issues and communicate
        with partners.
      </>,
      <>
        Part of the on-call rotation to give engineering support to our
        partners.
      </>,
    ],
  },
  {
    title: "Software Engineer",
    desc: (
      <>
        Worked for a digital agency partnered with several early-stage startups
        to build their products from scratch. Together with a dedicated team per
        startup, we turn their ideas into reality.
      </>
    ),
    duration: "Jul 2019 - May 2021",
    technologies: [
      "Javascript",
      "Typescript",
      "React",
      "NextJS",
      "Typescript",
      "GraphQL",
      "Apollo",
      "Cypress",
      "styled-components",
      "Go",
      "Ant Design",
      "Figma",
      "InVision",
      "Webflow",
    ],
    company: {
      id: Company.OAKS_LAB,
      logo: "/images/company-logos/oakslab.jpg",
    },
    achievements: [
      <>
        Built an MVP for a loyalty rewards platform called{" "}
        <a target="_blank" href="https://www.coinflip.network/">
          Coinflip
        </a>
        .
      </>,
      <>
        Continuosly improving{" "}
        <a target="_blank" href="https://oakslab.com/">
          oakslab.com
        </a>{" "}
        landing page.
      </>,
      <>
        Refactor & bootstrapped{" "}
        <a target="_blank" href="https://sindro.io/">
          Sindro.io
        </a>
        's gym management platform using React, TypeScript, and GraphQL,
        originally written in React classes, Redux, and REST.
      </>,
      <>
        Contributed in the early stage of building{" "}
        <a target="_blank" href="https://lifebrand.life/">
          LifeBrand
        </a>
        's social media scanner webapp.
      </>,
      <>
        Developed the frontend of{" "}
        <a target="_blank" href="https://www.cravedelivery.com/">
          Crave Delivery
        </a>{" "}
        food management portal from scratch, together with one other frontend
        engineer.
      </>,
      <>
        Led and created the web version of{" "}
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/crave-delivery/id1505759548"
        >
          Crave Delivery app
        </a>{" "}
        aka{" "}
        <a target="_blank" href="https://catering.cravedelivery.com/">
          Crave Delivery for Catering
        </a>{" "}
        from scratch, together with two junior frontend engineers.
      </>,
    ],
  },
  {
    title: "Sr. Software Engineer",
    desc: (
      <>
        Former resident in Liquid Studio, worked under the AI Global Asset Dev
        team and helped them develop Accenture's Proof of Concept projects
        (POCs) for Robotic Process Automation (RPA) and AI-related projects
      </>
    ),
    duration: "Jan 2019 - Jun 2019",
    technologies: [
      "Python",
      "React",
      "TensorFlow",
      "scikit-learn",
      "bot-framework",
      "OpenCV",
    ],
    company: {
      id: Company.ACCENTURE,
      logo: "/images/company-logos/accenture.jpg",
    },
    achievements: [
      <>
        Created a case study that detects and recognizes plate numbers of cars
        from any kind of document, using WorkFusion and OpenCV.
      </>,
      <>
        Built{" "}
        <a target="_blank" href="https://chcepe.github.io/acn-phoebe-static/">
          Phoebe
        </a>
        , an SPA with a helpful chatbot used by Accenture AI Training Team.
      </>,
      <>
        Developed a case study to help dyslexic people read and write with the
        help of emerging technologies such as Handwriting recognition (HWR) and
        Text-to-Speech, which later won in a Hackathon for AI category.
      </>,
    ],
  },
  {
    title: "Software Engineer",
    desc: (
      <>
        Created applications that engaged our customers with digital
        transformation through integrating various Microsoft Azure technologies
        into their businesses.
      </>
    ),
    duration: "Nov 2017 - Dec 2018",
    technologies: [
      "Javascript",
      "React",
      "NextJS",
      "Language Understanding (LUIS)",
      "bot-framework",
      "Microsoft Azure",
      "Azure Logic Apps",
      "Cognitive Services",
    ],
    company: {
      id: Company.TECH_ONE_GLOBAL,
      logo: "/images/company-logos/techone.jpg",
    },
    achievements: [
      <>
        Created Lufthansa Philippines' CMR platform on top of their Sharepoint,
        which is used to manager their partners' orders & sales.
      </>,
      <>
        Developed Lufthansa Philippines' careers website on top of their
        Sharepoint.
      </>,
      <>
        Built{" "}
        <a target="_blank" href="https://www.youtube.com/watch?v=1_0d2O59Fy0">
          Cornelia
        </a>{" "}
        from scratch, which is a tool used to create chatbots without coding,
        integrated with Microsoft LUIS and Bot Framework.
      </>,
    ],
  },
  {
    title: "Student Partner",
    desc: (
      <>
        Engaged students from different universities nationwide to use Microsoft
        technologies, run workshops and hackathons, and hosted tech events and
        give demos on campus.
      </>
    ),
    duration: "Oct 2016 - Nov 2017",
    technologies: [
      "Azure Logic Apps",
      "Microsoft Azure",
      "bot-framework",
      "Microsoft 365",
    ],
    company: {
      id: Company.MICROSOFT,
      logo: "/images/company-logos/microsoft.jpg",
    },
    achievements: [
      <>
        Gave 10+ talks and workshops to different universities in the
        Philippines, advocating Chatbots, React and different Microsoft
        technologies.
      </>,
      <>
        Helped hosting hackathon events and{" "}
        <a target="_blank" href="https://hourofcode.com/cz">
          Hour of Code
        </a>{" "}
        on several campuses around Manila.
      </>,
    ],
  },
];
