import { fixedColumnIds, metadata } from "@shared/metadata"
import { Link } from "@tanstack/react-router"
import { currentColumnIDAtom } from "~/atoms"

export function NavBar() {
  const currentId = useAtomValue(currentColumnIDAtom)
  const { toggle } = useSearchBar()
  return (
    <span className={$([
      "flex p-3 rounded-2xl bg-primary/1 text-sm",
      "dark:bg-slate-800/60 dark:backdrop-blur-sm",
      "dark:border dark:border-cyan-500/30",
      "shadow shadow-primary/20 hover:shadow-primary/50 transition-shadow-500",
      "dark:shadow-cyan-500/20 dark:hover:shadow-cyan-500/40",
    ])}
    >
      <button
        type="button"
        onClick={() => toggle(true)}
        className={$(
          "px-2 hover:(bg-primary/10 rounded-md) op-70 dark:op-90",
          "cursor-pointer transition-all",
        )}
      >
        更多
      </button>
      {fixedColumnIds.map(columnId => (
        <Link
          key={columnId}
          to="/c/$column"
          params={{ column: columnId }}
          className={$(
            "px-2 hover:(bg-primary/10 rounded-md) cursor-pointer transition-all",
            "dark:hover:bg-cyan-500/20 dark:hover:text-cyan-400",
            currentId === columnId ? "color-primary font-bold dark:text-cyan-400 dark:bg-cyan-500/20" : "op-70 dark:op-90",
          )}
        >
          {metadata[columnId].name}
        </Link>
      ))}
    </span>
  )
}
