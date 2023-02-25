import useAppData from "@/data/hook/useAppData";
import ChangeThemeButton from "./ChangeThemeButton";
import Title from "./Title";

interface TopHeaderProps {
  title: string;
  subtitle: string;
}

export default function TopHeader(props: TopHeaderProps) {
  const appData = useAppData()

  return (
    <div className={`flex`}>
      <Title title={props.title} subtitle={props.subtitle} />
      <div className={`flex flex-grow justify-end`}>
      <ChangeThemeButton theme={appData.theme ?? "dark"} changeTheme={appData.changeTheme} />
      </div>
    </div>
  );
}
