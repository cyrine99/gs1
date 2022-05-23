import Vue from "vue";

Vue.filter("shorten", function(text, textLength) {
    return text.substring(0, textLength) + "...read more"
});