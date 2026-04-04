import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookF, faInstagram, faYoutube, faIdCard);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
