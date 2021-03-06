import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Restaurant from './Restaurant';

function RestaurantsPicked({ restaurantsList }) {
  return (
    <div>
      <h3>My Choices</h3>
      <div>
        {restaurantsList.map(e => <Restaurant key={e.id} picked restaurant={e} />)}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  restaurantsList: state.restaurantsList,
});

RestaurantsPicked.propTypes = {
  restaurantsList: PropTypes.arrayOf(PropTypes.object),
};

RestaurantsPicked.defaultProps = {
  restaurantsList: [],
};

export default connect(mapStateToProps)(RestaurantsPicked);
