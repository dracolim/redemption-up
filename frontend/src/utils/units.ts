export type Unit = {
    unitNumber: number;
    jobTitle: string;
    jobDescription: string;
    imgUrl: string;
    description: string;
    backgroundColor: `bg-${string}`;
    textColor: `text-${string}`;
    borderColor: `border-${string}`;
    tiles: Tile[];
};

export type Tile =
    | {
        type: "star" | "dumbbell" | "book" | "trophy" | "fast-forward";
        description: string;
        subDescription?: string;
        videoSrc?: string;
        showTab?: boolean;
    };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
    {
        unitNumber: 1,
        jobTitle: "Tech Support Specialist",
        jobDescription: "A technical support specialist combines technical expertise with customer service to advise both customers and employees and troubleshoot their hardware and software issues.",
        imgUrl: "/images/techsupport.png", 
        description: "Form basic sentences, greet people",
        backgroundColor: "bg-[#EA193F]",
        textColor: "text-[#EA193F]",
        borderColor: "border-[#980621]",
        tiles: [
            {
                type: "star",
                description: "Learn more about Tech Support Specialist",
                subDescription: "In this roadmap you will learn about the Tech support specialist role, the skills required, and the career opportunities.",
            },
            {
                type: "book",
                description: "Day in the life of a Tech Support Specialist",
                videoSrc: 'https://www.youtube.com/embed/KgaJZxaJ7NI?si=Ga3qWrXsEWKu'
            },
            { type: "book", description: "What are some skills required for this role?" ,videoSrc: 'https://www.youtube.com/embed/uGACkBKjPMQ?si=0MCeExNnVVd5ZMQM' },
            { type: "trophy", description: "What to expect in the future", subDescription: "New trends in technology are creating new possibilities for automation and artificial intelligence.Overall employment of computer support specialists is projected to grow 5 percent from 2022 to 2032, faster than the average for all occupations.Expected growth in numbers in the future!", showTab: true },
        ],
    },
    {
        unitNumber: 2,
        jobTitle: "Product Manager",
        jobDescription: "A Product Manager guides a product's development from conception to launch, coordinating between teams to ensure it meets customer needs and aligns with company goals..",
        imgUrl: "/images/PM-logo.svg",
        description: "Get around in a city",
        backgroundColor: "bg-[#EA193F]",
        textColor: "text-[#EA193F]",
        borderColor: "border-[#980621]",
        tiles: [
            {
                type: "star",
                description: "Learn more about Product Manager",
                subDescription: "In this roadmap you will learn about the Product Manager role, the skills required, and the career opportunities.",
            },
            {
                type: "book",
                description: "Day in the life of a Product Manager",
                videoSrc: 'https://www.youtube.com/embed/hoPRgVhz8CQ?si=Itb1ua-35u2y4Phs'
            },
            { type: "book", description: "What are some skills required for this role?" ,videoSrc: 'https://www.youtube.com/embed/hoPRgVhz8CQ?si=Itb1ua-35u2y4Phs' },
            { type: "trophy", description: "What to expect in the future", subDescription: "By 2024, Agile product management methodologies will be the norm. It's all about collaboration, flexibility, and continuous improvement.", showTab: true },
        ],
    },
    {
        unitNumber: 3,
        jobTitle: "Full Stack Developer",
        jobDescription: "A Full Stack Developer is a versatile programmer skilled in both front-end and back-end development, capable of handling all aspects of web application projects to create cohesive and functional products.",
        imgUrl: "/images/dev-logo.svg",
        description: "Order food and drink",
        backgroundColor: "bg-[#EA193F]",
        textColor: "text-[#EA193F]",
        borderColor: "border-[#980621]",
        tiles: [
            {
                type: "star",
                description: "Learn more about Full Stack Developer",
                subDescription: "In this roadmap you will learn about the Full Stack Developer role, the skills required, and the career opportunities.",
            },
            {
                type: "book",
                description: "Day in the life of a Full Stack Developer",
                videoSrc: 'https://www.youtube.com/embed/BNPKelgqvHI?si=v4CV21DQCFqwu13h'
            },
            { type: "book", description: "What are some skills required for this role?" ,videoSrc: 'https://www.youtube.com/embed/NWnBxQjssvQ?si=GfVRwN58LS0c6XRV' },
            { type: "trophy", description: "What to expect in the future", subDescription: "The future may also see the rise of hybrid roles that require a combination of skills. Full stack developers may be expected to have expertise in areas like DevOps, microservices, and augmented reality in addition to their core development skills.", showTab: true },
        ],
    },
];
