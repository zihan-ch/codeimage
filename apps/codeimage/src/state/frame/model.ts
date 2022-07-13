export interface FrameState {
  background: string | null | undefined;
  padding: number;
  radius: number;
  visible: boolean;
  opacity: number;
  autoWidth: boolean;
  scale: number;
}

export type PersistedFrameState = Pick<
  FrameState,
  'background' | 'padding' | 'radius' | 'visible' | 'opacity'
>;
