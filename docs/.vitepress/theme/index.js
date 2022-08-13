import DefaultTheme from "vitepress/theme"

export default {
    ...DefaultTheme,

    nav: [
        { text: "Guide", link: "/guide" },
        { text: "Configs", link: "/configs" },
        { text: "Changelog", link: "https://github.com/..." },
    ],

    sidebar: [
        {
            text: "Test",
            items: [{ text: "Hello", link: "/hello" }],
        },
    ],
}
