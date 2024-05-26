"use client";

/* Core */
import { Provider } from "react-redux";
import {useEffect, useState} from "react";
import MinimumScreen from "@/app/minimumScreen/page";


/* Instruments */
import { reduxStore } from "@/lib/redux";

export const Providers = (props: React.PropsWithChildren) => {
    return (
      <Provider store={reduxStore}>{props.children}</Provider>
  )};
