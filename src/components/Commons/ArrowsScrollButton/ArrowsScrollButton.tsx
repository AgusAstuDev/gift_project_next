import { scrollToId } from "@/utils/scrollToId";
import styles from "./ArrowsScrollButton.module.css";

type ArrowsScrollButtonProps = {
  option: "down" | "up" | "gift";
  targetId: string;
  className?: string;
};

const ArrowDownSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 5v14M12 19l-7-7M12 19l7-7"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpSVG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 19V5M12 5l-7 7M12 5l7 7"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ArrowsScrollButton({
  option,
  targetId,
  className = "",
}: ArrowsScrollButtonProps) {
  const isDown = option === "down" || option === "gift";
  const ArrowSVG = isDown ? ArrowDownSVG : ArrowUpSVG;

  return (
    <div
      className={`${styles.arrowButton} ${className}`}
      onClick={() => scrollToId(targetId)}
      role="button"
      tabIndex={0}
      aria-label={`Ir ${isDown ? "abajo" : "arriba"}`}
      style={{ cursor: "pointer" }}
    >
      <ArrowSVG />
      {option === "gift" ? (
        <p style={{ fontSize: "18px" }}>🎁</p>
      ) : (
        <p style={{ fontSize: "14px" }}>
          {option === "down" ? "Siguiente" : "Volver"}
        </p>
      )}
      <ArrowSVG />
    </div>
  );
}
