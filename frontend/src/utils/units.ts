export type Unit = {
    unitNumber: number;
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
        description: "Form basic sentences, greet people",
        backgroundColor: "bg-[#EA193F]",
        textColor: "text-[#EA193F]",
        borderColor: "border-[#980621]",
        tiles: [
            {
                type: "star",
                description: "Learn more about Tech support specialist",
                subDescription: "In this roadmap you will learn about the Tech support specialist role, the skills required, and the career opportunities.",
            },
            {
                type: "book",
                description: "Day in the life of a tech support specialist",
                videoSrc: 'https://www.youtube.com/embed/KgaJZxaJ7NI?si=Ga3qWrXsEWKu'
            },
            { type: "book", description: "What are some skills required for this role?" ,videoSrc: 'https://www.youtube.com/embed/uGACkBKjPMQ?si=0MCeExNnVVd5ZMQM' },
            { type: "trophy", description: "What to expect in the future", subDescription: "New trends in technology are creating new possibilities for automation and artificial intelligence.Overall employment of computer support specialists is projected to grow 5 percent from 2022 to 2032, faster than the average for all occupations.Expected growth in numbers in the future!", showTab: true },
        ],
    }
    // {
    //     unitNumber: 2,
    //     description: "Get around in a city",
    //     backgroundColor: "bg-[#EA193F]",
    //     textColor: "text-[#EA193F]",
    //     borderColor: "border-[#980621]",
    //     tiles: [
    //         { type: "fast-forward", description: "Get around in a city" },
    //         { type: "book", description: "Personalized practice" },
    //         { type: "book", description: "One thing" },
    //         { type: "book", description: "Get around in a city" },
    //         { type: "book", description: "A very big family" },
    //         { type: "book", description: "Greet people" },
    //         { type: "book", description: "The red jacket" },
    //         { type: "book", description: "Personalized practice" },
    //         { type: "trophy", description: "Unit 2 review" },
    //     ],
    // },
    // {
    //     unitNumber: 3,
    //     description: "Order food and drink",
    //     backgroundColor: "bg-[#EA193F]",
    //     textColor: "text-[#EA193F]",
    //     borderColor: "border-[#980621]",
    //     tiles: [
    //         { type: "fast-forward", description: "Order food and drink" },
    //         { type: "book", description: "The passport" },
    //         { type: "book", description: "Order food and drinks" },
    //         { type: "book", description: "The honeymoon" },
    //         { type: "book", description: "Get around in a city" },
    //         { type: "book", description: "Personalized practice" },
    //         { type: "book", description: "Doctor Eddy" },
    //         { type: "trophy", description: "Unit 2 review" },
    //     ],
    // },
];
