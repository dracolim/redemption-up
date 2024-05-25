"use client"

import React from 'react'
import Link from 'next/link'
import { TbHomeFilled } from "react-icons/tb";
import { IoSchool } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { TbCoinFilled } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathName = usePathname();

    console.log('this is pathname: ', pathName);

    const isActive = (pathname: string) => pathName === pathname;

    return (
        <div className="fixed bottom-0 w-full bg-navbarbg">
            <div className="flex justify-around p-2 items-center">
                <Link href="/">
                    <div className={
                        `${isActive("/") ? "bg-red-500 text-white rounded-lg" : "text-navbarbtn-gray"} py-3 px-5`
                    }>
                        <TbHomeFilled size={30} />
                    </div>
                </Link>
                <Link href="/learn">
                    <div className={
                        `${isActive("/learn") ? "bg-red-500 text-white rounded-lg" : "text-navbarbtn-gray"} py-3 px-5`
                    }>
                        <IoSchool size={30} />
                    </div>
                </Link>
                <Link href="/shorts">
                    <div className={
                        `${isActive("/shorts") ? "bg-red-500 text-white rounded-lg" : "text-navbarbtn-gray"} py-3 px-5`
                    }>
                        <SiYoutubeshorts size={30} />
                    </div>
                </Link>
                <Link href="/finance">
                    <div className={
                        `${isActive("/finance") ? "bg-red-500 text-white rounded-lg" : "text-navbarbtn-gray"} py-3 px-5`
                    }>
                        <TbCoinFilled size={30} />
                    </div>
                </Link>
                <Link href="/settings">
                    <div className={
                        `${isActive("/settings") ? "bg-red-500 text-white rounded-lg" : "text-navbarbtn-gray"} py-3 px-5`
                    }>
                        <IoIosSettings size={30} />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;