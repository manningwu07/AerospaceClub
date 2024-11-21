import { ScrollArea } from "~/components/ui/scroll-area";
import type { DataStructure } from "~/utils/dataStructure";
import About from "~/pages/about";
import Events from "~/pages/events";
import Academy from "~/pages/academy";
import Teams from "~/pages/teams";
import LandingPage from "~/pages/LandingPage";

interface PreviewPaneProps {
  data: DataStructure;
  activePage: string;
  width: number;
}

export function PreviewPane({ data, activePage, width }: PreviewPaneProps) {
  // Change this to page names
  const renderPreview = () => {
    switch (activePage) {
      case "landing":
        return <LandingPage adminContent={data} />;
      case "academy":
        return <Academy adminContent={data} />;
      case "about":
        return <About adminContent={data} />;
      case "events":
        return <Events adminContent={data} />;
      case "teams":
        return <Teams adminContent={data} />;
      default:
        return <LandingPage adminContent={data} />;
    }
  };

  return (
    <div className="bg-white" style={{ width: `${width}%` }}>
      <ScrollArea className="h-full w-full">{renderPreview()}</ScrollArea>
    </div>
  );
}
