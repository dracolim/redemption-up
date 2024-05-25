import { units } from "@/utils/units";
import type { BoundStateCreator } from "@/hooks/useBoundStore";

export type LessonSlice = {
    lessonsCompleted: number;
    increaseLessonsCompleted: (by?: number) => void;
};

export const createLessonSlice: BoundStateCreator<LessonSlice> = (set) => ({
    lessonsCompleted: 0,
    increaseLessonsCompleted: (by = 1) =>
        set(({ lessonsCompleted }: { lessonsCompleted: number }) => ({
            lessonsCompleted: lessonsCompleted + by,
        })),
});
