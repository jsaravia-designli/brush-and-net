// Tab bar — generated from Prototype v3 (Final).dc.html
export default function TabBar({ vm }) {
  const { is, tabs } = vm;
  return (
    <>
      {is.tabbar ? (
        <div style={{ position: "absolute", left: "16px", right: "16px", bottom: "22px", height: "62px", borderRadius: "999px", background: "var(--b-f6f7f9eb,#f6f7f9eb)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", border: "1px solid var(--l-ffffff,#ffffff)", boxShadow: "var(--shd,0 6px 20px -6px rgba(10,27,54,.09),0 1px 4px rgba(10,27,54,.04))", display: "flex", gap: "4px", padding: "5px", zIndex: "10" }}>
          {tabs.map((tb, tbIdx) => (
            <button key={tbIdx} onClick={tb.onClick} aria-current={tb.current} style={{ flex: "1 1 0", minWidth: "0", borderRadius: "999px", border: "0", background: tb.bg, boxShadow: tb.shadow, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", fontFamily: "inherit", fontSize: "11px", fontWeight: tb.weight, color: tb.color, cursor: "pointer", transition: "background .15s" }}>
              <i className={tb.iconCls} style={{ fontSize: "22px" }} />
              {tb.label}
            </button>
          ))}
        </div>
      ) : null}
    </>
  );
}
