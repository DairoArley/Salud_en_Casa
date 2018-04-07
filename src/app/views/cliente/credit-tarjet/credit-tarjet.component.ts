import { Component, OnInit } from '@angular/core';
import { payUService } from '../../../services/payU.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { AuthenticationService } from '../../../services/authentication.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Config } from '../../../config';
import { payment } from '../../../models/payment.model';

@Component({
  selector: 'app-credit-tarjet',
  templateUrl: './credit-tarjet.component.html',
  styleUrls: ['./credit-tarjet.component.css']
})
export class CreditTarjetComponent implements OnInit {
  payment : Array<payment>;
  pago = new payment();
  peticion;
  home =true;
  res = false;

  constructor(private _router: Router, public _locker: SessionStorageService,
    public _authenticationService: AuthenticationService,
    public _payUService :payUService) { }

  ngOnInit() {
  }

  verifyTarjert(payment:payment) {
    payment = this.pago;
    this.peticion = {
      language: "es",
      command: "SUBMIT_TRANSACTION",
      merchant: {
         apiKey: "4Vj8eK4rloUd272L48hsrarnUA",
         apiLogin: "pRRXKOl8ikMmt9u"
      },
      transaction: {
         order: {
            accountId: "512321",
            referenceCode: "TestPayU",
            description: "payment test",
            language: "es",
            signature: "7ee7cf808ce6a39b17481c54f2c57acc",
            notifyUrl: "http://www.tes.com/confirmation",
            additionalValues: {
               TX_VALUE: {
                  value: "20000",
                  currency: "COP"
            },
               TX_TAX: {
                  value: "3193",
                  currency: "COP"
            },
               TX_TAX_RETURN_BASE: {
                  value: "16806",
                  currency: "COP"
            }
            },
            buyer: {
               merchantBuyerId: 1,
               fullName: "First name and second buyer  name",
               emailAddress: "buyer_test@test.com",
               contactPhone: "7563126",
               dniNumber: "5415668464654",
               shippingAddress: {
                  street1: "calle 100",
                  street2: "5555487",
                  city: "Medellin",
                  state: "Antioquia",
                  country: "CO",
                  postalCode: "000000",
                  phone: "7563126"
               }
            },
            shippingAddress: {
               street1: "calle 100",
               street2: "5555487",
               city: "Medellin",
               state: "Antioquia",
               country: "CO",
               postalCode: "0000000",
               phone: "7563126"
            }
         },
         payer: {
            merchantPayerId: "1",
            fullName: "First name and second payer name",
            emailAddress: "payer_test@test.com",
            contactPhone: "7563126",
            dniNumber: "5415668464654",
            billingAddress: {
               street1: "calle 93",
               street2: "125544",
               city: "Bogota",
               state: "Bogota DC",
               country: "CO",
               postalCode: "000000",
               phone: "7563126"
            }
         },
         creditCard: {
            number: payment.number,
            securityCode: payment.securityCode,
            expirationDate:payment.expirationDate,
            name: "REJECTED"
         },
         extraParameters: {
            INSTALLMENTS_NUMBER: "1"
         },
         type: "AUTHORIZATION_AND_CAPTURE",
         paymentMethod: "VISA",
         paymentCountry: "CO",
         deviceSessionId: "vghs6tvkcle931686k1900o6e1",
         ipAddress: "127.0.0.1",
         cookie: "pt1t38347bs6jc9ruv2ecpv7o2",
         userAgent: "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
      },
      test: false
   }

      
		this._payUService.verify(this.peticion).subscribe(
			(data: payment[]) => {
        this.payment = data;
        this.home = false;
        this.res = true;
			
			},
			err => {
				console.log(err);
			},
			() => {
				//console.log('finished!');
				//console.log(this.implement);
			}
		);
  }

}
