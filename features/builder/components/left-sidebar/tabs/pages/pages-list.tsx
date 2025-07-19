import PageItem from "@/features/builder/components/left-sidebar/tabs/pages/page-item";
import fetchPages from "@/features/builder/functions/fetch-pages";
import { useQuery } from "@tanstack/react-query";

export default function PagesList() {
  const {
    data: pages,
    isPending,
    error
  } = useQuery({
    queryKey: ["pages"],
    queryFn: fetchPages
  });

  if (isPending)
    return (
      <div className="flex w-full grow items-center justify-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex w-full grow items-center justify-center">
        Error: {error.message}
      </div>
    );

  return (
    <div className="flex w-full grow flex-col overflow-y-auto">
      {pages.map(page => (
        <PageItem key={page.id} path={page.path} status={page.status} />
      ))}
    </div>
  );
}
