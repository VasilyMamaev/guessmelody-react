import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./app";

configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `https://t4.bcbits.com/stream/3f72f995cb11cedbe4c85839f6ef4bd1/mp3-128/3674059115?p=0&ts=1578485342&t=0eb18d6436b04d8cb7d84d0a505d0a00c8d35ae1&token=1578485342_17fa019eaf1a164e666fb0e35b9d6de257108a20`,
          genre: `jazz`
        },
        {
          src: `https://t4.bcbits.com/stream/3f72f995cb11cedbe4c85839f6ef4bd1/mp3-128/3674059115?p=0&ts=1578485342&t=0eb18d6436b04d8cb7d84d0a505d0a00c8d35ae1&token=1578485342_17fa019eaf1a164e666fb0e35b9d6de257108a20`,
          genre: `rock`
        },
        {
          src: `https://t4.bcbits.com/stream/3f72f995cb11cedbe4c85839f6ef4bd1/mp3-128/3674059115?p=0&ts=1578485342&t=0eb18d6436b04d8cb7d84d0a505d0a00c8d35ae1&token=1578485342_17fa019eaf1a164e666fb0e35b9d6de257108a20`,
          genre: `jazz`
        },
        {
          src: `https://t4.bcbits.com/stream/3f72f995cb11cedbe4c85839f6ef4bd1/mp3-128/3674059115?p=0&ts=1578485342&t=0eb18d6436b04d8cb7d84d0a505d0a00c8d35ae1&token=1578485342_17fa019eaf1a164e666fb0e35b9d6de257108a20`,
          genre: `blues`
        },
      ]
    },
    {
      type: `artist`,
      song: {
        artist: `One`,
        src: ``,
      },
      answers: [
        {
          picture: ``,
          artist: `One`
        }
      ]
    }
  ]
};


it(`on click on WelcomeScreen App switches to the first question`, () => {
  const {questions} = mock;
  const app = mount(<App
    errorCount={0}
    gameTime={0}
    questions={questions}
  />);

  const button = app.find(`button`);
  button.simulate(`click`);
  app.update();

  expect(app.state(`question`)).toEqual(0);

  const title = app.find(`.game__title`);
  expect(title).toHaveLength(1);
  expect(title.text().indexOf(`rock`)).toBeGreaterThanOrEqual(0);
});
