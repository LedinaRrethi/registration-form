import './App.css'
import {useForm , SubmitHandler} from "react-hook-form";

type FormData = {
  fullName : string;
  Email: string;
  Password: string;
};

function App() {

  const { register , formState: { errors }, handleSubmit , reset} = useForm<FormData>();


   const onSubmit : SubmitHandler<FormData> = async (data) => {
    console.log(data);
    reset();
    alert("Form is submitted , successfuly")
  };



  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>
        <input 
          type='text'
          {...register("fullName" , {required : true}) }
          aria-invalid={errors.fullName ? "true" : "false"}
        />
        {errors.fullName && <p>{errors?.fullName?.message}</p>}

         <label>Email</label>
        <input
          type="email"
          {...register("Email" , {required : "Please , email is required"})}
          aria-invalid={errors.Email ? "true" : "false"}
        />
        {errors.Email && <p>{errors?.Email.message}</p>}

        

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id='password' 
          {...register("Password" , {required: "Password is required"})} 
        />
        {errors.Password && <p>{errors.Password.message}</p>}

        <button type='submit'> Submit</button>

        

      </form>
      
    </>
  )
}

export default App;


