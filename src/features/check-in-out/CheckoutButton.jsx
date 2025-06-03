import { useCheckout } from './useCheckout';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';

/*eslint-disable */

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckingOut } = useCheckout();

  if (!bookingId) return null;

  return (
    <Button
      variation="primary"
      size="small"
      onClick={() => checkout({ bookingId })}
      disabled={isCheckingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;

CheckoutButton.propTypes = {
  bookingId: PropTypes.number.isRequired,
};
