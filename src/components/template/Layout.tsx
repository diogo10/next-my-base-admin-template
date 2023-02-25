import useAppData from "@/data/hook/useAppData";
import AppContent from "./Content";
import SideMenu from "./SideMenu";
import TopHeader from "./TopHeader";

interface LayoutProps {
  title: string;
  subtitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const {theme} = useAppData()
  
  return (
    <div className={`${theme} flex h-screen w-screen`}>
      <SideMenu />
      <div className={`flex flex-col w-full p-7 bg-gray-600 dark:bg-gray-800`}>
        <TopHeader title={props.title} subtitle={props.subtitle} />
        <AppContent>{props.children}</AppContent>
      </div>
    </div>
  );
}
