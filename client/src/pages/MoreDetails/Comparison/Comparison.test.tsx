import { fireEvent, getAllByRole, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import Comparsion from './Comparsion';
import { equal } from 'assert';
import { BLUE_COMPAR_BACKGROND, RED_COLOR, WHITE_COLOR } from '../../../helpers/colorsConstant';
describe("Comparsion component",() =>{
    const setCompareStatus=jest.fn();    
    it("handle onclick",async () =>  {
       const component= render(
          <BrowserRouter>
          <Comparsion setCompareStatus={setCompareStatus} countOfTest={5}/>
          </BrowserRouter>);
   const EqualButton = component.getByTestId("EqualButton");   
   const DiffrentButton = component.getByTestId("DiffrentButton");
   const AllButton = component.getByTestId("AllButton");
   let styleEqual= getComputedStyle(EqualButton);

   
   let styleDiffrent= getComputedStyle(DiffrentButton);
   let styleAll= getComputedStyle(AllButton);
   expect(styleEqual.background).toEqual("rgb(0, 191, 165)");
   expect(styleDiffrent.background).toEqual(RED_COLOR);
   expect(styleAll.background).toEqual(WHITE_COLOR);
   fireEvent.click(EqualButton);
    styleEqual= getComputedStyle(EqualButton);
    styleDiffrent= getComputedStyle(DiffrentButton);
    styleAll= getComputedStyle(AllButton);
   expect(styleEqual.background).toEqual(WHITE_COLOR);
   expect(styleDiffrent.background).toEqual(RED_COLOR);
   expect(styleAll.background).toEqual("rgb(0, 145, 234)");
   fireEvent.click(DiffrentButton);
    styleEqual= getComputedStyle(EqualButton);
    styleDiffrent= getComputedStyle(DiffrentButton);
    styleAll= getComputedStyle(AllButton);
   expect(styleEqual.background).toEqual("rgb(0, 191, 165)");
   expect(styleDiffrent.background).toEqual(WHITE_COLOR);
   expect(styleAll.background).toEqual(BLUE_COMPAR_BACKGROND);
  
   });     
});
 