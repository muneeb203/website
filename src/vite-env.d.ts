/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'vapi-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'assistant-id'?: string;
      'public-key'?: string;
      mode?: string;
      theme?: string;
      'base-color'?: string;
      'accent-color'?: string;
      'button-base-color'?: string;
      'button-accent-color'?: string;
      radius?: string;
      size?: string;
      position?: string;
      'main-label'?: string;
      'start-button-text'?: string;
      'end-button-text'?: string;
      'require-consent'?: string;
      'local-storage-key'?: string;
      'show-transcript'?: string;
    };
  }
}
