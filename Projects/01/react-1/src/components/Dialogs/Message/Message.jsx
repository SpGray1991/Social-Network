import s from "./Message.module.css";

const Message = (props) => {
  return (
    <>
      <div className={s.message}>
        <img
          className={s.avatar}
          src="https://pristor.ru/wp-content/uploads/2019/11/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA014.jpg"
        ></img>
        {props.message}
      </div>
      <div className={s.answer}>
        <img
          className={s.avatar}
          src="https://pristor.ru/wp-content/uploads/2019/11/%D0%90%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%B4%D0%B5%D0%B2%D1%83%D1%88%D0%B5%D0%BA001.jpg"
        ></img>
        {props.message}
      </div>
    </>
  );
};

export default Message;
