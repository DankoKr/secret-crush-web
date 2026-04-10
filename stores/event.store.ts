import { AxiosError } from "axios";
import type { Event, EventsParams } from "~/types/event.types";

import { apiGet } from "~/services/api.service";

export const useEventStore = defineStore("event", {
  state: () => ({
    events: [] as Event[],
    yachtEvents: [] as Event[],
    closestEvent: null as Event | null,
    loading: false,
  }),
  getters: {
    getEvents(state): Event[] {
      return state.events;
    },
    getYachtEvents(state): Event[] {
      return state.yachtEvents;
    },
    getClosestEvent(state): Event | null {
      return state.closestEvent;
    },
  },
  actions: {
    async fetchEvent(slug: string) {
      try {
        const { data } = await apiGet(`/events/${slug}`);

        return data.data as Event;
      } catch (error: unknown) {
        if (error instanceof AxiosError && error.response) {
          throw createError({
            statusCode: error.response.status,
            statusMessage: error.response.data.message,
            fatal: true,
          });
        }
        return null;
      }
    },
    async fetchAllEvents(params?: EventsParams) {
      this.loading = true;
      try {
        const { data } = await apiGet(`/events`, params || {});
        this.events = data.data.items;
        return data;
      } finally {
        this.loading = false;
      }
    },

    async fetchAllYachtEvents(params?: EventsParams) {
      this.loading = true;
      try {
        const { data } = await apiGet(`/yacht-events`, params || {});
        this.yachtEvents = data.data.items;
        return data;
      } finally {
        this.loading = false;
      }
    },

    async fetchClosestEvent() {
      try {
        const { data } = await apiGet(`/events/closest`);
        this.closestEvent = data.data as Event;
        return data.data;
      } catch (error: unknown) {
        console.error("Failed to fetch closest event:", error);
        return null;
      }
    },
  },
});
