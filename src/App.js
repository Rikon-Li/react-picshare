import React from "react";
import { TabBar, TabItem } from "./components/app-tab-bar";

const tabData = [
  {
    id: 1,
    name: "首页",
    path: "/home",
    icon: "icon-instagram-outline",
    selectedIcon: "icon-instagram-fill",
  },
  {
    id: 2,
    name: "发现",
    path: "/category",
    icon: "icon-compass-outline",
    selectedIcon: "icon-compass-fill",
  },
  {
    id: 3,
    name: "消息",
    path: "/cart",
    icon: "icon-message-outline",
    selectedIcon: "icon-message-fill",
  },
  {
    id: 4,
    name: "我的",
    path: "/mine",
    icon: "icon-smile-outline",
    selectedIcon: "icon-smile-fill",
  },
];
export default function App() {
  return (
    <div>
      <TabBar>
        {tabData.map((item) => (
          <TabItem key={item.id} {...item} />
        ))}
      </TabBar>
    </div>
  );
}
