import type { StateCreator } from "zustand";
import { create } from "zustand";
import type { GoalXpSlice } from "@/stores/createGoalXpStore";
import { createGoalXpSlice } from "@/stores/createGoalXpStore";
import type { LessonSlice } from "@/stores/createLessonStore"
import { createLessonSlice } from "@/stores/createLessonStore";
import type { UserSlice } from "@/stores/createUserStore";
import { createUserSlice } from "@/stores/createUserStore";

type BoundState = GoalXpSlice &
    LessonSlice &
    UserSlice 

export type BoundStateCreator<SliceState> = StateCreator<
    BoundState,
    [],
    [],
    SliceState
>;

export const useBoundStore = create<BoundState>((...args: any) => ({
    ...createGoalXpSlice(...args),
    ...createLessonSlice(...args),
    ...createUserSlice(...args),
}));