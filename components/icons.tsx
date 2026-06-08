import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function StrokeIcon({ children, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export function GitHubMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.1.79-.25.79-.56v-2.02c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.76.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.2-3.12-.12-.29-.52-1.48.11-3.08 0 0 .98-.31 3.2 1.19a11.1 11.1 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.6.23 2.79.11 3.08.75.82 1.2 1.85 1.2 3.12 0 4.45-2.7 5.43-5.28 5.72.42.36.8 1.08.8 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.42 8.08h4.12V24H.42V8.08Zm7.16 0h3.95v2.18h.06c.55-1.04 1.9-2.14 3.9-2.14 4.18 0 4.95 2.75 4.95 6.32V24h-4.12v-8.48c0-2.02-.04-4.62-2.82-4.62-2.82 0-3.25 2.2-3.25 4.47V24H7.58V8.08Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return <StrokeIcon {...props}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></StrokeIcon>;
}

export function ArrowLeftIcon(props: IconProps) {
  return <StrokeIcon {...props}><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></StrokeIcon>;
}

export function ExternalLinkIcon(props: IconProps) {
  return <StrokeIcon {...props}><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></StrokeIcon>;
}

export function MailIcon(props: IconProps) {
  return <StrokeIcon {...props}><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a2 2 0 0 1-2.06 0L2 7" /></StrokeIcon>;
}

export function MapPinIcon(props: IconProps) {
  return <StrokeIcon {...props}><path d="M20 10c0 4.99-5.53 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.53 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></StrokeIcon>;
}

export function SparklesIcon(props: IconProps) {
  return <StrokeIcon {...props}><path d="M9.94 14.56 8.5 19l-1.44-4.44L2.62 13.1l4.44-1.44L8.5 7.22l1.44 4.44 4.44 1.44-4.44 1.46Z" /><path d="M18 8.5 17.2 11l-.8-2.5L14 7.7l2.4-.8.8-2.4.8 2.4 2.4.8-2.4.8Z" /><path d="m16.5 18.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5.5 1.5 1.5.5-1.5.5Z" /></StrokeIcon>;
}

export function SunIcon(props: IconProps) {
  return <StrokeIcon {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></StrokeIcon>;
}

export function MoonIcon(props: IconProps) {
  return <StrokeIcon {...props}><path d="M12 3a6 6 0 0 0 9 7.5A9 9 0 1 1 12 3Z" /></StrokeIcon>;
}

export function WebIcon(props: IconProps) {
  return <StrokeIcon {...props}><path d="M2 12h20" /><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" /><path d="M2.26 7.1a15.9 15.9 0 0 0-.26 4.9c0 1.7.2 3.4.26 4.9M21.74 7.1a15.9 15.9 0 0 1 .26 4.9c0 1.7-.2 3.4-.26 4.9M10.24 2a15.3 15.3 0 0 1 .72 20M13.76 2a15.3 15.3 0 0 0-.72 20" /></StrokeIcon>;
}