import React from "react";
import { useForm } from "react-hook-form";
import {DevTool} from "@hookform/devtools"
// import {yupResolver} from "@hookform/resolvers/yup"
// import * as yup from 'yup';


/*const shema = yup.object({
    nom : yup.string().required(),
   
    adress : yup.string().required().email()

}) */
export default function MonFormulaire () {
 

  

   
    const{register, handleSubmit,watch, control, formState:{errors,
     isValid, isLoading, isSubmitted}} = useForm( 
     /*   { 
              defaultValues : {
                nom : 'moez',
                adress : '' ,
                age:'30',
                pwd :'123456',
                pwdd: '123456',
                check: false

            }
        },
       
     */
    )

    const SubmitForm = async(e) => {
        e.preventDefault
        console.log(e)
      
        
      }
     return (
        <>
        {(!isLoading && !isSubmitted) &&<div className="text text-success">isloading</div> }
       { (isValid && isSubmitted) && <div className="text text-success" role="alert">
        <strong>SUCCESS:</strong>
        FORM SUBMITED

       </div> }

         <h1 className=" text-success" style={{textAlign: 'center'}}>Mon Formulaire</h1>
             <div className="container">
              <form onSubmit={handleSubmit(SubmitForm)}>
                <div className="form-group">
                    <label htmlFor="nom" ><span className="text-success">NOM</span></label>
                    <input type="text" {...register('nom', {
                        required:"votre nom est invalid", 
                        maxLength : 15 ,
                        minLength : 5

                    } 

          )} className="form-control" placeholder="tapez votre nom" />
         


                  
                </div>
                {errors.nom && <div className="text text-danger">{errors.nom.message}</div>}
               <div className="form-group">
                    <label htmlFor="adress" ><span className="text-success">ADRESS</span></label>
                    <input type="text" {...register('adress',
                        {
                            required: 'Email is required',
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        
 } )} className="form-control" placeholder="tapez votre adress" />
                </div>
                {errors.adress && <div className="text text-danger">{errors.adress.message}</div>}
           
                <div className="form-group">
                    <label htmlFor="age" ><span className="text-success">AGE</span></label>
                    <input type="text" {...register('age' , {
                        required:"taper votre age" 

                    }
                    )} className="form-control" placeholder="tapez votre age"  />
                </div>
               
                {errors.age && <div className="text text-danger">{errors.age.message}</div>}

                <div className="form-group">
                    <label htmlFor="pwd" ><span className="text-success">MOT DE PASSE</span></label>
                    <input type="password" {...register('pwd',
                    {
                        required: "invalid mot de passe",
                        minLength: {
                          value: 8,
                          message: "must be 8 chars",
                        },
                        validate: (value) => {
                          return (
                            [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
                              pattern.test(value)
                            ) || "must include lower, upper, number, and special chars"
                          );
                        },
                      }
                    )} className="form-control" placeholder="tapez votre mot de passe " />
                </div>
                {errors.pwd && <div className="text text-danger">{errors.pwd.message}</div>}
                  
                <div className="form-group">
                    <label htmlFor="pwdd" ><span className="text-success">Retapez LE PWD</span></label>
                    <input type="password" {...register('pwdd' ,{
                        required : "retapez votre mote passe",
                        validate: (val) => {
                            if (watch('pwd') != val) {
                              return "Your passwords do no match";
                            }
                          }

                        }
                    
                    )} className="form-control" placeholder="Retapez votre mot de passe"  />
                </div>
                {errors.pwdd && <div className="text text-danger">{errors.pwdd.message}</div>}
                
                <div className="form-check">
                    <label htmlFor="check" className="form-check-label"><span className="text-success">Valider votre informations</span></label>
                    <input type="checkbox" {...register('check')} className="form-check-input" />
                </div>
                <div className="form-group">
                    <label> PAYS</label>
                    <select className="form-control"  {...register('monpays')}>
                        <option value='TN'>TUNISIE</option>
                        <option value="AG">ALGERIE</option>
                        <option value="MA">MAROC</option>
                        <option value="EG">EGYPT</option>
                    </select>
                    </div>
                <div className="form-group">
                    <button disabled={!isValid} className="btn btn-primary btn-sm mb-2" >Soumettre</button>
                  
                </div>
                


            </form>
            <DevTool control={control}/>
        </div>
       
        
        
        </>
    )
}