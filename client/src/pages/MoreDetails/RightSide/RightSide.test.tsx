import { render } from "@testing-library/react";
import { IFilterRight, ISelectButtonsRight } from "../../../types/types";
import RightSide from "./RightSide";

const setScannerByIdToCompare = jest.fn();
const rightFilter: IFilterRight = {
    productName: "",
    microserviceName: "",
    branch: "",
    report: ""
}
const rightDropLists: ISelectButtonsRight = {
    branchesDropList: [],
    reportsDropList: []
}

describe('right-side-test', () => {
    test('render-right-side-component', async () => {
        const component =
            render(<RightSide setScannerByIdToCompare={setScannerByIdToCompare} rightFilter={rightFilter} rightDropLists={rightDropLists} scannerName={""} />);
        const button = component.getByTestId("selectBranchName");
        expect(button).toBeInTheDocument();
    })

})