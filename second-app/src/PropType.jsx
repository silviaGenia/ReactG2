import PropTypes from "prop-types"

export const PropType = ({ title, valor = 1312341414134 }) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{valor}</p>
      <p>Buen dia clase</p>
    </>
  )
}

PropType.propTypes = {
  title: PropTypes.string.isRequired,
  valor: PropTypes.number
}


/* PropType.defaultProps = {
  valor: 1312341414134
} */