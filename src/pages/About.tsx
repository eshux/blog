import React from 'react';
import { H1, P } from '../components/Typography/Typography';
import Img from '../components/Image/Img';

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="row middle-xs">
          <div className="col-xs-12 col-sm-6">
            <Img src="https://picsum.photos/id/1062/600" w={600} h={600} />
          </div>
          <div className="col-xs-12 col-sm-5 col-sm-offset-1">
            <H1>Little about me</H1>
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </P>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
