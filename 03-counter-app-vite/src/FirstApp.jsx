import PropTypes from 'prop-types';

export const FirstApp = ( {tittle, subTittle = 'No hay subtítulo', name= 'Hairo Gonzales'} ) => {    
  return (
    <>
        <h1>{tittle}</h1>
        <p>{subTittle}</p>
        <p>{ name }</p>
    </>
  )
}


FirstApp.propTypes = {
  tittle: PropTypes.string.isRequired,
  subTittle: PropTypes.number,
}

// FirstApp.defaultProps = {
//   name: 'Hairo Gonzales',
//   subTittle:'No hay subtítulo',
//   // tittle:'No hay título',
// }