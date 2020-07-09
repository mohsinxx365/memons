import MyIcon from "../components/MyIcon";

export const routes = [
  {
    key: 1,
    label: "Home",
    icon: <MyIcon icon="home" />,
    to: "/",
  },
  {
    key: 2,
    label: "Blog",
    icon: <MyIcon icon="blog" />,
    to: "/blog",
  },
  {
    key: 3,
    label: "Contact",
    icon: <MyIcon icon="contact" />,
    to: "/contact",
  },
];
