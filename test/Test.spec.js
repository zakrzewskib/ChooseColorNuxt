// Import the `mount()` method from Vue Test Utils
import { mount } from "@vue/test-utils";
import ColorBox from "~/components/ColorBox.vue";

test("test", async() => {
    const wrapper = mount(ColorBox);
    console.log(wrapper);

    const div = wrapper.find("div");
    console.log(div);
    // const text = wrapper.find("p");

    // expect(text.text()).toContain("Total clicks: 0");

    // await button.trigger("click");

    // expect(text.text()).toContain("Total clicks: 1");
});