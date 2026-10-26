// Import — generated from Prototype v3 (Final).dc.html
export default function ImportScreen({ vm }) {
  const { im, imBack, imNext, imPick, imSample, imToggleTip, is, t } = vm;
  return (
    <>
      {is.imp ? (
        <>
        <div data-screen-label="Import pools" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "100px", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "24px" }}>
          <div style={{ padding: "8px 16px 0" }}>
            <button onClick={imBack} aria-label={t.back} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-arrow-left" style={{ fontSize: "17px" }} /></button>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "13px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{im.stepLabel}</span>
            <div style={{ display: "flex", gap: "6px" }}>
              {im.bars.map((b, bIdx) => (
                <span key={bIdx} style={{ flex: "1", height: "4px", borderRadius: "2px", background: b.bg }} />
              ))}
            </div>
          </div>
          <div style={{ padding: "20px 24px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1", textWrap: "pretty" }}>{im.title}</span>
            <span style={{ fontSize: "15px", lineHeight: "1.45", color: "var(--t-5b6b82,#5b6b82)" }}>{im.sub}</span>
          </div>
          {im.s1 ? (
            <>
            <label style={{ margin: "20px 16px 0", minHeight: "150px", borderRadius: "18px", border: "1.5px dashed var(--l-c9d0da,#c9d0da)", background: "var(--b-f8f9fb,#f8f9fb)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "8px", padding: "20px", cursor: "pointer", textAlign: "center" }}>
              <input type="file" accept=".csv,.xls,.xlsx,text/csv" onChange={imPick} style={{ display: "none" }} />
              <span style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--b-0a2a5c,#0a2a5c)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className="ph ph-upload-simple" style={{ fontSize: "22px" }} /></span>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>{t.imChoose}</span>
              <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.imTypes}</span>
            </label>
            {" "}
            <button onClick={imSample} style={{ margin: "10px 16px 0", width: "calc(100% - 32px)", height: "44px", borderRadius: "999px", border: "0", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-0a1b36,#0a1b36)", fontFamily: "inherit", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>{t.imSample}</button>
            <div style={{ margin: "20px 16px 0", borderRadius: "18px", background: "var(--b-e3f1f4,#e3f1f4)", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <button onClick={imToggleTip} aria-expanded={im.tipOpen} style={{ display: "flex", alignItems: "center", gap: "10px", background: "none", border: "0", padding: "0", fontFamily: "inherit", color: "var(--t-0a3f4f,#0a3f4f)", cursor: "pointer", textAlign: "left", minHeight: "28px" }}>
                <i className="ph ph-lightbulb" style={{ fontSize: "20px" }} />
                <span style={{ flex: "1", fontSize: "15px", fontWeight: "700" }}>{t.imTipTitle}</span>
                <i className={im.tipIcon} style={{ fontSize: "14px" }} />
              </button>
              {im.tipOpen ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {im.tips.map((tp, tpIdx) => (
                    <div key={tpIdx} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14px", lineHeight: "1.45", color: "var(--t-0a3f4f,#0a3f4f)" }}>
                      <span style={{ width: "22px", height: "22px", flexShrink: "0", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", justifyContent: "center" }}>{tp.n}</span>
                      <span style={{ textWrap: "pretty" }}>{tp.text}</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            </>
          ) : null}
          {im.s2 ? (
            <>
            <div style={{ margin: "16px 16px 0", borderRadius: "14px", background: "var(--b-f4f6f8,#f4f6f8)", padding: "12px 14px", display: "flex", gap: "10px", alignItems: "center", fontSize: "14px", color: "var(--t-34496a,#34496a)" }}>
              <i className="ph ph-file-csv" style={{ fontSize: "20px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              <span style={{ flex: "1", minWidth: "0", overflow: "hidden", textOverflow: "ellipsis" }}>{im.fileLine}</span>
            </div>
            <div style={{ padding: "8px 24px 0" }}>
              {im.fields.map((f, fIdx) => (
                <div key={fIdx} style={{ display: "flex", alignItems: "center", gap: "12px", minHeight: "68px", borderTop: f.divider }}>
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500", display: "flex", alignItems: "center", gap: "6px" }}>
                      {f.label}
                      {f.req ? (
                        <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--t-5b6b82,#5b6b82)", background: "var(--b-f2f4f7,#f2f4f7)", borderRadius: "999px", padding: "2px 7px" }}>{t.imReq}</span>
                      ) : null}
                    </span>
                    <span style={{ fontSize: "13px", color: f.sampleColor, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.sample}</span>
                  </div>
                  <select value={f.col ?? ''} onChange={f.onChange} aria-label={f.label} style={{ width: "150px", height: "44px", borderRadius: "12px", border: `1.5px solid ${f.border ?? ''}`, background: "var(--c-ffffff,#ffffff)", padding: "0 10px", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", color: "var(--t-0a1b36,#0a1b36)" }}>
                    {im.colOpts.map((o, oIdx) => (
                      <option key={oIdx} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
            {im.mapErr ? (
              <span style={{ display: "block", padding: "4px 24px 0", fontSize: "13px", fontWeight: "600", color: "var(--t-9a2f17,#9a2f17)" }}>{t.imMapErr}</span>
            ) : null}
            </>
          ) : null}
          {im.s3 ? (
            <>
            <div style={{ margin: "16px 16px 0", display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: "8px" }}>
              {im.stats.map((x, xIdx) => (
                <div key={xIdx} style={{ borderRadius: "14px", background: x.bg, padding: "10px 12px", display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "700", color: x.color }}>{x.n}</span>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: x.color }}>{x.label}</span>
                </div>
              ))}
            </div>
            <div style={{ padding: "18px 24px 6px" }}><span style={{ fontSize: "15px", fontWeight: "700" }}>{im.previewHead}</span></div>
            <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
              {im.preview.map((r, rIdx) => (
                <div key={rIdx} style={{ borderRadius: "14px", background: r.bg, border: `1px solid ${r.border ?? ''}`, padding: "10px 12px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span style={{ minWidth: "28px", height: "22px", borderRadius: "999px", background: "var(--c-ffffff,#ffffff)", fontSize: "12px", fontWeight: "700", color: "var(--t-5b6b82,#5b6b82)", display: "flex", alignItems: "center", justifyContent: "center" }}>{r.n}</span>
                  <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "2px" }}>
                    <span style={{ fontSize: "15px", fontWeight: "600", color: r.nameColor }}>{r.name}</span>
                    <span style={{ fontSize: "13px", color: r.addrColor }}>{r.addr}</span>
                    <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.meta}</span>
                    {r.hasMsg ? (
                      <span style={{ fontSize: "12px", fontWeight: "700", color: r.msgColor, display: "flex", alignItems: "center", gap: "5px", marginTop: "2px" }}>
                        <i className="ph-bold ph-warning" style={{ fontSize: "13px" }} />
                        {r.msg}
                      </span>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <span style={{ display: "block", padding: "10px 24px 0", fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{im.moreRows}</span>
            </>
          ) : null}
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", padding: "14px 16px 0", zIndex: "10" }}>
          <button onClick={imNext} aria-disabled={im.ctaOff} style={{ width: "100%", height: "52px", borderRadius: "14px", border: "0", background: im.ctaBg, color: im.ctaColor, boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.45))", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer" }}>
            {im.cta}
            <i className={im.ctaIcon} style={{ fontSize: "16px" }} />
          </button>
        </div>
        </>
      ) : null}
    </>
  );
}
