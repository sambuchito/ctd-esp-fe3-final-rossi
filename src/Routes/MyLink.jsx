import { useContextGlobal } from "./Components/utils/global.context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const MyLink = ({to, name}) => {

    const {theme} = useContextGlobal();

  return (
        <Link to={to} style={{ color: theme.font }}>
            <h3>{name}</h3>
        </Link>
  );
};

MyLink.propTypes = {
  to: PropTypes.string.isRequired, 
  name: PropTypes.string.isRequired, 
};

export default MyLink;