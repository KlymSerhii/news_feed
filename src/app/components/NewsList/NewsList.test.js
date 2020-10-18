import React from "react";
import { render, act, fireEvent } from "@testing-library/react"
import {useSelector} from "react-redux";
import NewsList from "./NewsList";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

useSelector.mockImplementation((selector) => selector({
        user: {
            isLoggedIn: true
        },
        news: {
            items: [
                {
                    "id": 1,
                    "title": "First news",
                    "text": "First news goes first"
                },
                {
                    "id": 2,
                    "title": "Second news",
                    "text": "Second news goes second"
                },
                {
                    "id": 3,
                    "title": "Third news",
                    "text": "Third news goes third"
                },
                {
                    "id": 4,
                    "title": "Fourth news",
                    "text": "Fourth news goes fourth"
                },
                {
                    "id": 5,
                    "title": "Fifth news",
                    "text": "Fifth news goes fifth"
                },
                {
                    "id": 6,
                    "title": "Sixth news",
                    "text": "Sixth news goes sixth"
                }
            ]
        }
    }
));

describe("AddNews", () => {

    it("matches snapshot", () => {
        const { container } = render(<NewsList/>);
        expect(container).toMatchSnapshot();
    });

    it("renders 6 news items", () => {
        const { container } = render(<NewsList/>);
        expect(container.querySelectorAll(".MuiPaper-root").length).toBe(6);
    });

    it("Shows delete modal after user clicks on delete button", async () => {
        const { container } = render(<NewsList/>);
        const secondDeleteButton = container.querySelectorAll("button")[2];
        await act(async () => {
            fireEvent(
                secondDeleteButton,
                new MouseEvent("click", {
                    bubbles: true,
                    cancelable: true,
                })
            )
        });
        expect(container.querySelectorAll("#alert-dialog-title")).toBeTruthy();
    });
});
