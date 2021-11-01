// Import the `mount()` method from Vue Test Utils
import { shallowMount } from "@vue/test-utils";
import ColorBox from "~/components/ColorBox.vue";

test("test", () => {
    const color = "#111111";
    const wrapper = shallowMount(ColorBox, {
        propsData: { color }
    });
    console.log(wrapper);
});