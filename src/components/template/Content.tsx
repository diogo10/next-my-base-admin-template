interface AppContentProps {
  children?: any;
}

export default function AppContent(props: AppContentProps) {
  return (
    <div className={`flex flex-col mt-7 dark:text-gray-200 `}>
      {props.children}
    </div>
  );
}
