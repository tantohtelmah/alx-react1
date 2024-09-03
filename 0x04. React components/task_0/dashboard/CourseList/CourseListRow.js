import React from 'react';
import PropTypes from 'prop-types';

const rowStyle = { backgroundColor: '#f5f5f5ab' };
const headerStyle = { backgroundColor: '#deb5b545' };

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const style = isHeader ? headerStyle : rowStyle;

  return (
    <tr style={style}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
