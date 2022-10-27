import React from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/reusableComponents/Heading';
import AboutYou from 'components/AboutYou';

const AboutMePrimaryText = ({ data }) => {
  return (
    <div className="w-70 text-sm  laptop:text-base laptop:w-[310px] desktop:w-524 text-left desktop:ml-[124px]">
      <Heading
        tag="h2"
        className="hidden laptop:block title-primary text-left mb-4 laptop:mb-8 desktop:mb-13 laptop:font-semibold laptop:text-34"
        text={data.title}
      />

      <p className="mb-2 desktop:mb-8">
        <span className="text-black hidden laptop:inline">
          {data.oneParagraphFirst}
          <span className="text-caveat text-lg laptop:text-2xl laptop:leading-[0.9]">
            {' '}
            {data.oneParagraphSpan}
          </span>
        </span>
        {data.oneParagraphThird}
      </p>
      <p className="mb-2 desktop:mb-[26px]">
        <span className="text-caveat text-lg laptop:text-2xl laptop:leading-[0.9]">
          {data.twoParagraphSpan}
        </span>
        {data.twoParagraphThird}
      </p>

      <div className="laptop:hidden desktop:block">
        <p className=" mb-2 desktop:mb-8">
          {data.threeParagraphFirst}
          <span className="text-caveat text-lg laptop:text-2xl laptop:leading-[0.9]">
            {data.threeParagraphSpan}
          </span>
          {data.threeParagraphThird}
        </p>
        <p className="mb-6 laptop:mb-0">{data.fourParagraph}</p>
        <p className="mb-4 laptop:mb-0">
          <span className="text-caveat">{data.fiveParagraphSpan}</span>
        </p>
      </div>
      <AboutYou />
    </div>
  );
};

export default AboutMePrimaryText;

AboutMePrimaryText.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
};
