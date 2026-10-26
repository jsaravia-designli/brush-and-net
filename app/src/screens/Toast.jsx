// Toast — generated from Prototype v3 (Final).dc.html
export default function Toast({ vm }) {
  const { is, toast } = vm;
  return (
    <>
      {is.toast ? (
        <div role="status" style={{ position: "absolute", top: "58px", left: "50%", transform: "translateX(-50%)", zIndex: "40", height: "40px", padding: "0 16px", borderRadius: "999px", background: "var(--b-0a1b36,#0a1b36)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: "600", whiteSpace: "nowrap" }}>
          <i className="ph-fill ph-check-circle" style={{ fontSize: "17px", color: "var(--t-7fd6a6,#7fd6a6)" }} />
          {toast}
        </div>
      ) : null}
    </>
  );
}
