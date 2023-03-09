import React, { useState } from 'react';
import Input from './Input';
import Checkbox from './Checkbox';
import Button from './Button';

function Registration(props) {
  const [isValue, setIsValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleChangeValue = (event) => {
    console.log(event.target.value);
    setIsValue(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleChecked = (event) => {
    console.log(event.target.value);
    setChecked(!checked);
  };
  return (
    <form className={'form-wrapper'}>
      <h2 className='form-header'>Регистрация</h2>
      <Input
        type={'text'}
        placeholder={'Введите имя *'}
        size={'xg'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChangeValue}
      />
      <Input
        type={'text'}
        placeholder={'Введите email *'}
        size={'xg'}
        variant={'outlined'}
        value={email}
        onChange={handleChangeEmail}
      />
      <Input
        type={'password'}
        placeholder={'Пароль *'}
        size={'xg'}
        variant={'outlined'}
        value={password}
        onChange={handleChangePassword}
      />
      <Input
        type={'password'}
        placeholder={'Подтвердите пароль *'}
        size={'xg'}
        variant={'outlined'}
        value={confirmPassword}
        onChange={handleConfirmPassword}
      />
      <Checkbox
        type={'checkbox'}
        color={'info'}
        checked={checked}
        onChange={handleChecked}
        size={'md'}
        text={'Подтверждаю обработку персональных данных'}
      />
      <Button
        type={'submit'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
        text={'Зарегистрироваться'}
      />

      <>
        {/* Шаблоны */}
        {/* Input */}
        {/*       <Label color={'success'} text={'Успешно'} size={'xg'} />
      <Input
        type={type}
        placeholder={'Введите текст'}
        color={'success'}
        size={'xg'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChange}
      /> */}
        {/*    <Label color={'primary'} text={'Обязательно'} size={'lg'} />
      <Input
        type={type}
        placeholder={'Введите текст'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChange}
      /> */}
        {/* <Label color={'warning'} text={'Предупреждение'} size={'sm'} />
      <Input
        type={type}
        placeholder={'Введите текст'}
        color={'warning'}
        size={'sm'}
        variant={'outlined'}
        value={isValue}
        onChange={handleChange}
      />
 */}
        {/* Checkbox */}
        {/* <div className='checkbox-wrapper'>
        <Checkbox
          type={'checkbox'}
          color={'success'}
          checked={checked}
          onChange={handleChecked}
        />
        <Label color={'info'} text={'checkbox'} size={'sm'} />
      </div>
      <div className='checkbox-wrapper'>
        <Checkbox type={'radio'} color={'info'} />
        <Label color={'info'} text={'radio'} size={'sm'} />
        <Checkbox type={'radio'} color={'info'} />
        <Label color={'info'} text={'radio'} size={'sm'} />
      </div>

      <Button
        type={'submit'}
        color={'success'}
        size={'xg'}
        variant={'outlined'}
      />
      <Button
        type={'submit'}
        color={'primary'}
        size={'lg'}
        variant={'outlined'}
      />

      <Button type={'submit'} color={'info'} size={'md'} variant={'outlined'} />
      <Button
        type={'submit'}
        color={'warning'}
        size={'sm'}
        variant={'outlined'}
      /> */}
      </>
    </form>
  );
}

export default Registration;