import React from 'react'
import axios from 'axios'
import { backend } from '../../Links'

function Pay({ courseId, bought }) {
    async function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }
            script.onerror = () => {
                resolve(false)
            }
            document.body.appendChild(script)
        })
    }

    async function displayRazorpay() {
        var userData = null
        try {
            let session = localStorage.getItem('session')
            if (session) {
                // send a post request to the backend to get the user profile
                axios
                    .post(`${backend}/user/info`, {
                        token: session,
                    })
                    .then((res) => {
                        console.log(res.data)
                        userData = res.data
                    })
            }
        } catch (error) {
            console.log(error)
        }
        const res = await loadScript(
            'https://checkout.razorpay.com/v1/checkout.js'
        )

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        try {
            const result = await axios.post(
                `${backend}/pay/purchase/${courseId}`,
                {
                    token: localStorage.getItem('session'),
                }
            )

            if (!result) {
                alert('Server error. Are you online?')
                return
            }

            const { amount, id: order_id, currency, notes } = result.data

            const options = {
                key: 'rzp_test_FotajhzORk2aYr',
                amount: amount.toString(),
                currency: currency,
                name: 'Satori Learn',
                description: 'Test Transaction',
                order_id: order_id,
                notes: notes,
                handler: async function (response) {
                    const data = {
                        orderCreationId: order_id,
                        razorpayPaymentId: response.razorpay_payment_id,
                        razorpayOrderId: response.razorpay_order_id,
                        razorpaySignature: response.razorpay_signature,
                        notes: notes,
                        token: localStorage.getItem('session'),
                    }

                    const result = await axios.post(
                        `${backend}/pay/verify`,
                        data
                    )

                    if (result.data.msg === 'success') {
                        alert('Payment Successful')
                        // reload the page
                        window.location.reload()
                    } else {
                        alert('Payment Failed')
                    }
                },
                prefill: {
                    name: userData ? userData.name : null,
                    email: userData ? userData.email : null,
                },
                theme: {
                    color: '#7289da',
                },
            }

            const paymentObject = new window.Razorpay(options)
            paymentObject.open()
        } catch (error) {
            console.error('Error:', error.message)
        }
    }

    var button
    if (bought) {
        button = (
            <button className="App-link hover:cursor-not-allowed">
                Already Bought
            </button>
        )
    } else {
        button = (
            <button
                className="App-link bg-secondary hover:bg-primary text-white hover:text-black font-bold py-2 px-4 rounded"
                onClick={displayRazorpay}
            >
                Buy Now
            </button>
        )
    }

    return <div>{button}</div>
}

export default Pay
