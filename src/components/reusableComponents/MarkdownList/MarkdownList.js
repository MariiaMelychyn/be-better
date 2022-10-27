import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/reusableComponents/Heading';

const MarkdownList = ({ listClassName, titleClassName, data, tag }) => {
  return (
    <div key={data.frontmatter.language}>
      <Heading
        tag={tag}
        className={titleClassName}
        text={data.frontmatter.title}
      />
      <div
        className={listClassName}
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </div>
  );
};

export default MarkdownList;

MarkdownList.propTypes = {
  listClassName: PropTypes.string.isRequired,
  titleClassName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  data: PropTypes.node.isRequired,
};
