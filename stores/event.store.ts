import { AxiosError } from "axios";
import type { Event, EventsParams } from "~/types/event.types";

import { apiGet } from "~/services/api.service";

export const useEventStore = defineStore("event", {
  state: () => ({
    events: [] as Event[],
    yachtEvents: [] as Event[],
    loading: false,
  }),
  getters: {
    getEvents(state): Event[] {
      return state.events;
    },
    getYachtEvents(state): Event[] {
      return state.yachtEvents;
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
  },
});
