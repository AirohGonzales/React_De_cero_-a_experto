import PropTypes from 'prop-types';

const newMessage = {
    message: 'Hola mundo',
    title: 'Airoh'
};

const getResult = (a, b) =>{
    return a + b;
}

export const FirstApp = ( {title, subTitle} ) => {    
    
    return (
    <>
        <h1>{ title }</h1>
        <h1>{ subTitle }</h1>
        {/* <h1>{ getResult(1, 2) }</h1> */}
        {/* { JSON.stringify( newMessage )} */}
        {/* <p>Soy un subtitulo </p> */}
    </>   
  )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number,
}
