import { Smartphone, Monitor, Watch, Camera, Headphones, Gamepad } from "lucide-react";

interface MenuItem {
  label: string;
  icon: React.ElementType; // Icon component type
  isActive: boolean; // For active state
  id:number,
}

const menuItems: MenuItem[] = [
  { label: "Phones", icon: Smartphone, isActive: false, id:1 },
  { label: "Computers", icon: Monitor, isActive: false,id:2 },
  { label: "SmartWatch", icon: Watch, isActive: false,id: 3},
  { label: "Camera", icon: Camera, isActive: true, id:4 }, // Active item
  { label: "HeadPhones", icon: Headphones, isActive: false,id:5 },
  { label: "Gaming", icon: Gamepad, isActive: false,id:6 },
];

export default menuItems;
