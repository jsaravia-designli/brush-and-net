// Sheets — generated from Prototype v3 (Final).dc.html
export default function Sheets({ vm }) {
  const { addTypes, arQ, canAddPool, chemOptions, closeSheet, confirmArchive, confirmCost, confirmOther, cs, is, keys, noChemOptions, noOffRoute, noOffRouteText, offRoute, openAddPool, otherBtnBg, otherEmpty, otherName, pf, pfEstimate, poolQ, rc, rd, sa, savePoolForm, se, setOtherName, setPoolQ, showMoney, soonTitle, stopProp, t } = vm;
  return (
    <>
      {is.sheet ? (
        <div onClick={closeSheet} style={{ position: "absolute", inset: "0", zIndex: "30", background: "var(--b-0a1b3659,#0a1b3659)", display: "flex", alignItems: "flex-end" }}>
          <div onClick={stopProp} style={{ width: "100%", background: "var(--s-ffffff,#ffffff)", borderRadius: "28px 28px 0 0", padding: "10px 16px 34px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ alignSelf: "center", width: "36px", height: "5px", borderRadius: "3px", background: "var(--b-dde2e8,#dde2e8)" }} />
            {is.sheetAdd ? (
              <>
              <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", padding: "4px 8px 0" }}>{t.addAStop}</span>
              <div style={{ padding: "0 8px" }}>
                <button onClick={openAddPool} style={{ width: "100%", minHeight: "64px", background: "none", border: "0", display: "flex", alignItems: "center", gap: "14px", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-e3f1f5,#e3f1f5)", color: "var(--t-0a6f8a,#0a6f8a)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="ph ph-swimming-pool" style={{ fontSize: "20px" }} /></span>
                  <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "16px", fontWeight: "600" }}>{t.poolForToday}</span>
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.poolForTodaySub}</span>
                  </span>
                  <i className="ph ph-caret-right" style={{ fontSize: "16px", color: "var(--t-6b7889,#6b7889)" }} />
                </button>
                {addTypes.map((a, aIdx) => (
                  <button key={aIdx} onClick={a.onClick} style={{ width: "100%", minHeight: "64px", background: "none", border: "0", borderTop: a.divider, display: "flex", alignItems: "center", gap: "14px", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-fdf3dd,#fdf3dd)", color: "var(--t-c98a12,#c98a12)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className={a.iconCls} style={{ fontSize: "20px" }} /></span>
                    <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{a.label}</span>
                      <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{a.sub}</span>
                    </span>
                    <i className="ph ph-caret-right" style={{ fontSize: "16px", color: "var(--t-6b7889,#6b7889)" }} />
                  </button>
                ))}
              </div>
              </>
            ) : null}
            {is.sheetAddPool ? (
              <>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 8px 0" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{t.poolForToday}</span>
                <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.poolForTodaySub}</span>
              </div>
              <div style={{ height: "48px", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px" }}>
                <i className="ph ph-magnifying-glass" style={{ fontSize: "19px", color: "var(--t-5b6b82,#5b6b82)" }} />
                <input value={poolQ ?? ''} onChange={setPoolQ} placeholder={t.search} style={{ flex: "1", minWidth: "0", border: "0", background: "none", outline: "none", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)" }} />
              </div>
              <div style={{ padding: "0 8px", maxHeight: "300px", overflowY: "auto", scrollbarWidth: "none" }}>
                {offRoute.map((p, pIdx) => (
                  <button key={pIdx} onClick={p.onClick} style={{ width: "100%", minHeight: "60px", background: "none", border: "0", borderTop: p.divider, display: "flex", alignItems: "center", gap: "14px", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                    <span style={{ width: "40px", height: "40px", flexShrink: "0", borderRadius: "50%", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a2a5c,#0a2a5c)", fontSize: "13px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{p.initials}</span>
                    <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                      <span style={{ fontSize: "16px", fontWeight: "600" }}>{p.name}</span>
                      <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{p.sub}</span>
                    </span>
                    <i className="ph-bold ph-plus" style={{ fontSize: "16px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
                  </button>
                ))}
                {noOffRoute ? (
                  <span style={{ display: "block", padding: "8px 0", fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{noOffRouteText}</span>
                ) : null}
              </div>
              </>
            ) : null}
            {is.sheetPoolForm ? (
              <>
              <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", padding: "4px 8px 0" }}>{t.newPool}</span>
              <div style={{ maxHeight: "520px", overflowY: "auto", scrollbarWidth: "none", display: "flex", flexDirection: "column", gap: "12px", padding: "0 8px" }}>
                {pf.fields.map((f, fIdx) => (
                  <label key={fIdx} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{f.label}</span>
                    <span style={{ height: "52px", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px" }}>
                      <i className={f.iconCls} style={{ fontSize: "19px", color: "var(--t-5b6b82,#5b6b82)" }} />
                      <input type={f.type} value={f.value ?? ''} onChange={f.onChange} placeholder={f.ph} style={{ flex: "1", minWidth: "0", height: "100%", border: "0", background: "none", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                    </span>
                  </label>
                ))}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.fFee}</span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "6px" }}>
                    {pf.fees.map((x, xIdx) => (
                      <button key={xIdx} onClick={x.onClick} aria-pressed={x.on} style={{ height: "46px", borderRadius: "999px", border: "0", background: x.bg, color: x.color, fontFamily: "inherit", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>{x.label}</button>
                    ))}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.scTitle}</span>
                  <div style={{ height: "44px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "4px" }}>
                    {pf.sc?.freqs.map((o, oIdx) => (
                      <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer", lineHeight: "1.1" }}>{o.label}</button>
                    ))}
                  </div>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{pf.sc?.hint}</span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: "4px" }}>
                    {pf.sc?.days.map((d, dIdx) => (
                      <button key={dIdx} onClick={d.onClick} aria-pressed={d.on} style={{ height: "44px", borderRadius: "12px", border: "0", background: d.bg, color: d.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>{d.label}</button>
                    ))}
                  </div>
                </div>
                <button onClick={pf.toggleDog} aria-pressed={pf.dog} style={{ width: "100%", minHeight: "52px", display: "flex", alignItems: "center", gap: "14px", background: "none", border: "0", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                  <i className="ph ph-dog" style={{ fontSize: "20px", color: "var(--t-5b6b82,#5b6b82)" }} />
                  <span style={{ flex: "1", fontSize: "16px", fontWeight: "500" }}>{t.dog}</span>
                  <span style={{ width: "46px", height: "28px", flexShrink: "0", borderRadius: "999px", background: pf.dogTrack, padding: "3px", display: "flex", transition: "background .15s" }}>
                    <span style={{ width: "22px", height: "22px", borderRadius: "50%", background: "var(--k-ffffff,#ffffff)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.25))", marginLeft: pf.dogKnob, transition: "margin .15s" }} />
                  </span>
                </button>
              </div>
              {pf.err ? (
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-9a2f17,#9a2f17)", padding: "0 8px" }}>{t.fNeed}</span>
              ) : null}
              <div style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(0,1fr)", gap: "8px" }}>
                {canAddPool ? (
                  <button onClick={pfEstimate} style={{ height: "52px", padding: "0 8px", borderRadius: "14px", border: "1.5px solid var(--l-d5dbe3,#d5dbe3)", background: "var(--c-ffffff,#ffffff)", color: "var(--t-0a2a5c,#0a2a5c)", fontFamily: "inherit", fontSize: "14px", lineHeight: "1.15", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    <i className="ph ph-file-text" style={{ fontSize: "17px", flexShrink: "0" }} />
                    {t.esTitle}
                  </button>
                ) : null}
                <button onClick={savePoolForm} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.addPool}</button>
              </div>
              </>
            ) : null}
            {is.sheetRjCust ? (
              <>
              <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", padding: "4px 8px 0" }}>{t.rjPickCust}</span>
              {rc.listMode ? (
                <>
                <div style={{ margin: "0 8px", height: "48px", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", display: "flex", alignItems: "center", gap: "10px", padding: "0 14px" }}>
                  <i className="ph ph-magnifying-glass" style={{ fontSize: "19px", color: "var(--t-5b6b82,#5b6b82)" }} />
                  <input type="text" value={rc.q ?? ''} onChange={rc.setQ} placeholder={t.search} style={{ flex: "1", minWidth: "0", height: "100%", border: "0", background: "none", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                </div>
                {canAddPool ? (
                  <button onClick={rc.startNew} style={{ margin: "0 8px", minHeight: "52px", borderRadius: "14px", border: "1.5px dashed var(--l-c9d0da,#c9d0da)", background: "none", color: "var(--t-34496a,#34496a)", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}>
                    <i className="ph-bold ph-plus" style={{ fontSize: "14px" }} />
                    {t.rjNewCust}
                  </button>
                ) : null}
                <div style={{ maxHeight: "360px", overflowY: "auto", scrollbarWidth: "none", padding: "0 8px" }}>
                  {rc.rows.map((r, rIdx) => (
                    <button key={rIdx} onClick={r.onClick} style={{ width: "100%", minHeight: "60px", display: "flex", alignItems: "center", gap: "12px", background: "none", border: "0", borderTop: r.divider, padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                      <span style={{ width: "36px", height: "36px", flexShrink: "0", borderRadius: "50%", background: "var(--b-e3f1f4,#e3f1f4)", color: "var(--t-0a4f63,#0a4f63)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700" }}>{r.initials}</span>
                      <span style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
                        <span style={{ fontSize: "16px", fontWeight: "500" }}>{r.name}</span>
                        <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{r.addr}</span>
                      </span>
                      {r.on ? (
                        <i className="ph-bold ph-check" style={{ fontSize: "17px", color: "var(--t-0a2a5c,#0a2a5c)" }} />
                      ) : null}
                    </button>
                  ))}
                  {rc.none ? (
                    <span style={{ display: "block", padding: "12px 0", fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.noMatch}</span>
                  ) : null}
                </div>
                </>
              ) : null}
              {rc.newMode ? (
                <>
                <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.fName}</span>
                    <input type="text" value={rc.nName ?? ''} onChange={rc.setNName} placeholder={t.phName} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", padding: "0 14px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.fAddr}</span>
                    <input type="text" value={rc.nAddr ?? ''} onChange={rc.setNAddr} placeholder={t.phAddr} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", padding: "0 14px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
                  </label>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.4fr)", gap: "8px" }}>
                  <button onClick={rc.cancelNew} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.back}</button>
                  <button onClick={rc.useNew} aria-disabled={rc.newOff} style={{ height: "52px", borderRadius: "14px", border: "0", background: rc.newBg, color: "var(--pt-ffffff,#ffffff)", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.rjUseCust}</button>
                </div>
                </>
              ) : null}
              </>
            ) : null}
            {is.sheetRjDone ? (
              <>
              <div style={{ padding: "4px 8px 0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{t.rjCompleteJob}</span>
                <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{rd.sub}</span>
              </div>
              <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "8px" }}>
                  {t.rjDonePhotoQ}
                  <span style={{ height: "22px", padding: "0 8px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-5b6b82,#5b6b82)", fontSize: "11px", fontWeight: "700", display: "inline-flex", alignItems: "center" }}>{t.optional}</span>
                </span>
                <button onClick={rd.togglePhoto} aria-pressed={rd.has} style={{ width: "100%", minHeight: "96px", borderRadius: "16px", background: rd.bg, border: `1.5px ${rd.borderStyle ?? ''} ${rd.border ?? ''}`, display: "flex", alignItems: "center", gap: "14px", padding: "14px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ width: "48px", height: "48px", borderRadius: "12px", background: rd.dot, color: rd.dotColor, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><i className={rd.icon} style={{ fontSize: "22px" }} /></span>
                  <span style={{ flex: "1", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "700" }}>{rd.title}</span>
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{rd.hint}</span>
                  </span>
                </button>
              </div>
              {showMoney ? (
                <button onClick={rd.finishSend} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                  <i className="ph-bold ph-paper-plane-tilt" style={{ fontSize: "16px" }} />
                  {t.rjFinishSend}
                </button>
              ) : null}
              <button onClick={rd.finish} style={{ height: "52px", borderRadius: "14px", border: rd.finishBorder, background: rd.finishBg, color: rd.finishColor, fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <i className="ph-bold ph-check-circle" style={{ fontSize: "16px" }} />
                {rd.finishLbl}
              </button>
              </>
            ) : null}
            {is.sheetSched ? (
              <>
              <div style={{ padding: "4px 8px 0", display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{t.scTitle}</span>
                <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{se.sub}</span>
              </div>
              <div style={{ padding: "0 8px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ height: "48px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", padding: "4px", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "4px" }}>
                  {se.freqs.map((o, oIdx) => (
                    <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer", lineHeight: "1.1" }}>{o.label}</button>
                  ))}
                </div>
                <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)", paddingLeft: "4px" }}>{se.hint}</span>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,minmax(0,1fr))", gap: "4px" }}>
                  {se.days.map((d, dIdx) => (
                    <button key={dIdx} onClick={d.onClick} aria-pressed={d.on} style={{ height: "48px", borderRadius: "12px", border: "0", background: d.bg, color: d.color, fontFamily: "inherit", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>{d.label}</button>
                  ))}
                </div>
              </div>
              <button onClick={se.save} aria-disabled={se.off} style={{ height: "52px", borderRadius: "14px", border: "0", background: se.bg, color: se.color, fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{se.cta}</button>
              </>
            ) : null}
            {is.sheetArchive ? (
              <>
              <div style={{ padding: "4px 8px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{arQ}</span>
                <span style={{ fontSize: "15px", lineHeight: "1.45", color: "var(--t-5b6b82,#5b6b82)", textWrap: "pretty" }}>{t.arConfirmSub}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "8px" }}>
                <button onClick={closeSheet} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.arCancel}</button>
                <button onClick={confirmArchive} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--b-b8391d,#b8391d)", color: "var(--t-ffffff,#ffffff)", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                  <i className="ph ph-archive" style={{ fontSize: "17px" }} />
                  {t.arShort}
                </button>
              </div>
              </>
            ) : null}
            {is.sheetOther ? (
              <>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 8px 0" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{t.otherStop}</span>
                <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.otherSub}</span>
              </div>
              <label style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "0 8px" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.stopNameLbl}</span>
                <input value={otherName ?? ''} onChange={setOtherName} placeholder={t.otherPh} style={{ height: "52px", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "0 14px", fontFamily: "inherit", fontSize: "16px", color: "var(--t-0a1b36,#0a1b36)", outline: "none" }} />
              </label>
              <button onClick={confirmOther} aria-disabled={otherEmpty} style={{ height: "52px", borderRadius: "14px", border: "0", background: otherBtnBg, color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.continueBtn}</button>
              </>
            ) : null}
            {is.sheetCost ? (
              <>
              <div style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "4px 8px 0" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{cs.title}</span>
                <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.costOpt}</span>
              </div>
              <div style={{ height: "64px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "44px", fontWeight: "700", letterSpacing: "-.04em", color: cs.color }}>{cs.amount}</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px" }}>
                {keys.map((k, kIdx) => (
                  <button key={kIdx} onClick={k.onClick} aria-label={k.k} style={{ height: "52px", borderRadius: "14px", background: "var(--b-f2f4f7,#f2f4f7)", border: "0", fontFamily: "inherit", fontSize: "21px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}>{k.k}</button>
                ))}
              </div>
              <button onClick={confirmCost} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{cs.confirm}</button>
              </>
            ) : null}
            {is.sheetShopAdd ? (
              <>
              <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", padding: "4px 8px 0" }}>{t.shAddItem}</span>
              <div style={{ padding: "0 8px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {sa.opts.map((o, oIdx) => (
                  <button key={oIdx} onClick={o.onClick} aria-pressed={o.on} style={{ height: "44px", padding: "0 14px", borderRadius: "999px", border: "0", background: o.bg, color: o.color, fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{o.label}</button>
                ))}
              </div>
              <div style={{ margin: "4px 8px 0", borderRadius: "18px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "14px 16px", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ flex: "1", display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{t.shAmount}</span>
                  <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{sa.price}</span>
                </span>
                <button onClick={sa.minus} aria-label={t.aLess} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-minus" style={{ fontSize: "16px" }} /></button>
                <span style={{ minWidth: "72px", textAlign: "center", fontSize: "18px", fontWeight: "700" }}>{sa.qty}</span>
                <button onClick={sa.plus} aria-label={t.aMore} style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-plus" style={{ fontSize: "16px" }} /></button>
              </div>
              <button onClick={sa.add} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <i className="ph-bold ph-plus" style={{ fontSize: "15px" }} />
                {sa.cta}
              </button>
              </>
            ) : null}
            {is.sheetChem ? (
              <>
              <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em", padding: "4px 8px 0" }}>{t.addChem}</span>
              <div style={{ padding: "0 8px" }}>
                {chemOptions.map((c, cIdx) => (
                  <button key={cIdx} onClick={c.onClick} style={{ width: "100%", minHeight: "56px", background: "none", border: "0", borderTop: c.divider, display: "flex", alignItems: "center", gap: "14px", padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                    <i className="ph ph-flask" style={{ fontSize: "20px", color: "var(--t-a3adbb,#a3adbb)" }} />
                    <span style={{ flex: "1", fontSize: "16px", fontWeight: "500" }}>{c.name}</span>
                    <span style={{ fontSize: "14px", color: "var(--t-5b6b82,#5b6b82)" }}>{c.price}</span>
                  </button>
                ))}
                {noChemOptions ? (
                  <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.allChemsAdded}</span>
                ) : null}
              </div>
              </>
            ) : null}
            {is.sheetSoon ? (
              <>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "4px 8px 0" }}>
                <span style={{ alignSelf: "flex-start", height: "24px", padding: "0 10px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", gap: "5px", fontSize: "12px", fontWeight: "700" }}>
                  <i className="ph ph-rocket-launch" style={{ fontSize: "13px" }} />
                  {t.comingSoon}
                </span>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "-.02em" }}>{soonTitle}</span>
                <span style={{ fontSize: "15px", lineHeight: "1.45", color: "var(--t-5b6b82,#5b6b82)" }}>{t.soonBody}</span>
              </div>
              <button onClick={closeSheet} style={{ height: "52px", borderRadius: "14px", border: "0", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>{t.gotIt}</button>
              </>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
