// Shopping — generated from Prototype v3 (Final).dc.html
export default function ShoppingScreen({ vm }) {
  const { back, is, isOwner, markBought, markLabel, openShopAdd, repeatKnob, repeatSub, repeatTrack, setShopNote, shopByTech, shopEmpty, shopHasChecked, shopItems, shopNote, shopRepeat, shopSub, t, toggleRepeat } = vm;
  return (
    <>
      {is.shopping ? (
        <>
        <div data-screen-label="Shopping list" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "0", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "120px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={back} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{t.shopping}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{shopSub}</span>
          </div>
          <label style={{ margin: "16px 16px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "14px", fontWeight: "600", paddingLeft: "8px" }}>{t.shNotes}</span>
            <textarea value={shopNote ?? ''} onChange={setShopNote} placeholder={t.shNotesPh} rows="2" style={{ borderRadius: "14px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", padding: "12px 16px", fontFamily: "inherit", fontSize: "16px", lineHeight: "1.4", color: "var(--t-0a1b36,#0a1b36)", outline: "none", resize: "none" }} />
          </label>
          {" "}
          <button onClick={toggleRepeat} aria-pressed={shopRepeat} style={{ margin: "4px 24px 0", width: "calc(100% - 48px)", minHeight: "60px", display: "flex", alignItems: "center", gap: "14px", background: "none", border: "0", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
            <i className="ph ph-repeat" style={{ fontSize: "22px", color: "var(--t-a3adbb,#a3adbb)" }} />
            <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "16px", fontWeight: "500" }}>{t.shRepeat}</span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{repeatSub}</span>
            </span>
            <span style={{ width: "46px", height: "28px", flexShrink: "0", borderRadius: "999px", background: repeatTrack, padding: "3px", display: "flex", transition: "background .15s" }}>
              <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--k-ffffff,#ffffff)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.25))", marginLeft: repeatKnob, transition: "margin .15s" }} />
            </span>
          </button>
          {isOwner ? (
            <>
            <div style={{ padding: "8px 24px 6px" }}><span style={{ fontSize: "14px", fontWeight: "600" }}>{t.techTotals}</span></div>
            <div style={{ margin: "0 16px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(96px,1fr))", gap: "8px" }}>
              {shopByTech.map((b, bIdx) => (
                <div key={bIdx} style={{ borderRadius: "14px", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", padding: "10px 12px", display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{b.name}</span>
                  <span style={{ fontSize: "17px", fontWeight: "700" }}>{b.total}</span>
                  <span style={{ fontSize: "12px", color: "var(--t-5b6b82,#5b6b82)" }}>{b.items}</span>
                </div>
              ))}
            </div>
            </>
          ) : null}
          <div style={{ margin: "8px 16px 0", borderRadius: "14px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "12px 14px", display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.45", color: "var(--t-34496a,#34496a)" }}>
            <i className="ph ph-info" style={{ fontSize: "18px", color: "var(--t-0a6f8a,#0a6f8a)", flexShrink: "0", marginTop: "1px" }} />
            <span style={{ textWrap: "pretty" }}>{t.shopInfo}</span>
          </div>
          <div style={{ padding: "10px 24px 0" }}>
            {shopItems.map((it, itIdx) => (
              <button key={itIdx} onClick={it.onClick} aria-pressed={it.checked} style={{ width: "100%", display: "flex", alignItems: "center", gap: "14px", minHeight: "60px", border: "0", borderTop: it.divider, background: "none", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left", padding: "0" }}>
                <span style={{ width: "24px", height: "24px", flexShrink: "0", borderRadius: "7px", background: it.boxBg, border: `1.5px ${it.boxStyle ?? ''} ${it.boxBorder ?? ''}`, color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className={it.checkCls} style={{ fontSize: "13px" }} /></span>
                <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500", color: it.color, textDecoration: it.deco }}>{it.name}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{it.qty}</span>
                  {it.hasBy ? (
                    <span style={{ fontSize: "12px", fontWeight: "600", color: "var(--t-0a6f8a,#0a6f8a)", display: "flex", alignItems: "center", gap: "4px", marginTop: "2px" }}>
                      <i className="ph ph-user" style={{ fontSize: "13px" }} />
                      {it.byTxt}
                    </span>
                  ) : null}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{it.cost}</span>
              </button>
            ))}
            {shopEmpty ? (
              <div style={{ minHeight: "64px", display: "flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "600", color: "var(--t-0f5c3b,#0f5c3b)" }}>
                <i className="ph-fill ph-check-circle" style={{ fontSize: "20px" }} />
                {t.allBought}
              </div>
            ) : null}
          </div>
          <button onClick={openShopAdd} style={{ margin: "8px 16px 0", width: "calc(100% - 32px)", height: "52px", borderRadius: "14px", border: "1.5px dashed var(--l-c9d0da,#c9d0da)", background: "none", color: "var(--t-34496a,#34496a)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
            <i className="ph-bold ph-plus" style={{ fontSize: "15px" }} />
            {t.shAddItem}
          </button>
        </div>
        {shopHasChecked ? (
          <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", padding: "14px 16px 0", zIndex: "10" }}>
            <button onClick={markBought} style={{ width: "100%", height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
              <i className="ph-bold ph-check" style={{ fontSize: "16px" }} />
              {markLabel}
            </button>
          </div>
        ) : null}
        </>
      ) : null}
    </>
  );
}
