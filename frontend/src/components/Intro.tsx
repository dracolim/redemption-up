"use client";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { useState } from "react";

import React from "react";

const Intro = ({ open, setOpen }) => {
  // const [open, setOpen] = useState(true);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader className="flex flex-col">
          <AlertDialogTitle className="text-[34px] text-center">
            Meet Shane!
          </AlertDialogTitle>
          <Image
            src="/images/persona.svg"
            alt="writing"
            width={250}
            height={250}
            className="mx-auto"
          />
          <p>
            Hey there! For our app Defendy, we're going to step into the shoes
            of Shane and see how things look from his perspective.
          </p>
        </AlertDialogHeader>
        <AlertDialogDescription className="text-white">
          <div className="my-4">
            <h2 className="text-[20px] mb-3">A bit of background on Shane.</h2>
            <ul className="space-y-2 mb-4">
              <li>
                <strong>Age:</strong> 53 years old
              </li>
              <li>
                <strong>Job:</strong> Senior Customer Support Officer @ Telco
              </li>
              <li>
                <strong>Highest Education:</strong> Specialist Diploma
              </li>
              <li>
                <strong>Income:</strong> $5,500/month
              </li>
              <li>
                <strong>Savings:</strong> $1,650/month
              </li>
            </ul>

            <h2 className="text-[20px] mb-3">Retirement Plans</h2>
            <ul className="space-y-2 mb-4">
              <li>
                <strong>Retirement Age:</strong> 65 years old
              </li>
              <li>
                <strong>Expected Payout:</strong> $2,750/month
              </li>
            </ul>
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogAction onClick={() => setOpen(false)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Intro;
