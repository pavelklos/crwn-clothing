import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, routeName, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {
        // items.map((item) => (
        //   <div key={item.id}>{item.id} - <b>{item.name}</b></div>
        // ))
        items
          .filter((item, idx) => idx < 4)
          // .map((item, idx) => (
            // <div key={item.id}>[{idx}] {item.id} - <b>{item.name}</b> - ${item.price}</div>
          // .map(({id, ...otherItemProps}) => (
          //   <CollectionItem key={id} {...otherItemProps}/>
          .map((item) => (
            <CollectionItem key={item.id} item={item}/>
        ))
      }
    </div>
  </div>
)

export default CollectionPreview;