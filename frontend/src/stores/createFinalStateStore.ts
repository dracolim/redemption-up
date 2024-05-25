import type { BoundStateCreator } from "@/hooks/useBoundStore";

export type FinalState = {
    state: boolean;
    updateState: () => void;
};

export const createFinalState: BoundStateCreator<FinalState> = (set) => ({
    state: false,
    updateState: () => set({ state: true }),
});