import React from "react";
import cn from 'classnames';
import PropTypes from 'prop-types';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { markValues, onRemove } = this.props;

        return (
            <div className="list-group">{
                markValues.map((item, index) => {
                    return (
                        <button onClick={onRemove}
                                data-key={index}
                                key={index}
                                type="button"
                                className={cn("list-group-item", "list-group-item-action")}>
                            {item}
                        </button>
                    )
                })
            }</div>
        )
    }
}

Content.propTypes = {
    markValues: PropTypes.array
}

export default Content;