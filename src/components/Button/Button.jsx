import ButtonCss from '../Button/ButtonCss.module.css';

const Button = ({ onClick })=> {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  }
    return (
      <button className={ButtonCss.button} onClick={handleClick}>
        Load more
      </button>
    );
  }

export default Button;