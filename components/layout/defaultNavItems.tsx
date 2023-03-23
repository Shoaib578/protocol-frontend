import React from "react";
import {
  CalendarIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
  MagnifyingGlassCircleIcon,
  SpeakerWaveIcon,
  CogIcon,
  SquaresPlusIcon

} from "@heroicons/react/24/outline";
import { NavItem } from "./Sidebar";

export const defaultNavItems: NavItem[] = [
  {
    label: "Projects",
    href: "/",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Appointments",
    href: "/appointments",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Domain",
    href: "/orders",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Orders",
    href: "/orders",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: <MagnifyingGlassCircleIcon className="w-6 h-6" />,
  },
  
  {
    label: "Addresses",
    href: "/addresses",
    icon: <SpeakerWaveIcon className="w-6 h-6" />,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: <SpeakerWaveIcon className="w-6 h-6" />,
  },
  {
    label: "Change Password",
    href: "/change-password",
    icon: <CogIcon className="w-6 h-6" />,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: <CogIcon className="w-6 h-6" />,
  },
  {
    label: "Logout",
    href: "/logout",
    icon: <SquaresPlusIcon className="w-6 h-6" />,
  },
];
