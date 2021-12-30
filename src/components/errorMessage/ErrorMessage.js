import img from './error.gif'

const ErrorMessage = () => {
  return (
    // <img src={'../../../public/error.gif'} alt='Oops!'/>
    <img style = {{display: 'block', width: '250px', height: '250px', objectFit: 'contain', margin: '0 auto'}} src={img} alt='Error'/>
  );
}

export default ErrorMessage;