import { Package } from "../models/db.js";
import Culqi from 'culqi-node'
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = new Stripe('');

const culqi = new Culqi({
    privateKey: process.env.privateKey,
    publicKey: process.env.publicKey,
    pciCompliant: true
});

export const payByCulqi = async (req, res) => {
    try {
        const { packageId } = req.body;
        const user = req.user;

        const packageSystem = await Package.findOne({ where: { id: packageId } });

        if (!packageSystem) {
            return res.status(300).json({ message: 'Package is not exit.' });
        }

        await culqi.tokens.createToken({
            card_number: '5111111111111118',
            cvv: '039',
            expiration_month: '06',
            expiration_year: '25',
            email: 'review@culqi.com'
        }).then((data) => {
            try {
                culqi.charges.createCharge({
                    amount: packageSystem.price,
                    currency_code: 'PEN',
                    email: user.email,
                    installments: 0,
                    description: packageSystem.description,
                    source_id: data.id
                }).then((respuesta) => {
                    // console.log(respuesta);
                    return res.status(200).send({ message: respuesta });
                }).catch(err => {
                    // console.error(err);
                    return res.status(500).send({ message: err });
                })
            } catch (error) {
                // console.error(error);
                return res.status(500).send({ message: error })
            }
        })
            .catch(err => {
                // console.error(err);
                return res.status(500).send({ message: err });
            })
    } catch (error) {
        return res.status(500).send({ message: err });
    }
}

export const payByStripe = async (req, res) => {
    try {
        
        const { packageId } = req.body;
        const user = req.user;

        const packageSystem = await Package.findOne({ where: { id: packageId } });

        if (!packageSystem) {
            return res.status(300).json({ message: 'Package is not exit.' });
        }


        const charge = await stripe.charges.create({
            amount: packageSystem.price, // Amount en centavos
            currency: 'usd',
            source: 'tok_visa', // Token de prueba, ej: 'tok_visa'
            description: 'Test payment',
        });

        console.log('Payment successful:', charge);
        return res.status(200).send({ message: charge });
    } catch (error) {
        return res.status(500).send({ message: error });
    }
}