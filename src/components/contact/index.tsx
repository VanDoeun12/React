import React from "react";
import"./index.css";




interface ContactProps {}


const Contact: React.FC<ContactProps> = (props) =>{
    const {} = props;

    return(
        <div className="contact">
            <h1 className="big-title">Contact</h1>
            <p className="description">
                We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.
            </p>
            <p className="address">
                Catering Service, 42nd Living St, 43043 New York, NY<br/>
                Phone: +1 233 456 7890<br/>
                Email: catering@catering.com, or you can send us a message here:
            </p>

            <form action="">
               <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" required/>
               </div>

               <div className="form-group">
                <input type="number" className="form-control" placeholder="How many people" required/>
               </div>

               <div className="form-group">
                <input type="datetime-local" className="form-control" placeholder="Date and time" required/>
               </div>

               <div className="form-group">
                <input type="text" className="form-control" placeholder="Message \ Special required" />
               </div>

               <input className="btn-submit" type="submit" value="SEND MESSAGE" />
            </form>
        </div>
    )
}

export default Contact;