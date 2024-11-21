
export interface Event {
    id: number;
    date: string;
    title: string;
    time: string;
    location: string;
    description: string;
    imageSrc: string;
    isRecurring?: boolean;
    recurrencePattern?: string;
  }