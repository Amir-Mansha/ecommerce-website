import React from 'react'
import Header from '../../components/layout/header'
import cardimg from '../../assets/card_img.png'
import Footer from '../../components/layout/footer';

import './Payment.css'


function PaymentSquare() {
  return (
    <div>
      <Header />
      <div class="container">

<div className="row justify-content-center mt-5 mb-5">

<form action="">

    <div class="row">

        <div class="col">

            <h3 class="title">billing address</h3>

            <div class="inputBox">
                <span>full name :</span>
                <input type="text" placeholder="john deo" required/>
            </div>
            <div class="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com" required/>
            </div>
            <div class="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality" required/>
            </div>
            <div class="inputBox">
                <span>city :</span>
                <input type="text" placeholder="mumbai"required/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="india" required/>
                </div>
                <div class="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456" required/>
                </div>
            </div>

        </div>

        <div class="col">

            <h3 class="title">payment</h3>

            <div class="inputBox">
                <span>cards accepted :</span>
                <img src={cardimg} alt=""/>
            </div>
            <div class="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. john deo" required/>
            </div>
            <div class="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444" required/>
            </div>
            <div class="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january" required/>
            </div>

            <div class="flex">
                <div class="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022" required/>
                </div>
                <div class="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234" required/>
                </div>
            </div>

        </div>

    </div>

    <input type="submit" value="proceed to checkout" class="submit-btn"/>

</form>

</div>

</div> 
<Footer />

    </div>
  )
}

export default PaymentSquare

