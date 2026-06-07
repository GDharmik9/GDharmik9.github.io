"use client";

import mermaid from "mermaid";
import { useEffect, useId, useState } from "react";

export function MermaidDiagram({ chart }: { chart: string }) {
  const id = useId().replace(/:/g, "");
  const [svg, setSvg] = useState("");

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: "dark", securityLevel: "loose", themeVariables: { primaryColor: "#6366F1", primaryTextColor: "#fff", lineColor: "#06B6D4", background: "#050816" } });
    mermaid.render(`diagram-${id}`, chart).then(({ svg }) => setSvg(svg));
  }, [chart, id]);

  return <div className="overflow-x-auto rounded-3xl border border-white/10 bg-[#050816] p-4" dangerouslySetInnerHTML={{ __html: svg }} />;
}
