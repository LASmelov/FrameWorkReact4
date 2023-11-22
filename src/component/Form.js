import React from 'react';
import { useForm } from 'react-hook-form';
import './module.css';
import images from './images/vizza_large.png';
import images1 from './images/Logo.png'


const Form = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);

    const newCVC = "**" + data.cvc.charAt(2);
    data.cvc = newCVC;
  };

  return (

<section className ="twocard">



    <form onSubmit={handleSubmit(handleFormSubmit)}>
      

    <div className='card2'>

<div className='poloska'></div>

<input
  type="text"
  name="cvc"
  placeholder='CVC'
  {...register("cvc", {
     required: 'This field is required',
     pattern: {
       value: /^[0-9]{3}$/,
       message: 'Enter a valid 3-digit CVC',
     },
  })}
/>
{errors.cvc && <span>{errors.cvc.message}</span>}


<img className ="logo" src={images1} alt="My Image" />



</div>


      <div className='card1'>

      <div className='card1flex'>
      <div>
<input
  type="text"
  name="cardHolderName"
  placeholder='Holder of card'
  {...register("cardHolderName", {
    required: 'This field is required',
    pattern: {
      value: /^[А-ЯА-я]+\s[А-ЯА-я]+$/,
      message: 'Enter first and last name',
    },
  })}
/>



        {errors.cardHolderName && <span>{errors.cardHolderName.message}</span>}
      </div>
      <div>
        
        <input
          type="text"
          name="cardNumber"
          placeholder='Number of card'
         {...register("cardNumber",{
            required: 'This field is required',
            pattern: {
              value: /^[0-9]{16}$/,
              message: 'Enter a valid 16-digit card number',
            },
          })}
        />
        {errors.cardNumber && <span>{errors.cardNumber.message}</span>}
      </div>

    


<label className='valid'>Valid THRU</label>

<div className='mmandyy'>
      <div>

    <input
      type="text"
      name="month"
      placeholder='MM'
      {...register("month",{
        required: 'This field is required',
        pattern: {
          value: /^(0[1-9]|1[0-2])$/,
          message: 'Enter a valid month in MM format',
        },
      })}
    />
    {errors.month && <span>{errors.month.message}</span>}
  </div>


  <div className='shless'>/</div>
  <div>
        
        <input
          type="text"
          name="year"
          placeholder='YY'
          {...register("year",{
            required: 'This field is required',
            pattern: {
              value: /(?!1[3-9])\d{2}$/,
              message: 'Enter a valid year in YY format',
            },
          })}
        />
        {errors.year && <span>{errors.year.message}</span>}
   </div>

   <img src={images} alt="My Image" />
   </div>


   </div>

  </div>


  
    

    <button type="submit" className='butonshik' >Send</button>
  </form>
  
    </section>
  );
};

export default Form;