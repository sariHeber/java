import { fireEvent, render } from "@testing-library/react";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { IProps, IScannerDetails, IScannerGraph, IScannerUnifiedFormat } from "../../../types/types";
import { ScannersGraph } from "./ScannersGraph";
describe("ScannersGraph component",() =>{
    const testIProps: IProps={
        scannerType:"3", 
        data:undefined, 
        width:7,
        scannerName:"prisma", 
        sum:7 }
      it("handle onclick", () =>  {
       const component= render(
          <BrowserRouter>
          <ScannersGraph scannerType={testIProps.scannerType} data={testIProps.data} width={testIProps.width} scannerName={testIProps.scannerName} sum={testIProps.sum}/>
          </BrowserRouter>);
   const divtest = component.getByLabelText('Area');
     fireEvent.click(divtest);
      expect(global.window.location.pathname).toContain('/more-details/');    });          });
      
