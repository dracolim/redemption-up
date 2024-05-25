export type Job = {
    jobNumber: number,
    jobRole: string;
    videos: Video[];
    resources: Resource[];
};

export type Video = {
    videoNumber: number;
    title: string;
    url: string;
}

export type Resource = {
    resourceNumber: number;
    imageUrl: string;
    link: string;
}

export const jobs: readonly Job[] = [
    {   
        jobNumber: 1,
        jobRole: "Tech support specialist",
        videos: [
            {    
                videoNumber: 1,
                title: "Learn more about Tech support specialist, Day 1",
                url: 'https://www.youtube.com/embed/4bYduTucOQM?si=N4NDyXJAd3LNMQfM'
            },
            {
                videoNumber: 2,
                title: "Learn more about Tech support specialist, Day 2",
                url: 'https://www.youtube.com/embed/81NtO0O9QF4?si=FT3VZ22GxF-XNlG1'
            },
            {
                videoNumber: 3,
                title: "Learn more about Tech support specialist, Day 3",
                url: 'https://www.youtube.com/embed/r7oNn27thO4?si=HRmmwzokznQHfFHl'
            }
        ],
        resources: [
            {
                resourceNumber: 1,
                imageUrl: "/images/TechSupportR1.png",
                link: "https://www.coursera.org/learn/technical-support-fundamentals"
            },
            {
                resourceNumber: 2, 
                imageUrl: "/images/TechSupportR2.png",
                link: "https://www.coursera.org/professional-certificates/ibm-technical-support"
            },
            {
                resourceNumber: 3,
                imageUrl: "/images/TechSupportR2.png",
                link: "https://www.coursera.org/learn/introduction-to-technical-support"
            }
        ]
    }
]