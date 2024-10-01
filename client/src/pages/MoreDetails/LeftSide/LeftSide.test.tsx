
import { render } from "@testing-library/react";
import { IScannerUnifiedFormat } from "../../../types/types";
import { LeftSide } from "./LeftSide";

const setDisplayLeftTable = jest.fn();
const setDisplayComparison = jest.fn();
const setScannerById = jest.fn();
const setRightDropLists = jest.fn();
const setRightFilter = jest.fn();
const scannerName = "aaa";
const scannerById: IScannerUnifiedFormat = {
    scannerName: ""
}

describe('left-side-test', () => {
    test('render-left-side-component', async () => {
        const component =
            render(<LeftSide setDisplayLeftTable={setDisplayLeftTable} setDisplayComparison={setDisplayComparison} setScannerById={setScannerById} setRightDropLists={setRightDropLists} setRightFilter={setRightFilter} scannerName={""} scannerById={scannerById} />);
        const button = component.getByTestId("selectProductName");
        expect(button).toBeInTheDocument();
    })

})