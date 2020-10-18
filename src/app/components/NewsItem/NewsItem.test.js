import React from "react";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils";
import NewsItem from "./NewsItem";

describe("NewsItem", () => {
    let container = null;

    const newsItemData = {
        title: "Test title",
        text: "Test text",
    };

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    });

    it("renders news item properly", async () => {
        await act(async () => {
            render(<NewsItem {...newsItemData} />, container);
        });

        expect(container.querySelector("h2").textContent).toBe(newsItemData.title);
        expect(container.querySelector("p").textContent).toBe(newsItemData.text);
    });

    it("Delete button exist", async () => {
        await act(async () => {
            render(<NewsItem {...newsItemData} isUserLoggedIn/>, container);
        });

        const button = document.querySelector("button");
        expect(button.textContent).toBe("Delete");
    });
});
