import type { Image } from "./common.types";

export interface Event {
  id: number;
  name: string;
  slug: string;
  intro: string;
  description: string;
  location: string;
  locationPinpoint: string;
  date: string;
  ticketUrl: string;
  isActive: boolean;
  images: Image[];
  type?: EventType;
}

export interface EventList {
  items: Event[];
  totalItems: number;
}

export interface EventType {
  id: number;
  name: string;
  slug: string;
}

export interface EventsParams {
  [param: string]: string | string[];
}
