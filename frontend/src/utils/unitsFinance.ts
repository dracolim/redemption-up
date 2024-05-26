export type Unit = {
    unitNumber: number;
    courseTitle: string;
    courseDescription: string;
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
        subDescription?: string[];
        videoSrc?: string;
        showTab?: boolean;
        subsequentLink?: string;
    };

export type TileType = Tile["type"];

export const units: readonly Unit[] = [
    {
        unitNumber: 1,
        courseTitle: "CPF 101: Introduction to Retirement Planning",
        courseDescription: "CPF 101 aids in retirement planning by offering a comprehensive guide on understanding and maximizing Singapore's CPF system, covering contributions, fund allocation, schemes for retirement, healthcare, and housing, and strategies for long-term financial security.",
        imgUrl: "/images/cpf-logo.png", 
        description: "Form basic sentences, greet people",
        backgroundColor: "bg-[#EA193F]",
        textColor: "text-[#EA193F]",
        borderColor: "border-[#980621]",
        tiles: [
            {
                type: "star",
                description: "Learn more about Retirement Sum",
                subDescription: ["In this roadmap you will learn about the concept of retirement sum , and learn what CPF has to offer."],
            },
            {
                type: "book",
                description: "What is Retirement Sum?",
                videoSrc: 'https://www.youtube.com/embed/5vfb4bc5ZJA',
                subsequentLink: '/finance/1'
            },
            {
                type: "book",
                description: "What is CPF LIFE?",
                videoSrc: 'https://www.youtube.com/embed/81dMbcUwm34?si=dGy9x1DdUkd7NNhy',
                subsequentLink: '/finance/2'
            },
            { type: "book", description: "Benefits of CPF Life" , subDescription: ['Payouts for life' , 'Safe product with high returns', 'Affordable']},
            { type: "book", description: "Types of Retirement Sum" ,videoSrc: 'https://www.youtube.com/embed/1icJSnkclY4?si=OoGqvMKLS11IWV_z', subDescription: ['Basic Retirement Sum (BRS): $840 - $900' , 'Full Retirement Sum (FRS):  $1,560 - $1,670', 'Enhanced Retirement Sum (ERS): $2,280 - $2,450'] },
            { type: "trophy", description: "Start Now",subDescription: ['Vist the link below to start your retirement planning'], subsequentLink: "https://www.cpf.gov.sg/member/infohub/educational-resources/what-is-the-cpf-retirement-sum" },
        ],
    },
    {
        unitNumber: 2,
        courseTitle: "CPF 201: CPF Life & Retirement Sum Options",
        courseDescription: "CPF 201: Retirement Sum is an advanced guide that helps individuals understand and manage the different Retirement Sum options within Singapore's CPF system, offering strategies to optimize retirement savings and ensure stable income during retirement.",
        imgUrl: "/images/cpf-logo.png", 
        description: "Form basic sentences, greet people",
        backgroundColor: "bg-[#EA193F]",
        textColor: "text-[#EA193F]",
        borderColor: "border-[#980621]",
        tiles: [
            {
                type: "star",
                description: "Learn more about Retirement Sum",
                subDescription: ["In this roadmap you will learn about the concept of retirement sum , and learn what CPF has to offer."],
            },
            {
                type: "book",
                description: "What is Retirement Sum?",
                videoSrc: 'https://www.youtube.com/embed/5vfb4bc5ZJA',
                subsequentLink: '/finance/1'
            },
            {
                type: "book",
                description: "What is CPF LIFE?",
                videoSrc: 'https://www.youtube.com/embed/81dMbcUwm34?si=dGy9x1DdUkd7NNhy',
                subsequentLink: '/finance/2'
            },
            { type: "book", description: "Benefits of CPF Life" , subDescription: ['Payouts for life' , 'Safe product with high returns', 'Affordable']},
            { type: "book", description: "Types of Retirement Sum" ,videoSrc: 'https://www.youtube.com/embed/1icJSnkclY4?si=OoGqvMKLS11IWV_z', subDescription: ['Basic Retirement Sum (BRS): $840 - $900' , 'Full Retirement Sum (FRS):  $1,560 - $1,670', 'Enhanced Retirement Sum (ERS): $2,280 - $2,450'] },
            { type: "trophy", description: "Start Now",subDescription: ['Vist this link to start your retirement planning'], subsequentLink: "https://www.cpf.gov.sg/member/infohub/educational-resources/what-is-the-cpf-retirement-sum" },
        ],
    },
    {
        unitNumber: 3,
        courseTitle: "CPF 202: Supplementary Retirement Scheme (SRS)",
        courseDescription: "CPF 202: Supplementary Retirement Scheme (SRS) is a detailed guide that delves into the Supplementary Retirement Scheme, a voluntary savings program in Singapore designed to complement the Central Provident Fund (CPF). The guide explains the benefits of the SRS, including tax advantages, flexible contributions, and investment opportunities. It covers how to open an SRS account, the rules for contributions and withdrawals, and strategies for maximizing the scheme's benefits. CPF 202 provides practical advice on integrating SRS into a comprehensive retirement plan to enhance financial security and achieve retirement goals.",
        imgUrl: "/images/cpf-logo.png", 
        description: "Form basic sentences, greet people",
        backgroundColor: "bg-[#EA193F]",
        textColor: "text-[#EA193F]",
        borderColor: "border-[#980621]",
        tiles: [
            {
                type: "star",
                description: "Learn more about Retirement Sum",
                subDescription: ["In this roadmap you will learn about the concept of retirement sum , and learn what CPF has to offer."],
            },
            {
                type: "book",
                description: "What is Retirement Sum?",
                videoSrc: 'https://www.youtube.com/embed/5vfb4bc5ZJA',
                subsequentLink: '/finance/1'
            },
            {
                type: "book",
                description: "What is CPF LIFE?",
                videoSrc: 'https://www.youtube.com/embed/81dMbcUwm34?si=dGy9x1DdUkd7NNhy',
                subsequentLink: '/finance/2'
            },
            { type: "book", description: "Benefits of CPF Life" , subDescription: ['Payouts for life' , 'Safe product with high returns', 'Affordable']},
            { type: "book", description: "Types of Retirement Sum" ,videoSrc: 'https://www.youtube.com/embed/1icJSnkclY4?si=OoGqvMKLS11IWV_z', subDescription: ['Basic Retirement Sum (BRS): $840 - $900' , 'Full Retirement Sum (FRS):  $1,560 - $1,670', 'Enhanced Retirement Sum (ERS): $2,280 - $2,450'] },
            { type: "trophy", description: "Start Now",subDescription: ['Vist this link to start your retirement planning'], subsequentLink: "https://www.cpf.gov.sg/member/infohub/educational-resources/what-is-the-cpf-retirement-sum" },
        ],
    },
];
