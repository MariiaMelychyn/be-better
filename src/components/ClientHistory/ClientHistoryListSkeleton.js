import React from 'react';
import ClientHistoryItem from './ClientHistoryItem';

const ClientHistoryListSkeleton = ({ clients }) => {
  return (
    <>
      <ul className="flex pb-[5px]">
        {!!clients.length &&
          clients.map(({ frontmatter }, id) => {
            return (
              <li className="w-full mx-auto shrink-0" key={id}>
                <ClientHistoryItem itemData={frontmatter} />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ClientHistoryListSkeleton;
