export type Props = {
  children: React.ReactNode;
  onContentEndVisible: () => void;
};

export type Ref = HTMLDivElement | null;

export type State = {
  isRequestInProgress: boolean;
  requestStep: 'start' | 'pending' | 'finished' | 'idle';
};

export type Action = {
  type: 'START_REQUEST' | 'PENDING_REQUEST' | 'FINISH_REQUEST' | 'RESET_REQUEST';
};
