import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEllipsisVertical, faGear, faHome, faMinimize } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faGear)
library.add(faBars)
library.add(faLinkedin)
library.add(faGithub)
library.add(faMinimize)
library.add(faEllipsisVertical)
library.add(faHome)

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon)
app.use(router);
app.mount("#app");
