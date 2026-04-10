import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export enum Locale {
  EN = "en",
  BG = "bg",
}

export interface AvailableSlugs {
  [language: string]: string;
}

export interface MenuItem {
  label: string;
  link: string;
  src?: string;
}

export interface MenuItemDynamic {
  label: string;
  link: {
    [Locale.EN]: string;
    [Locale.BG]: string;
  };
}

export interface IconMenuItem {
  icon: IconDefinition;
  link: string;
  name: string;
}

export interface IconTextItem {
  icon: IconDefinition;
  label: string;
}

export enum MessageType {
  SUCCESS = "success",
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
}

export interface GalleryImage {
  src: string;
  alt: string;
  overlay: "yellow" | "red";
}

export interface I18nAstBody {
  type?: number;
  static?: string;
  items?: unknown[];
}

export interface I18nAstNode {
  type: number;
  start?: number;
  end?: number;
  static?: string;
  body?: I18nAstBody;
}

export type LocaleValue = string | I18nAstNode;

export type ValidationValue =
  | string
  | number
  | boolean
  | string[]
  | null
  | undefined;

export type ValidationRule = {
  validator: (value: ValidationValue) => boolean;
  message: string;
};

export const BEARER_TOKEN = "token";
export const EMAIL = "email";

export interface ErrorResponse {
  done: boolean;
  err: string;
}

export interface Image {
  imageUrl: string;
  thumbnailUrl?: string;
  fileName: string;
}
