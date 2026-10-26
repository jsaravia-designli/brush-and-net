// Log visit — generated from Prototype v3 (Final).dc.html
export default function LogVisitScreen({ vm }) {
  const { addPhoto, closeVisit, is, openChem, saveVisit, setNote, t, toggleNote, v } = vm;
  return (
    <>
      {is.visit ? (
        <>
        <div data-screen-label="Log visit" style={{ position: "absolute", top: "50px", left: "0", right: "0", bottom: "100px", overflowY: "auto", scrollbarWidth: "none", paddingBottom: "24px" }}>
          <div style={{ padding: "8px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <button onClick={closeVisit} aria-label={t.aClose} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 2px 8px -2px rgba(10,27,54,.10))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer" }}><i className="ph-bold ph-x" style={{ fontSize: "17px" }} /></button>
            <span style={{ height: "34px", padding: "0 12px", borderRadius: "999px", background: "var(--b-e8f5ee,#e8f5ee)", color: "var(--t-0f5c3b,#0f5c3b)", display: "flex", alignItems: "center", gap: "6px", fontSize: "14px", fontWeight: "600" }}>
              <i className="ph ph-timer" style={{ fontSize: "16px" }} />
              {v.timer}
            </span>
          </div>
          <div style={{ padding: "16px 24px 0", display: "flex", flexDirection: "column", gap: "4px" }}>
            <span style={{ fontSize: "30px", fontWeight: "700", letterSpacing: "-.03em", lineHeight: "1.1" }}>{v.name}</span>
            <span style={{ fontSize: "15px", color: "var(--t-5b6b82,#5b6b82)" }}>{v.sub}</span>
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-drop-half" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.readings}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-6b7889,#6b7889)" }}>{v.from}</span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {v.readings.map((r, rIdx) => (
              <div key={rIdx} style={{ display: "flex", alignItems: "center", gap: "10px", height: "52px", borderTop: r.divider }}>
                <span style={{ width: "40px", fontSize: "15px", fontWeight: "600", color: "var(--t-5b6b82,#5b6b82)" }}>{r.label}</span>
                <span style={{ flex: "1", display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>{r.value}</span>
                  <span style={{ height: "22px", padding: "0 8px", borderRadius: "6px", background: r.pillBg, color: r.color, fontSize: "12px", fontWeight: "700", display: "inline-flex", alignItems: "center", transition: "background .2s" }}>{r.state}</span>
                </span>
                <button onClick={r.minus} aria-label={t.aLess} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.07))", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--t-0a1b36,#0a1b36)" }}><i className="ph-bold ph-minus" style={{ fontSize: "15px" }} /></button>
                <button onClick={r.plus} aria-label={t.aMore} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.07))", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--t-0a1b36,#0a1b36)" }}><i className="ph-bold ph-plus" style={{ fontSize: "15px" }} /></button>
              </div>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 6px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-flask" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.chems}
            </span>
            <button onClick={openChem} style={{ height: "32px", padding: "0 4px", border: "0", background: "none", color: "var(--t-0a6f8a,#0a6f8a)", fontFamily: "inherit", fontSize: "14px", fontWeight: "600", display: "flex", alignItems: "center", gap: "4px", cursor: "pointer" }}>
              <i className="ph-bold ph-plus" style={{ fontSize: "13px" }} />
              {t.add}
            </button>
          </div>
          <div style={{ padding: "0 24px" }}>
            {v.chems.map((c, cIdx) => (
              <div key={cIdx} style={{ display: "flex", alignItems: "center", gap: "10px", minHeight: "56px", borderTop: c.divider }}>
                <div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", gap: "1px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>{c.name}</span>
                  <span style={{ fontSize: "12px", fontWeight: "600", color: c.subColor }}>{c.sub}</span>
                </div>
                <button onClick={c.minus} aria-label={t.aLess} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.07))", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--t-0a1b36,#0a1b36)" }}><i className="ph-bold ph-minus" style={{ fontSize: "15px" }} /></button>
                <span style={{ minWidth: "56px", textAlign: "center", fontSize: "15px", fontWeight: "700" }}>{c.qty}</span>
                <button onClick={c.plus} aria-label={t.aMore} style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--c-ffffff,#ffffff)", border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 1px 3px rgba(10,27,54,.07))", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--t-0a1b36,#0a1b36)" }}><i className="ph-bold ph-plus" style={{ fontSize: "15px" }} /></button>
              </div>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-list-checks" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.tasks}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-6b7889,#6b7889)" }}>{v.tasksDone}</span>
          </div>
          <div style={{ padding: "0 24px" }}>
            {v.tasks.map((k, kIdx) => (
              <button key={kIdx} onClick={k.toggle} aria-pressed={k.on} style={{ width: "100%", height: "52px", display: "flex", alignItems: "center", gap: "14px", background: "none", border: "0", borderTop: k.divider, padding: "0", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
                {k.on ? (
                  <i className="ph-fill ph-check-circle" style={{ fontSize: "26px", color: "var(--t-0a2a5c,#0a2a5c)" }} />
                ) : null}
                {k.off ? (
                  <span style={{ width: "22px", height: "22px", margin: "0 2px", borderRadius: "50%", border: "1.5px dashed var(--l-a3adbb,#a3adbb)" }} />
                ) : null}
                <span style={{ flex: "1", fontSize: "16px", fontWeight: "500", color: k.color }}>{k.label}</span>
                <i className={k.iconCls} style={{ fontSize: "20px", color: "var(--t-a3adbb,#a3adbb)" }} />
              </button>
            ))}
          </div>
          <div style={{ height: "8px", background: "var(--b-f4f6f8,#f4f6f8)", marginTop: "24px" }} />
          <div style={{ padding: "22px 24px 12px", display: "flex", flexDirection: "column", gap: "2px" }}>
            <span style={{ fontSize: "17px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
              <i className="ph ph-user-circle" style={{ fontSize: "19px", color: "var(--t-0a6f8a,#0a6f8a)" }} />
              {t.forCustomer}
            </span>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{t.sentWithReport}</span>
          </div>
          <div style={{ padding: "0 16px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={addPhoto} aria-disabled={v.photoFull} style={{ minHeight: "112px", borderRadius: "18px", background: v.photoBg, border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 10px 24px -12px rgba(10,111,138,.30),0 2px 4px rgba(10,27,54,.04))", display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "space-between", gap: "12px", padding: "14px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: v.photoCursor, textAlign: "left" }}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "6px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.photoDot, color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><i className={v.photoIcon} style={{ fontSize: "20px" }} /></span>
                <span style={{ height: "22px", padding: "0 8px", borderRadius: "999px", background: "var(--b-f2f4f7,#f2f4f7)", color: "var(--t-5b6b82,#5b6b82)", fontSize: "11px", fontWeight: "700", display: "inline-flex", alignItems: "center" }}>{t.optional}</span>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{v.photoTitle}</span>
                <span style={{ fontSize: "12px", color: v.photoSubColor }}>{v.photoSub}</span>
              </span>
            </button>
            <button onClick={toggleNote} aria-pressed={v.noteOn} style={{ minHeight: "112px", borderRadius: "18px", background: v.noteBg, border: "1px solid var(--l-eef0f3,#eef0f3)", boxShadow: "var(--shd,0 10px 24px -12px rgba(10,111,138,.30),0 2px 4px rgba(10,27,54,.04))", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", padding: "14px", fontFamily: "inherit", color: "var(--t-0a1b36,#0a1b36)", cursor: "pointer", textAlign: "left" }}>
              <span style={{ width: "40px", height: "40px", borderRadius: "50%", background: v.noteDot, color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center" }}><i className={v.noteIcon} style={{ fontSize: "20px" }} /></span>
              <span style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>{v.noteTitle}</span>
                <span style={{ fontSize: "12px", color: v.noteSubColor }}>{v.noteSub}</span>
              </span>
            </button>
          </div>
          {v.hasPhotos ? (
            <div style={{ padding: "8px 16px 0", display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: "8px" }}>
              {v.photos.map((ph, phIdx) => (
                <div key={phIdx} style={{ position: "relative", aspectRatio: "1", borderRadius: "14px", background: ph.bg, border: "1px solid var(--l-eef0f3,#eef0f3)", display: "flex", alignItems: "flex-end", padding: "6px 8px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "700", color: "var(--t-0a4f63,#0a4f63)" }}>{ph.label}</span>
                  <button onClick={ph.remove} aria-label={t.removePhoto} style={{ position: "absolute", top: "-8px", right: "-8px", width: "36px", height: "36px", border: "0", background: "none", padding: "0", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "var(--b-0a1b36,#0a1b36)", color: "var(--t-ffffff,#ffffff)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shd,0 2px 6px rgba(10,27,54,.25))" }}><i className="ph-bold ph-x" style={{ fontSize: "12px" }} /></span>
                  </button>
                </div>
              ))}
            </div>
          ) : null}
          {v.noteOpen ? (
            <div style={{ padding: "8px 16px 0" }}>
              <textarea value={v.note ?? ''} onChange={setNote} placeholder={t.notePh} rows="3" style={{ width: "100%", borderRadius: "14px", border: "1px solid var(--l-e3e7ec,#e3e7ec)", background: "var(--c-ffffff,#ffffff)", padding: "12px 14px", fontFamily: "inherit", fontSize: "15px", color: "var(--t-0a1b36,#0a1b36)", resize: "none", outline: "none" }} />
            </div>
          ) : null}
        </div>
        <div style={{ position: "absolute", left: "0", right: "0", bottom: "0", height: "100px", background: "var(--b-ffffff,#ffffff)", boxShadow: "var(--shd,0 -8px 24px -10px rgba(10,27,54,.12))", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", padding: "14px 16px 0 24px", zIndex: "10" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", paddingTop: "4px", minWidth: "0" }}>
            <span style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "-.02em", color: "var(--t-0a6f8a,#0a6f8a)" }}>{v.earned}</span>
            <span style={{ fontSize: "13px", color: "var(--t-5b6b82,#5b6b82)" }}>{v.breakdown}</span>
          </div>
          <button onClick={saveVisit} style={{ height: "52px", padding: "0 20px", borderRadius: "14px", background: "var(--p-0a2a5c,#0a2a5c)", color: "var(--pt-ffffff,#ffffff)", border: "0", boxShadow: "var(--shd,0 8px 18px -8px rgba(10,42,92,.55))", display: "flex", alignItems: "center", gap: "8px", fontFamily: "inherit", fontSize: "16px", fontWeight: "700", cursor: "pointer", flexShrink: "0" }}>
            <i className="ph-bold ph-check" style={{ fontSize: "16px" }} />
            {v.saveLabel}
          </button>
        </div>
        </>
      ) : null}
    </>
  );
}
