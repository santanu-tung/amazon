import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    const [loginUser, SetLoginUser] = useContext(UserContext);

  // watch input value by passing the name of it
    return (
        <form className="shipment-form" onSubmit={handleSubmit(onSubmit)}>
         
           

     
            <input name="name" defaultValue={loginUser.name} ref={register({ required: true })} placeholder="your name" />
            {errors.name && <span className="error"> name is required</span>}

            <input name="email" defaultValue={loginUser.email} ref={register({ required: true })} placeholder="your email"/>
            {errors.email && <span className="error"> email is required</span>}
            
            
            <input name="address" ref={register({ required: true })} placeholder="your address" />
            {errors.address && <span className="error"> address is required</span>}
            
            <input name="country" ref={register({ required: true })} placeholder="your country"/>
            {errors.country && <span className="error"> country is required</span>}

            <input name="phone" ref={register({ required: true })} placeholder="youre phone " />
            {errors.phone  && <span className="error"> phone  is required</span>}



            <input type="submit" />
        </form>
    );
};

export default Shipment;