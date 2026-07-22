# V8.0.2 PDF Revert to Best Version

- Base: V8 Design Preservation Edition (keeps the full original interface and assets).
- PDF: restored the exact rendering approach used in the first V8 Core Foundation.
- The PDF preview is written directly into a new browser window using the live `data.week` array.
- No localStorage/sessionStorage transfer and no separate `planner-pdf.html`.
- The preview shows the detected task count before printing.
- Export stops with a clear warning if no planner tasks are detected.
