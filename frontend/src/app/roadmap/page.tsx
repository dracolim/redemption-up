"use client";

import React from 'react'
import { type NextPage } from "next";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import {
    ActiveBookSvg,
    LockedBookSvg,
    CheckmarkSvg,
    LockedDumbbellSvg,
    FastForwardSvg,
    GoldenBookSvg,
    GoldenDumbbellSvg,
    GoldenTrophySvg,
    LessonCompletionSvg0,
    LessonCompletionSvg1,
    LessonCompletionSvg2,
    LessonCompletionSvg3,
    LockSvg,
    StarSvg,
    LockedTrophySvg,
    UpArrowSvg,
    ActiveTrophySvg,
    ActiveDumbbellSvg,
    PracticeExerciseSvg,
    FlowerVectorSvg,
    ArrowLeftSvg,
    HeadsUpSvg,
    CrossSVG
} from "@/components/Svgs";
import { useBoundStore } from '@/hooks/useBoundStore';
import { useRouter } from 'next/navigation';
import type { Tile, TileType, Unit } from "@/utils/units";
import { units } from '@/utils/units';
import Image from 'next/image';
import FinalTab from './finalTab';

type TileStatus = "LOCKED" | "ACTIVE" | "COMPLETE";

// LOGIC IS HERE!!!!!
const tileStatus = (tile: Tile, lessonsCompleted: number): TileStatus => {
    const lessonsPerTile = 1;
    const tilesCompleted = Math.floor(lessonsCompleted / lessonsPerTile);
    const tiles = units.flatMap((unit) => unit.tiles);
    const tileIndex = tiles.findIndex((t) => t === tile);

    if (tileIndex < tilesCompleted) {
        return "COMPLETE";
    }
    if (tileIndex > tilesCompleted) {
        return "LOCKED";
    }
    return "ACTIVE";
};

const TileIcon = ({
    tileType,
    status,
}: {
    tileType: TileType;
    status: TileStatus;
}): JSX.Element => {
    switch (tileType) {
        case "star":
            return status === "COMPLETE" ? (
                <CheckmarkSvg />
            ) : status === "ACTIVE" ? (
                <StarSvg />
            ) : (
                <LockSvg />
            );
        case "book":
            return status === "COMPLETE" ? (
                <GoldenBookSvg />
            ) : status === "ACTIVE" ? (
                <ActiveBookSvg />
            ) : (
                <LockedBookSvg />
            );
        case "fast-forward":
            return status === "COMPLETE" ? (
                <CheckmarkSvg />
            ) : status === "ACTIVE" ? (
                <StarSvg />
            ) : (
                <FastForwardSvg />
            );
        case "trophy":
            return status === "COMPLETE" ? (
                <GoldenTrophySvg />
            ) : status === "ACTIVE" ? (
                <ActiveTrophySvg />
            ) : (
                <LockedTrophySvg />
            );
    }
};

const tileLeftClassNames = [
    "left-0",
    "left-[-45px]",
    "left-[-70px]",
    "left-[-45px]",
    "left-0",
    "left-[45px]",
    "left-[70px]",
    "left-[45px]",
] as const;

type TileLeftClassName = (typeof tileLeftClassNames)[number];

const getTileLeftClassName = ({
    index,
    unitNumber,
    tilesLength,
}: {
    index: number;
    unitNumber: number;
    tilesLength: number;
}): TileLeftClassName => {
    if (index >= tilesLength - 1) {
        return "left-0";
    }

    const classNames =
        unitNumber % 2 === 1
            ? tileLeftClassNames
            : [...tileLeftClassNames.slice(4), ...tileLeftClassNames.slice(0, 4)];

    return classNames[index % classNames.length] ?? "left-0";
};

const tileTooltipLeftOffsets = [140, 95, 70, 95, 140, 185, 210, 185] as const;

type TileTooltipLeftOffset = (typeof tileTooltipLeftOffsets)[number];

const getTileTooltipLeftOffset = ({
    index,
    unitNumber,
    tilesLength,
}: {
    index: number;
    unitNumber: number;
    tilesLength: number;
}): TileTooltipLeftOffset => {
    if (index >= tilesLength - 1) {
        return tileTooltipLeftOffsets[0];
    }

    const offsets =
        unitNumber % 2 === 1
            ? tileTooltipLeftOffsets
            : [
                ...tileTooltipLeftOffsets.slice(4),
                ...tileTooltipLeftOffsets.slice(0, 4),
            ];

    return offsets[index % offsets.length] ?? tileTooltipLeftOffsets[0];
};

const getTileColors = ({
    tileType,
    status,
    defaultColors,
}: {
    tileType: TileType;
    status: TileStatus;
    defaultColors: `border-${string} bg-${string}`;
}): `border-${string} bg-${string}` => {
    switch (status) {
        case "LOCKED":
            if (tileType === "fast-forward") return defaultColors;
            return "border-[#b7b7b7] bg-[#e5e5e5]";
        case "COMPLETE":
            return "border-yellow-500 bg-yellow-400";
        case "ACTIVE":
            return defaultColors;
    }
};

const TileTooltip = ({
    selectedTile,
    index,
    unitNumber,
    tilesLength,
    description,
    status,
    closeTooltip,
}: {
    selectedTile: number | null;
    index: number;
    unitNumber: number;
    tilesLength: number;
    description: string;
    status: TileStatus;
    closeTooltip: () => void;
}) => {
    const tileTooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const containsTileTooltip = (event: MouseEvent) => {
            if (selectedTile !== index) return;
            const clickIsInsideTooltip = tileTooltipRef.current?.contains(
                event.target as Node,
            );
            if (clickIsInsideTooltip) return;
            closeTooltip();
        };

        window.addEventListener("click", containsTileTooltip, true);
        return () => window.removeEventListener("click", containsTileTooltip, true);
    }, [selectedTile, tileTooltipRef, closeTooltip, index]);

    const unit = units.find((unit) => unit.unitNumber === unitNumber);
    const activeBackgroundColor = unit?.backgroundColor ?? "bg-green-500";
    const increaseLessonsCompleted = useBoundStore((x: { increaseLessonsCompleted: any; }) => x.increaseLessonsCompleted);
    const { state, updateState } = useBoundStore();


    return (
        <div
            className={[
                "relative h-0 w-full",
                index === selectedTile ? "" : "invisible",
            ].join(" ")}
            ref={tileTooltipRef}
        >
            <div
                className={[
                    "absolute z-30 flex w-[300px] flex-col gap-4 rounded-xl p-4 font-bold transition-all duration-300",
                    status === "ACTIVE"
                        ? activeBackgroundColor
                        : status === "LOCKED"
                            ? "border-2 border-gray-200 bg-gray-100"
                            : "bg-yellow-400",
                    index === selectedTile ? "top-4 scale-100" : "-top-14 scale-0",
                ].join(" ")}
                style={{ left: "calc(50% - 150px)" }}
            >
                <div
                    className={[
                        "absolute left-[140px] top-[-8px] h-4 w-4 rotate-45",
                        status === "ACTIVE"
                            ? activeBackgroundColor
                            : status === "LOCKED"
                                ? "border-l-2 border-t-2 border-gray-200 bg-gray-100"
                                : "bg-yellow-400",
                    ].join(" ")}
                    style={{
                        left: getTileTooltipLeftOffset({ index, unitNumber, tilesLength }),
                    }}
                ></div>
                <div
                    className={[
                        "text-lg",
                        status === "ACTIVE"
                            ? "text-white"
                            : status === "LOCKED"
                                ? "text-gray-400"
                                : "text-yellow-600",
                    ].join(" ")}
                >
                    {description}
                </div>
                {status === "ACTIVE" ? (
                    <div>
                        <iframe
                            className='items-center justify-center w-full h-40'
                            src={unit?.tiles[index].videoSrc ?? ""}
                            allow='autoplay; encrypted-media'
                            title='video'
                        />
                            { unit?.tiles[index].type === "trophy" ? (
                                <button
                                    className="w-full rounded-xl bg-white p-3 uppercase text-black mt-3" 
                                    onClick={()=>{
                                        if (status === "ACTIVE") {
                                            increaseLessonsCompleted(1);
                                            updateState();
                                        };
                                    }}
                                    // disabled
                                >
                                    Complete
                                </button>
                        ): (<button
                            className="w-full rounded-xl bg-white p-3 uppercase text-black mt-3" 
                            onClick={()=>{
                                if (status === "ACTIVE") {
                                    increaseLessonsCompleted(1);
                                }
                            }}
                            // disabled
                        >
                            Next
                        </button>)}
                    </div>
                ) : status === "LOCKED" ? (
                    <button
                        className="w-full rounded-xl bg-gray-200 p-3 uppercase text-gray-400"
                        disabled
                    >
                        Locked
                    </button>
                ) : ( 
                    // COMPLETED
                    <iframe
                            className='items-center justify-center w-full h-40'
                            src={unit?.tiles[index].videoSrc ?? ""}
                            allow='autoplay; encrypted-media'
                            title='video'
                    />
                )}
            </div>
        </div>
    );
};

const UnitSection = ({ unit }: { unit: Unit }): JSX.Element => {
    const router = useRouter();

    const [selectedTile, setSelectedTile] = useState<null | number>(null);

    useEffect(() => {
        const unselectTile = () => setSelectedTile(null);
        window.addEventListener("scroll", unselectTile);
        return () => window.removeEventListener("scroll", unselectTile);
    }, []);

    const closeTooltip = useCallback(() => setSelectedTile(null), []);

    const lessonsCompleted = useBoundStore((x: { lessonsCompleted: any; }) => x.lessonsCompleted);

    return (
        <>
            <div className="relative mb-8 mt-[67px] flex max-w-2xl flex-col items-center gap-4">
                {unit.tiles.map((tile, i): JSX.Element => {
                    const status = tileStatus(tile, lessonsCompleted);
                    return (
                        <Fragment key={i}>
                            {(() => {
                                switch (tile.type) {
                                    case "star":
                                    case "book":
                                    case "dumbbell":
                                    case "trophy":
                                    case "fast-forward":
                                        if (tile.type === "trophy" && status === "COMPLETE") {
                                            return (
                                                <div className="relative">
                                                    <TileIcon tileType={tile.type} status={status} />
                                                    <div className="absolute left-0 right-0 top-6 flex justify-center text-lg font-bold text-yellow-700">
                                                        {unit.unitNumber}
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return (
                                            <div
                                                className={[
                                                    "relative -mb-4 h-[93px] w-[98px]",
                                                    getTileLeftClassName({
                                                        index: i,
                                                        unitNumber: unit.unitNumber,
                                                        tilesLength: unit.tiles.length,
                                                    }),
                                                ].join(" ")}
                                            >
                                                {tile.type === "fast-forward" && status === "LOCKED" ? (
                                                    <HoverLabel
                                                        text="Jump here?"
                                                        textColor={unit.textColor}
                                                    />
                                                ) : selectedTile !== i && status === "ACTIVE" ? (
                                                    <HoverLabel text="Start" textColor={unit.textColor} />
                                                ) : null}
                                                <LessonCompletionSvg
                                                    lessonsCompleted={lessonsCompleted}
                                                    status={status}
                                                />
                                                <button
                                                    className={[
                                                        "absolute m-3 rounded-full border-b-8 p-4",
                                                        getTileColors({
                                                            tileType: tile.type,
                                                            status,
                                                            defaultColors: `${unit.borderColor} ${unit.backgroundColor}`,
                                                        }),
                                                    ].join(" ")}
                                                    onClick={() => {
                                                        if (
                                                            tile.type === "fast-forward" &&
                                                            status === "LOCKED"
                                                        ) {
                                                            void router.push(
                                                                `/lesson?fast-forward=${unit.unitNumber}`,
                                                            );
                                                            return;
                                                        }
                                                        setSelectedTile(i);
                                                    }}
                                                >
                                                    <TileIcon tileType={tile.type} status={status} />
                                                    <span className="sr-only">Show lesson</span>
                                                </button>
                                            </div>
                                        )
                                }
                            })()}
                            <TileTooltip
                                selectedTile={selectedTile}
                                index={i}
                                unitNumber={unit.unitNumber}
                                tilesLength={unit.tiles.length}
                                description={(() => {
                                    switch (tile.type) {
                                        case "book":
                                        case "dumbbell":
                                        case "star":
                                            return tile.description;
                                        case "fast-forward":
                                            return status === "LOCKED"
                                                ? "Jump here?"
                                                : tile.description;
                                        case "trophy":
                                            return `Unit ${unit.unitNumber} review`;
                                    }
                                })()}
                                status={status}
                                closeTooltip={closeTooltip}
                            />
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
};

const getTopBarColors = (
    scrollY: number,
): {
    backgroundColor: `bg-${string}`;
    borderColor: `border-${string}`;
} => {
    const defaultColors = {
        backgroundColor: "bg-[#58cc02]",
        borderColor: "border-[#46a302]",
    } as const;

    if (scrollY < 680) {
        return defaultColors;
    } else if (scrollY < 1830) {
        return units[1] ?? defaultColors;
    } else {
        return units[2] ?? defaultColors;
    }
};

// MAIN COMPONENT
const RoadMap: NextPage = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const updateScrollY = () => setScrollY(globalThis.scrollY ?? scrollY);
        updateScrollY();
        document.addEventListener("scroll", updateScrollY);
        return () => document.removeEventListener("scroll", updateScrollY);
    }, [scrollY]);

    const state = useBoundStore((x: { state: any; }) => x.state);

    return (
        <>  
            <div className="mx-6">
                <div className="text-white mt-6 font-bold flex">
                    <ArrowLeftSvg/>
                    <span className='mt-1 ml-2'>Back to Jobs</span>
                </div>
            
                <div className='grid grid-cols-6 gap-1 w-full bg-white rounded-2xl text-global-primary-black p-3 flex items-center mt-4 relative'>
                    <div className="col-span-1">
                        <Image src="/images/techsupport.png" alt="techSupport" width={74} height={76}/>
                    </div>
                    <div className='col-span-5 ml-2'>
                        <div className='font-bold text-lg'>Tech Support Specialist</div>
                        <div>A technical support specialist combines technical expertise with customer service to advise both customers and employees and troubleshoot their hardware and software issues.</div>
                    </div>
                    <FlowerVectorSvg/>
                </div>
            </div>
            {isVisible && (
            <div className='mx-6 mt-4'>
                <div className="flex items-center p-5 text-md rounded-lg bg-gray-800 text-white relative z-20" role="alert">
                    <HeadsUpSvg/>
                    <div className='ml-3'>
                        Heads up! Complete the tasks stated at each checkpoint in order to unlock the next checkpoint.
                    </div>
                    <div className='relative bottom-4'>
                        <button onClick={() => {setIsVisible(false)}}>
                            <CrossSVG/>
                        </button>
                    </div>
                </div>
            </div> 
        )}

        {state ? (
            <div className="flex justify-center gap-3 sm:p-6 sm:pt-5 md:ml-24 lg:ml-64 lg:gap-12">
                <div className="flex max-w-2xl grow flex-col">
                    {units.map((unit) => (
                        <UnitSection unit={unit} key={unit.unitNumber} />
                    ))}
                </div>
            </div> ) : (
                <div className="flex justify-center gap-3 sm:p-6 sm:pt-5 md:ml-24 lg:ml-64 lg:gap-12 mb-[300px]">
                <div className="flex max-w-2xl grow flex-col">
                    {units.map((unit) => (
                        <UnitSection unit={unit} key={unit.unitNumber} />
                    ))}
                </div>
                </div>
            )}
            
            {state && (
                <FinalTab toDisplay={true} /> 
            )}
        </>
    );
};

export default RoadMap;

const LessonCompletionSvg = ({
    lessonsCompleted,
    status,
    style = {},
}: {
    lessonsCompleted: number;
    status: TileStatus;
    style?: React.HTMLAttributes<SVGElement>["style"];
}) => {
    if (status !== "ACTIVE") {
        return null;
    }
    switch (lessonsCompleted % 4) {
        case 0:
            return <LessonCompletionSvg0 style={style} />;
        case 1:
            return <LessonCompletionSvg1 style={style} />;
        case 2:
            return <LessonCompletionSvg2 style={style} />;
        case 3:
            return <LessonCompletionSvg3 style={style} />;
        default:
            return null;
    }
};

const HoverLabel = ({
    text,
    textColor,
}: {
    text: string;
    textColor: `text-${string}`;
}) => {
    const hoverElement = useRef<HTMLDivElement | null>(null);
    const [width, setWidth] = useState(72);

    useEffect(() => {
        setWidth(hoverElement.current?.clientWidth ?? width);
    }, [hoverElement.current?.clientWidth, width]);

    return (
        <div
            className={`absolute z-10 w-max animate-bounce rounded-lg border-2 border-gray-200 bg-white px-3 py-2 font-bold uppercase ${textColor}`}
            style={{
                top: "-25%",
                left: `calc(50% - ${width / 2}px)`,
            }}
            ref={hoverElement}
        >
            {text}
            <div
                className="absolute h-3 w-3 rotate-45 border-b-2 border-r-2 border-gray-200 bg-white"
                style={{ left: "calc(50% - 8px)", bottom: "-8px" }}
            ></div>
        </div>
    );
};