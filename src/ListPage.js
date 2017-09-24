import React from 'react';
import { Link } from 'react-router';
import Item from './Item';
import action from './action.js';

export default class ListPage extends React.Component {
  constructor(props) {
    super(props);

    const items = [];
    for (let i = 1; i < 20; i++) {
      items.push({
        id: i,
        text: `Item ${i}`,
      });
    }

    this.state = {
      items,
    };
  }

    render() {
    return (
      <div className="transition-item list-page">
        {this.state.items.map(item => (
          <Link
            key={item.id}
            className="list-item"
            onClick={e => action.onNext({
              name: 'CLICKED_ITEM_DATA',
              data: {
                position: e.target.getBoundingClientRect(),
              },
            })}
            to={`/detail/${item.id}`}
          >
            <Item {...item} />
          </Link>
        ))}
      </div>
    );
  }
}
