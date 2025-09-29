import * as Tooltip from "@radix-ui/react-tooltip";
import * as Popover from "@radix-ui/react-popover";

export default function GuideButton() {
  const isTouch =
    typeof window !== "undefined" &&
    "ontouchstart" in window;

  if (isTouch) {
    // Mobile: use Popover
    return (
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            disabled
            className="px-6 py-3 text-gray-400 font-medium transition-all duration-300 border border-gray-200 rounded-lg cursor-not-allowed bg-gray-50"
          >
            Download Guide
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            side="top"
            align="center"
            className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm shadow-lg"
          >
            No guide uploaded yet
            <Popover.Arrow className="fill-gray-900" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }

  // Desktop: use Tooltip
  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            disabled
            className="px-6 py-3 text-gray-400 font-medium transition-all duration-300 border border-gray-200 rounded-lg cursor-not-allowed bg-gray-50"
          >
            Download Guide
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="top"
            align="center"
            className="rounded-md bg-gray-900 text-white px-3 py-2 text-sm shadow-lg"
          >
            No guide uploaded yet
            <Tooltip.Arrow className="fill-gray-900" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
