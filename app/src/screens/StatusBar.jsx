// Status bar — generated from Prototype v3 (Final).dc.html
export default function StatusBar({ vm }) {
  const { statusBg, statusColor } = vm;
  return (
    <div style={{ position: "absolute", top: "0", left: "0", right: "0", height: "50px", zIndex: "20", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 30px 8px 34px", fontSize: "16px", fontWeight: "600", background: statusBg, color: statusColor, pointerEvents: "none" }}>
        <span>9:41</span>
        <i className="ph-fill ph-battery-high" style={{ fontSize: "22px" }} />
      </div>
  );
}
