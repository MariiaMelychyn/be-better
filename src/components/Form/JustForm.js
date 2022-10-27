import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import { useForm, Controller } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import PhoneInput from 'react-phone-input-2';
import Button from 'components/reusableComponents/Button';

import 'react-phone-input-2/lib/style.css';
import {
  form,
  input,
  label,
  checkbox,
  checkboxLabel,
  check,
  acceptText,
  phonebutton,
  phoneinput,
  phonedropdown,
  error,
  checkError,
  buttonF,
} from './Form.module.css';

import locationApi from 'services/locationApi';
import sendMessageToTg from 'services/telegramApi';

const isBrowser = typeof window !== 'undefined';

const JustForm = ({
  clickFrom = '',
  formClassname = '',
  checkboxClassname = 'mb-3',
  classnameAccept = '',
  openModal,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState('');
  const { t } = useTranslation();
  const { language } = useI18next();
  const { nameInput, accept, button, errorMessage } = t('form', {
    returnObjects: true,
  });

  const schema = yup
    .object({
      name: yup
        .string()
        .matches(
          /^[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ]{1}[а-яА-ЯёЁa-zA-ZіІїЇґҐєЄ0-9' ]+$/,
          errorMessage.nameMatch
        )
        .min(3, errorMessage.nameMin)
        .max(100, errorMessage.nameMax)
        .required(errorMessage.nameRequired),
      email: yup
        .string()
        .email()
        .matches(
          /^[a-zA-Z0-9+_.]+[a-zA-Z0-9+_.-/]+[a-zA-Z0-9+_./-]+@[a-zA-Z0-9_.-]+$/,
          errorMessage.emailMatch
        )
        .min(10, errorMessage.emailMin)
        .max(63, errorMessage.emailMax)
        .required(errorMessage.emailRequired),
      phone: yup
        .string()
        .min(9, errorMessage.phoneMin)
        .max(13, errorMessage.phoneMax)
        .required(errorMessage.phoneReguired),
      checkbox: yup.boolean().oneOf([true], errorMessage.check),
    })
    .required();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  const [userLocation, setUserLocation] = React.useState('');

  locationApi()
    .then(location => setUserLocation(location))
    .catch(err => console.log(err));

  useFormPersist(`form-${clickFrom}`, {
    watch,
    setValue,
    storage: isBrowser ? window.localStorage : null,
  });

useEffect(()=>{
  switch (language) {
    case 'uk':
      setCurrentLanguage('Ukrainian');
      break;

    case 'ru':
      setCurrentLanguage('Russian');
      break;

    case 'en':
      setCurrentLanguage('English');
      break;

    default:
      setCurrentLanguage('');
  }
}, [language])
  

  const onSubmit = async data => {
    let message = `
    <b>Request information:</b>
    Name: ${data.name}
    Email: ${data.email}
    Phone: ${data.phone}
    Checkbox: yes
    
    <b>Additional information:</b>
    <i>Form name: contact</i>
    <i>Form send from:</i> <b>${clickFrom}</b>
    <i>Site language:</i> <b>${currentLanguage}</b>
    <a href="https://be-better.today">https://be-better.today</a>
    ------
    `;
    console.log(message);
    // sendMessageToTg(message)
    //   .then(() => {
    //     openModal(true);
    //   })
    //   .catch(error => alert(error))
    //   .finally(() => {
    //     reset();
    //     localStorage.removeItem(`form-${clickFrom}`);
    //   });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={`${form} ${formClassname}`}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div className="relative">
        <input
          id={`name-${clickFrom}`}
          {...register('name')}
          className={`${input} ${errors.name ? '!text-error' : ''}`}
          placeholder=" "
        />
        <label
          className={`${label} ${errors.name ? '!text-error' : ''}`}
          htmlFor={`name-${clickFrom}`}
        >
          {nameInput}
        </label>
        <p className={errors.name && `${error}`}>{errors.name?.message}</p>
      </div>
      <div className="relative ">
        <input
          id={`email-${clickFrom}`}
          {...register('email')}
          className={`${input} ${errors.email ? '!text-error' : ''}`}
          placeholder=" "
        />
        <label
          className={`${label} ${errors.email ? '!text-error' : ''}`}
          htmlFor={`email-${clickFrom}`}
        >
          E-mail
        </label>
        <p className={errors.email && `${error}`}>{errors.email?.message}</p>
      </div>
      <Controller
        name="phone"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="relative">
            <PhoneInput
              country={userLocation || 'ua'}
              placeholder="Enter phone number"
              preferredCountries={['ua', 'gb']}
              enableSearch="true"
              searchPlaceholder="Choose country"
              disableSearchIcon="true"
              buttonClass={phonebutton}
              inputClass={phoneinput}
              dropdownClass={phonedropdown}
              {...field}
            />
            <p className={errors.phone && `${error}`}>
              {errors.phone?.message}
            </p>
          </div>
        )}
      />
      <div className={`relative ${checkboxClassname}`}>
        <label className={checkboxLabel}>
          <input
            type="checkbox"
            name="checkbox"
            {...register('checkbox')}
            className={checkbox}
          />
          <span
            className={`${check} ${errors.checkbox ? '!border-error' : ''}`}
          ></span>
          <span className={`${acceptText} ${classnameAccept}`}>{accept}</span>
        </label>
        <p className={checkError}>{errors.checkbox?.message}</p>
      </div>
      <Button id="button-form" type="submit" className={buttonF}>
        {button}
      </Button>
    </form>
  );
};

JustForm.propTypes = {
  clickFrom: PropTypes.string.isRequired,
  formClassname: PropTypes.string,
  checkboxClassname: PropTypes.string,
  classnameAccept: PropTypes.string,
  openModal: PropTypes.func.isRequired,
};
export default JustForm;
