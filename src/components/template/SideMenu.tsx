import { IconeAjustes, IconeCasa, IconeSair, IconeSino } from "../icons";
import SideMenuItem from "./SideMenuItem";

export default function SideMenu() {
  function logoutAction() {
    //TODO
  }

  return (
    <aside
      className={`
        flex flex-col
        bg-gray-200 text-gray-700
        dark:bg-gray-900
    `}
    >
      <div
        className={`bg-gradient-to-r from-indigo-500 to-purple-800 h-20 w-20 flex flex-col items-center justify-center`}
      ></div>
      <ul className="flex-grow">
        <SideMenuItem url="/" text="Home" icon={IconeCasa} />
        <SideMenuItem url="/settings" text="Settings" icon={IconeAjustes} />
        <SideMenuItem
          url="/notifications"
          text="Notifications"
          icon={IconeSino}
        />
      </ul>

      <ul>
        <SideMenuItem
          text="Sair"
          icon={IconeSair}
          onClick={logoutAction}
          className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
        />
      </ul>
    </aside>
  );
}
