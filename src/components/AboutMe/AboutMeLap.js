import React from 'react';
import PropTypes from 'prop-types';

const AboutMeLap = ({ data }) => {
  return (
    <div>
      <div className="laptop:w-[420px] laptop:ml-auto text-left">
        <p className="mb-2  desktop:mb-8">
          {data.threeParagraphFirst}
          <span className="text-caveat text-lg laptop:text-2xl laptop:leading-[0.9]">
            {data.threeParagraphSpan}
          </span>
          <br />
          <span className="text-black block mt-4">
            {data.threeParagraphThird}
          </span>
        </p>
      </div>
      <div className="text-left laptop:w-[640px] laptop:mt-12">
        <p className="mb-6 laptop:mb-0">{data.fourParagraph}</p>
        <p className="mb-4 laptop:mt-8 laptop:mb-0">
          <span className="text-caveat">{data.fiveParagraphSpan}</span>
        </p>
      </div>
    </div>
  );
};

export default AboutMeLap;

AboutMeLap.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};
